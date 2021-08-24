import s from "./Buttons.module.css"

const Buttons = ({onGood, onNeutral, onBad}) => {
  return (
    <div>
      <button type="button" className={s.button__good} onClick={onGood}>
        Good
      </button>
      <button type="button" className={s.button__neutral} onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" className={s.button__bad} onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

export default Buttons;
