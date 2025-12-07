import MainPage from './components/MainPage'
import HomePage from './components/pages/HomePage'
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'
import HowToBuy from './components/pages/HowToBuy'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>
      <Route element={<MainPage />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/how-to-buy' element={<HowToBuy />} />
      </Route>
    </Routes>
  )
}

export default App
