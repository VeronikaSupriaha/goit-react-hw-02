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
      <button onClick={() => updateFeedback('good')}>Good </button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}
