import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import WorkingOn from "./pages/Working";
import Home from "./pages/Home";
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';

function App() {
  const location = useLocation(); // get current location
  const [onWorkingPage, setOnWorkingPage] = useState(false);

  useEffect(() => {
    if (location.pathname === "/working-on") {
      setOnWorkingPage(true);
    } else {
      setOnWorkingPage(false);
    }
  }, [location]);

  return (
    <div className="min-h-screen scroll-smooth">
      <ToastContainer />
      <Header location={onWorkingPage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/working-on" element={<WorkingOn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
