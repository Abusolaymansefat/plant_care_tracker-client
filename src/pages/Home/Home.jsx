import Plants from '../../components/Home/Plants'
import AboutSection from '../../components/Shared/AboutSection/AboutSection'
import Banner from '../../components/Shared/Banner/Banner'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Banner/>
      <Plants />
      <AboutSection/>
    </div>
  )
}

export default Home