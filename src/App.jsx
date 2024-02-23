import { Route } from "wouter";


import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Clients } from './pages/Clients'
import { Concessionaries } from './pages/Concesionaries'
import { ApiClient } from './utilities/client'
import { ToastContainer } from 'react-toastify';

function App() {
  const Client = new ApiClient("https://storeapivehiclesv2.onrender.com/api/v2/");

  return (
    <>
      <Header />
      <Route path="/allConcessionaries"><Concessionaries Client={Client} /></Route>
      <Route path="/allClients"><Clients Client={Client} /></Route>
      <Footer />
      <ToastContainer />

    </>
  )
}

export default App
