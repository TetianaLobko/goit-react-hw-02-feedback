import Notification from "../Notification/Notification";
import s from "./Statistics.module.css"

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  return (
    <div>
      {good || neutral || bad !== 0 ? (
        <div className={s.stats}>
          <p className={s.good}>
            Good: <span>{good}</span>
          </p>
          <p className={s.neutral}>
            Neutral: <span>{neutral}</span>
          </p>
          <p className={s.bad}>
            Bad: <span>{bad}</span>
          </p>
          <p>
            Total: <span>{total()}</span>
          </p>
          <p className={s.percent}>
            Positive feedback: <span>{positiveFeedbackPercentage()}%</span>
          </p>
        </div>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default Statistics;
