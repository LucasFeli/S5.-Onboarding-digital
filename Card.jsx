export const Card = ({ currentCardData,nextStep }) => {
  return (
    <div>
      <h1>{currentCardData.title}</h1>
      <p>{currentCardData.description}</p>
{/*-----------------------------Ejercicio 2 --------------------------------------------------------------*/}
      <button onClick={nextStep}>Next</button>
    
    </div>
  );
};
