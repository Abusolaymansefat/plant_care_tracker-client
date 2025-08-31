import Plants from '../../components/Home/Plants'
import AboutSection from '../../components/Shared/AboutSection/AboutSection'
import Banner from '../../components/Shared/Banner/Banner'
import SuccessStats from '../../components/Shared/SuccessStats/SuccessStats'
import Testimonials from '../../components/Shared/Testimonials/Testimonials'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Banner/>
      <Plants />
      <AboutSection/>
      <SuccessStats/>
      <Testimonials/>
    </div>
  )
}

export default Home