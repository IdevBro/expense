const FasterCard = ({ name, sum }) => {
  return (
    <div className="fasterCard mt-32">
      <p className="name">{name}</p>
      <p className="sum">{sum}</p>
      <button className="addBtn">Add</button>
    </div>
  );
};

export default FasterCard;
