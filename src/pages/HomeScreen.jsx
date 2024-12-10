import SecondSection from "@/components/SecondSection"
import Footer from "../components/Footer"
import Integrations from "../components/Integrations"
import Pricing from "../components/Pricing"
import QuestionAnswer from "../components/QuenstionAnswer"
import Services from "../components/Services"
import DigitalBusinessCardLanding from "@/components/DigitalBusinessCardLanding "
import VirtualDemo from "@/components/virtualDemo"
import PurpleWaveBanner from "@/components/PurpleBanner"


const HomeScreen = () => {
  return (
    <div className=''>
      <PurpleWaveBanner/>
      <DigitalBusinessCardLanding/>
      <SecondSection/>
        <Services/>
        <VirtualDemo/>
        <Integrations/>
        <Pricing/>
        <QuestionAnswer/>
        <Footer/>
    </div>
  )
}

export default HomeScreen
