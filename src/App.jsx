import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useLocation } from 'react-router-dom'; // ✅ Needed for routing
import WorkingOn from "./pages/Working";
import Home from "./pages/Home";
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';

function App() {
  const[location, setLocation] = useState(false); // ✅ This is needed to update the page title on route change
  
  useLocation(); // ✅ This is needed to update the page title on route change
  useEffect(() => {
  if (window.location.pathname === "/workingon") {
    setLocation(true);
  }}, [location]);
  return (
    <div className="min-h-screen scroll-smooth">
      <ToastContainer />
      <Header location={location}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/working-on" element={<WorkingOn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
