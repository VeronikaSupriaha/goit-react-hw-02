import { useState, useEffect } from 'react';
import css from './App.module.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

export default function App() {
  const [feedbackTypes, setFeedbackTypes] = useState(() => {
    const storedData = localStorage.getItem('feedbackTypes');
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  useEffect(() => {
    localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const updateFeedback = feedbackType => {
    setFeedbackTypes(prevFeedbackTypes => ({
      ...prevFeedbackTypes,
      [feedbackType]: prevFeedbackTypes[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        setFeedbackTypes={setFeedbackTypes}
      />
      {totalFeedback > 0 ? (
        <Feedback feedbackTypes={feedbackTypes} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}
