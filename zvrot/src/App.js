import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap'
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Contact from './components/Contact';
function App() {
  return (
      <Router>
        <Header />
        <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Main />} />
        </Routes>
        <Footer />
        
      </Router>
  );
}

export default App;
