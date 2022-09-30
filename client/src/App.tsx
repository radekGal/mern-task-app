import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorPage, Home, Login, Calendar, Tasks, Settings } from './pages';
import { PrivateRoute, Shared } from './utils';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>landing page goes here</h1>} />
          <Route path='/login' element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Shared /></PrivateRoute>}>
            <Route index element={<Home />}/>
            <Route path="calendar" element={<Calendar />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
