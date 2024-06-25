import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationPane from './components/NavigationPane';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import IntroductionToGit from './pages/IntroductionToGit';
import BranchesInGit from './pages/BranchesInGit';
import AddingYourChangesToGithub from './pages/AddingYourChangesToGithub';
import IntroductionToGodot from './pages/IntroductionToGodot';
import GodotInterface from './pages/GodotInterface';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-3 col-md-3 col-sm-3 overflow-auto p-0'>
            <NavigationPane />
          </div>
          
          <div className='col-lg-9 col-md-9 col-sm-9 content overflow-auto'>
            <div className='p-5'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/introduction-to-git/' element={<IntroductionToGit />} />
                <Route path='/branches-in-git/' element={<BranchesInGit />} />
                <Route path='/adding-your-changes-to-github/' element={<AddingYourChangesToGithub />} />
                <Route path='/introduction-to-godot/' element={<IntroductionToGodot />} />
                <Route path='/godot-interface' element={<GodotInterface />} />
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
