

export const Indicator = ({ totalSteps, currentStep, onStepChange }) => {
  return (
     <div className="flex justify-center space-x-2">
      {[...Array(totalSteps).keys()].map(index => (
        <span
          key={index}
          className={`inline-block rounded-full h-2 w-2 ${
            index === currentStep ? 'bg-black' : 'bg-gray-300'
          }`} onClick={() => onStepChange(index)} style = {{cursor: "pointer"}}
        /> 
      ))}
    </div>
  )
}

 