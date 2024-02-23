import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero_section from './component/Hero_section';
import Licensed from './component/Licensed';
import Everygreen from './component/Everygreen';
import Our_Services from './component/Our_Services';
import Happy_client from './component/Happy_client';
import Gallery from './component/Gallery';
import Contact_us from './component/Contact_us';
import Last_section from './component/Last_section';
import Backtotop from './component/Backtotop';
import Preloader from './component/Preloader';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {
     useEffect(() => {
       Aos.init({
         duration: 1500,
             once: true,
       });
     }, [])
  return (
    < div className = " overflow-hidden" >
      <Hero_section />
      < Licensed />
      < Everygreen />
      < Our_Services />
      < Gallery />
        < Happy_client />
      < Contact_us />
      < Last_section />
      <Backtotop />
      <Preloader/>
    </div>
  );
}

export default App;
