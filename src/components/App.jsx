import './App.css';

import Product from './Product';
import Mailbox from './Mailbox';
import BookList from './BookList ';
import Card from './Card';

const favouriteBooks = [
  { name: 'JS for beginners' },
  { name: 'React basics' },
  { name: 'React Router overview' },
];

function App() {
  return (
    <>
      <Card text="Card title">
        <p>Text between opening and closing tag</p>
        <p>Text between opening and closing tag</p>
        <p>Text between opening and closing tag</p>
      </Card>

      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />

      <div>
        <h2>Products</h2>

        <Product
          name="Tacos With Lime"
          imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          price={10.99}
        />
        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          price={14.29}
        />
        <Product />

        <h2>Mailbox</h2>

        <Mailbox username="Ivan" unreadMessages={['qeqweqwewq', 'eqweqwewq']} />
      </div>
    </>
  );
}

export default App;
