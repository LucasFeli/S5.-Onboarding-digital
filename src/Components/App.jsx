import { useState } from "react";
import { Card } from "./Card/Card";

export function App() {
  const tutorialData = [
    {
      id: 1,
      title: "Decida Moltes hores",
      description:
        "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",

      imageUrl: "./images/time_managment.svg",
      bgColor:"#22e3b9"
    },
    {
      id: 2,
      title: "Programa projects propis",
      description:
        "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials.la motivació i la implicació en el projecte ajudará a accelerar el teu aprenentatge .",
      imageUrl: "./images/programming.svg",
      bgColor:"#b3c7c6"
    },
    {
      id: 3,
      title: "Procura descansar",
      description:
        "Descansar bé i desconnectar són vitals. D´aquesta manera reduirás l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge",
      imageUrl: "./images/meditation.svg",
      bgColor:"#f0c04f"
    },
  ];

  const [step, setStep] = useState(0);
  const totalSteps = 3;

  const nextStep = () => {
    if (step < totalSteps - 1) {
      setStep((nextStep) => nextStep + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  return (
    <>
      <Card
        currentCardData={tutorialData[step]}
        step={step}
        totalSteps={totalSteps}
        prevStep={prevStep}
        nextStep={nextStep}
        onStepChange={handleStepChange}
      />
    </>
  );
}

export default App;
