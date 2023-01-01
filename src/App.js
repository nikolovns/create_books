import BookList from "./components/books/BookList";
import { BookProvider } from "./contexts/BookContext";
import './index.css'

function App() {
  return (
    <div>
      <BookProvider>
        <BookList />
      </BookProvider>
    </div>
  );
}

export default App;
