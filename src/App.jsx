import { useState} from "react";
import {Card} from '../Card';


export function App() {
  const tutorialData = [
    {
        title:'Decida Moltes hores',
        description:'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
    }
]

const[step, setStep] = useState(0)
  return (
    <>
    
      <Card currentCardData={tutorialData[step]} />
    </>
  )
}

export default App
