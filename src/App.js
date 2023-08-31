import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<AddBook />} />
      <Route path="/categories" element={<BookList />} />
      {/* Set home route as default */}
      <Route path="/" element={<AddBook />} default />
    </Routes>
  </>
);

export default App;
