import css from './Options.module.css';

export default function Options({
  updateFeedback,
  totalFeedback,
  setFeedbackTypes,
}) {
  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <div className={css.btnContainer}>
      <button
        className={css.feedbackBtn}
        onClick={() => updateFeedback('good')}
      >
        Good{' '}
      </button>
      <button
        className={css.feedbackBtn}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={css.feedbackBtn} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.feedbackBtn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
