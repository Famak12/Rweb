import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header.jsx'
import Testimonials from './components/Testimonials.jsx'
import Middlecontainer from './components/Middlecontainer.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Middlecontainer />
    <Testimonials />
  </StrictMode>,
)
