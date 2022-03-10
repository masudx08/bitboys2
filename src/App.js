import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Datahub from './components/Datahub/Datahub';
import Technologies from './components/Technologies/Technologies';
import Foundation from './components/Foundation/Foundation';
import Team from './components/Team/Team';
import Usecases from './components/Usecases/Usecases';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Partners from './components/Partners/Partners';
import Roadmap from './components/Roadmap/Roadmap';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <MyNavbar />
      <Header />
      <About />
      <Datahub />
      <Technologies />
      <Foundation />
      <Team />
      <Usecases />
      <Tokenomics />
      <Partners />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
