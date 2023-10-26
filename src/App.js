
import './componens/Header'
import Header from './componens/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import CompanyLogos from './componens/CompanyLogos';
import Footer from './componens/Footer';
import Features from './componens/Features';

import './main.css'


function App() {
  return (
    <div className='wrapper' >
      <Header/>
      
      <main>
        <CompanyLogos />    
        <Features /> 

      </main>
       
       <Footer/>

    </div>
  );
}

export default App;
