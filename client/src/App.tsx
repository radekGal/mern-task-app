import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorPage, Home } from './pages';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
