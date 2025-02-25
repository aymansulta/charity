import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './context/NavigationContext'; // Import NavigationProvider
import Layout from './component/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Rules from './pages/Rules';
import Projects from './pages/Projects';
import Zakat from './pages/Zakat';
import Donate from './pages/Donate';
import Calculate from './pages/Calculate';
import Documents from './pages/Documents';
import { EnterPhone } from './pages/EnterPhone';
import EnterAmount from './pages/EnterAmount';
import Confirm from './pages/Confirm';
import Payment from './pages/Payment';

function App() {
  return (
    <Router>
      <NavigationProvider> {/* ✅ Wrap inside Router */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="rules" element={<Rules />} />
            <Route path="projects" element={<Projects />} />
            <Route path="zakat" element={<Zakat />} />
            <Route path="donate" element={<Donate />} />
            <Route path="calculate" element={<Calculate />} />
            <Route path="documents" element={<Documents />} />
            <Route path="enterPhone" element={<EnterPhone />} />
            <Route path="enterAmount" element={<EnterAmount />} />
            <Route path="confirm" element={<Confirm />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </NavigationProvider>
    </Router>
  );
}

export default App;

