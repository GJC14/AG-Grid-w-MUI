import React from 'react'
import ReactDOM from 'react-dom/client'
import Grid from './Grid.jsx'
import './main.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Grid />
    <Footer />
  </React.StrictMode>,
)
