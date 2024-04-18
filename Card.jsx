export const Card = ({ currentCardData }) => {
  return (
    <div>
      <h1>{currentCardData.title}</h1>
      <p>{currentCardData.description}</p>
    </div>
  );
};
