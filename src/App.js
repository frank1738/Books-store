import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Books from './Components/Books';
import Categories from './Components/Categories';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
