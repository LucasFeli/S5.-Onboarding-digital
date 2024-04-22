export const Card = ({
  currentCardData,
  step,
  nextStep,
  prevStep,
  totalSteps,
}) => {
  return (
    <div className="m-4">
      <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-l">
        <div
          className=" flex justify-center items-center"
          style={{ height: "250px" }}
        >
          <img
            src={currentCardData.imageUrl}
            alt={currentCardData.title}
            className="rounded-md"
            style={{ background: "#22e3b9" }}
          />
        </div>

        <div className="p-4">
          <h1 className="font-bold text-lg mb-2">{currentCardData.title} </h1>
          <p className="text-gray-700 text-base">
            {currentCardData.description}
          </p>
        </div>
        {/*Paginacion con botones*/}
        <div className="flex items-center justify-between px-6 py-4">
          {/* Paginación con puntos */}
          <div className="flex space-x-1">
            {/* Renderizado condicional de los puntos */}
            {[...Array(totalSteps).keys()].map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === step ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>

          <div className="flex justify-end mt-4">
            {step > 0 && (
              <button
                onClick={prevStep}
                className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-3xl"
              >
                ←
              </button>
            )}

            {step === 0 && <span className="p-2 invisible">←</span>}

            {step < totalSteps - 1 && (
              <button
                onClick={nextStep}
                className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-3xl"
              >
                →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
