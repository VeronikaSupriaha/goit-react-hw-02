import css from './Feedback.module.css';

export default function Feedback({ feedbackTypes, totalFeedback }) {
  return (
    <ul className={css.feedbackList}>
      <li>Good: {feedbackTypes.good} </li>
      <li>Neutral: {feedbackTypes.neutral} </li>
      <li>Bad: {feedbackTypes.bad} </li>
      <li>Total: {totalFeedback} </li>
      <li>
        Positive:
        {Math.round(
          ((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100
        )}
        %
      </li>
    </ul>
  );
}
