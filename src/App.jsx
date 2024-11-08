import { useState, useEffect, useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, LanguageContext } from './context/LanguageContext';
import { fetchPageData } from './services/api';

function AppContent() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    toast.success(language === 'tr' ? 'Portfolyoma hoş geldiniz! 👋' : 'Welcome to my portfolio! 👋',
    {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      }
    );

    fetchPageData()
    .then(data => {
      setPageData(data);
    })
    .catch(error => {
      toast.error(
        language === 'tr' ? 'Veri yüklenirken bir hata oluştu!' : 'Error loading data!',
        {
          position: "bottom-right",
          autoClose: 2000,
        }
      );
    })
    .finally(() => {
      setLoading(false);
    });
  },[language]);

return (
  <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#252128]">
    <Header />
    {loading ? (<div className="flex items-center justify-center min-h-screen">
      <div className="text-lg text-gray-600 dark:text-gray-300">
        {language === 'tr' ? 'Yükleniyor...' : 'Loading...'}
      </div>
    </div>
      ) : (
        <>
        <AboutMe data={pageData?.aboutMe} />
        <Skills data={pageData?.skills} />
        <Profile data={pageData?.profile} />
        <Projects data={pageData?.projects} />
        <Footer data={pageData?.footer} />
        </>
      )}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
  </div>
);
}

function App() {
  return (
      <ThemeProvider>
          <LanguageProvider>
              <AppContent />
          </LanguageProvider>
      </ThemeProvider>
  );
}

export default App;