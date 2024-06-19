import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationPane from './components/NavigationPane';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-auto p-0'>
            <NavigationPane />
          </div>
          
          <div className='col content overflow-auto'>
            <div className='p-5'>
              <Routes>
                {/* <Route path='/page-name' element={<Page />} /> */}
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
