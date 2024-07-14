import './App.css'
import AboutPerson from './views/Components/AboutPerson/AboutPerson'
import Brands from './views/Components/Brands/Brands'
import ContactsRecomended from './views/Components/Contacts/ContactsRecomended'
import FooterComponent from './views/Components/Footer/FooterComponent'
import GoogleAds from './views/Components/GoogleAdsSection/GoogleAds'
import About from './views/Components/Header/About/About'
import Nav from './views/Components/Header/Nav/Nav'
import QuestionUser from './views/Components/QuestionUser/QuestionUser'
import Unnkown from './views/Components/UnknownSection/Unnkown'

function App() {

  return (
    <>
      <Nav />
      <About />
      <Brands />
      <AboutPerson />
      <GoogleAds />
      <Unnkown />
      <ContactsRecomended />
      <QuestionUser />
      <FooterComponent />

    </>
  )
}

export default App
