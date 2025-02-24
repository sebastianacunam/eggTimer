import React from "react";
import s from '../startButton/startButton.module.css';

interface StartButtonProps {
  onClick: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onClick }) => {
  return (
   <div className={s.startButtonContainer}>
    <h1 className={s.startButtonTitle}>Let's time <br/> your egg!

    </h1>
    <button
    //   className="px-6 py-3 text-lg font-bold bg-blue-500 rounded-lg"
      className={s.startButton}
      onClick={onClick}
    >
      Start
    </button>
   </div>
  );
};

export default StartButton;
