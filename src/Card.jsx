

export const Card = ({ currentCardData, nextStep }) => {
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
        <p className="text-gray-700 text-base">{currentCardData.description}</p>
      </div>
      {/*-----------------------------Ejercicio 2 --------------------------------------------------------------*/}
      <div className="px-6 pt-4 pb-2">
        {/* Aquí iría tu paginación con los puntos */}
        <div className="flex justify-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            -
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            -
          </span>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={nextStep}
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Next
          </button>
        </div>
      </div>
    </div>

    </div>
  );
};
