
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Clients } from './pages/Clients'
import { ApiClient } from './utilities/client'

function App() {
  const Client = new ApiClient("http://localhost:3000/api/v2/");

  return (
    <>
      <Header />
      <Clients Client={Client} />
      <Footer />
    </>
  )
}

export default App
