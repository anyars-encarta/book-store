import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/books" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
      {/* Set books route as default */}
      <Route path="/*" element={<Books />} />
    </Routes>
  </>
);

export default App;
