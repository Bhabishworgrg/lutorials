import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationPane from './components/NavigationPane';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import IntroductionToGit from './pages/IntroductionToGit';
import BranchesInGit from './pages/BranchesInGit';
import AddingYourChangesToGithub from './pages/AddingYourChangesToGithub';
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
                <Route path='/lutorials/' element={<Home />} />
                <Route path='/lutorials/introduction-to-git/' element={<IntroductionToGit />} />
                <Route path='/lutorials/branches-in-git/' element={<BranchesInGit />} />
                <Route path='/lutorials/adding-your-changes-to-github/' element={<AddingYourChangesToGithub />} />
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
