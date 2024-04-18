import { useState } from "react";
import { Card } from "../Card";

export function App() {
  const tutorialData = [
    {
      title: "Decida Moltes hores",
      description:
        "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
    },
    {
      title: "Programa projects propis",
      description:
        "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials.la motivació i la implicació en el projecte ajudará a accelerar el teu aprenentatge .",
    },
    {
      title: "Procura descansar",
      description:
        "Descansar bé i desconnectar són vitals. D´aquesta manera reduirás l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge",
    },
  ];

  const [step, setStep] = useState(0);

  const nextStep = () =>{
    setStep (prev => prev+1)
  }
  return (
    <>
      <Card currentCardData={tutorialData[step]}
      {/*-----------------------------Ejercicio 2 --------------------------------------------------------------*/}
      nextStep={nextStep} />
      
    </>
    
  );
}

export default App;
