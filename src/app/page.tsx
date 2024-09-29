import Intro from '../components/intro/index';
import MenuSection from '../components/menu';
import Customer from '../components/customer';
import AboutTop from '../components/about-phone';
import AboutUs from '../components/about-us'
const page:React.FC = () => {
  return (
    <>
      
        <Intro/>
        <MenuSection/>
        <Customer/>
        <AboutTop/>
        <AboutUs/>
    </>
  )
}

export default page