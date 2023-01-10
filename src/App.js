import './App.css';
import Header from './components/Header/Header';
import Resources from './components/Resources/Resources';
import Section from './components/Section/Section';
import Tape from './components/Tape/Tape';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Article from './components/Article/Article';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Tape/>
      <Section/>
      <Tape/>
      <Resources/>
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
