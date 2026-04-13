import { useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { STANDARD_QUIZ_PARTS, SUPPLEMENTARY_QUIZ_PARTS } from '../../mocks/questions';
import ProfileStep from './ProfileStep';
import styles from './Quiz.module.css';
import Button from '../../components/Button';

export default function Quiz() {
  const [searchParams] = useSearchParams();
  const isRefining = searchParams.get('refine') === 'true';
  const quizParts = isRefining ? SUPPLEMENTARY_QUIZ_PARTS : STANDARD_QUIZ_PARTS;

  const location = useLocation();
  const initialAnswers = location.state?.previousAnswers || {};

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { tags: string[], filter?: string }>>(initialAnswers);
  const navigate = useNavigate();

  const handleSelect = (questionId: string, option: any) => {
    setAnswers(prev => ({ 
      ...prev, 
      [questionId]: { tags: option.tags, filter: option.filterCriteria } 
    }));
  };

  const handleProfileChange = (questionId: string, tags: string[], filter?: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { tags, filter }
    }));
  };

  const handleNext = () => {
    if (currentStep < quizParts.length - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/results', { state: { answers } });
    }
  };

  const currentPart = quizParts[currentStep];
  const progress = ((currentStep + 1) / quizParts.length) * 100;

  const isStepComplete = currentPart.partNumber === 1 && !isRefining 
    ? true // Allow passing the first step easily
    : currentPart.questions.every(q => answers[q.id] !== undefined);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
        </div>
        <p className={styles.progressText}>Étape {currentStep + 1} sur {quizParts.length}</p>
      </div>

      <div className={styles.partCard}>
        {currentPart.partNumber === 1 && !isRefining ? (
          <ProfileStep answers={answers} onChange={handleProfileChange} />
        ) : (
          <>
            <h2 className={styles.partTitle}>{currentPart.title}</h2>
            
            <div className={styles.questionsList}>
              {currentPart.questions.map((question) => (
                <div key={question.id} className={styles.questionSection}>
                  <h3 className={styles.questionTitle}>{question.title}</h3>
                  <div className={styles.optionsList}>
                    {question.options.map((opt, idx) => {
                      const isSelected = answers[question.id]?.tags === opt.tags;
                      return (
                        <button 
                          key={idx} 
                          className={`${styles.optionBtn} ${isSelected ? styles.selected : ''}`}
                          onClick={() => handleSelect(question.id, opt)}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className={styles.footer}>
        {currentStep > 0 && (
          <Button 
            variant="outline" 
            onClick={() => setCurrentStep(prev => prev - 1)}
          >
            ← Précédent
          </Button>
        )}
        <Button 
          variant="primary" 
          onClick={handleNext}
          disabled={!isStepComplete}
        >
          {currentStep === quizParts.length - 1 ? 'Voir les résultats !' : 'Suivant →'}
        </Button>
      </div>
    </div>
  );
}
