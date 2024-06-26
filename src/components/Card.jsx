const Card = ({ text, children }) => {
  return (
    <div>
      <h2>{text}</h2>
      {children}
    </div>
  );
};

export default Card;
