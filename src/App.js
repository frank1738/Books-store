import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Books from './Components/Books';
import Categories from './Components/Categories';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Books />}></Route>
        <Route path='/categories' element={<Categories />}></Route>
      </Routes>
    </Router>
  );
}

export default App;