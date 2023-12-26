import React from 'react'
import ReactDOM from 'react-dom/client'
import Grid from './Grid.jsx'
import './main.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
//import { MuiTypography } from './components/MuiTypography.jsx'
//import { MuiButton } from './components/MuiButton.jsx'
import { MuiTextField } from './components/MuiTextField.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Grid />
    <Footer />
    {/* <MuiTypography /> */}
    {/* <MuiButton /> */}
    <MuiTextField />
  </React.StrictMode>,
)
