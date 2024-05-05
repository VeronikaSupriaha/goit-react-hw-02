import css from './Feedback.module.css';

export default function Feedback({
  feedbackTypes,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <ul className={css.feedbackList}>
      <li className={css.feedbackText}>Good: {feedbackTypes.good} </li>
      <li className={css.feedbackText}>Neutral: {feedbackTypes.neutral} </li>
      <li className={css.feedbackText}>Bad: {feedbackTypes.bad} </li>
      <li className={css.feedbackText}>Total: {totalFeedback} </li>
      <li className={css.feedbackText}>Positive: {positiveFeedback}%</li>
    </ul>
  );
}
