import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
          <Header />
          <AboutMe />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
          <ToastContainer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;