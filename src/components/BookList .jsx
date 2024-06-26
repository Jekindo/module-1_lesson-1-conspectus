const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(({ name }, index) => {
        return <li key={index}>{name}</li>;
      })}
    </ul>
  );
};

export default BookList;
