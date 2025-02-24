import { useState, useEffect } from "react";
import StartButton from "../startButton/startButton";
import s from "./Home.module.css"


const TIMER_OPTIONS = [
  { label: "Suaves", duration: 180 },
  { label: "Medio suaves", duration: 300 },
  { label: "Duros", duration: 420 },
  { label: "Muy duros", duration: 600 },
];

export default function TimerApp() {
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      playAlarm();
      setRunning(false);
    }
    if (running && timeLeft !== null && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, running]);

  const startTimer = (duration: number) => {
    setTimeLeft(duration);
    setRunning(true);
  };

  const playAlarm = () => {
    const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/4381");
    audio.play();
  };

  return (
    <div className={s.mainContainer}>
      <div className={s.appContainer}>
        <h2 className={s.appName}> Egg Timer ♥</h2>
        <div className={s.appContainerFunctions}>
          <h2 className={s.blocks1}>_</h2>
          <h2 className={s.blocks2}>X</h2>
        </div>
      </div>
      {!started ? (
        <StartButton onClick={() => setStarted(true)} /> // Usamos el botón aquí
      ) : (
        <div>

          {timeLeft === null ? (
            <div className={s.homeContainer}>
              <h1 className={s.title}>¿Cómo los quieres hoy?</h1>
              <div className={s.prueba}>
                {TIMER_OPTIONS.map((option) => (
                  <div> 
                    <button
                      key={option.label}
                      className={s.options}
                      onClick={() => startTimer(option.duration)}
                    >
                      {option.label}
                    </button>

                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={s.homeContainer2}>
              <h1 className={s.title}>Estará listo en...</h1>
              <h1 className={s.time}>
                {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
              </h1>
              <button
                className={s.options}
                onClick={() => setTimeLeft(null)}
              >
                Cancelar
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
