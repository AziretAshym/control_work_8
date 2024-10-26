import './App.css'
import Navbar from '../src/Components/Navbar/Navbar.tsx';
import Footer from './Components/Footer/Footer.tsx';
import Quotes from './Containers/Quotes/Quotes.tsx';
import { Route, Routes } from 'react-router-dom';
import NewQuote from './Containers/NewQuote/NewQuote';

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Quotes />}></Route>
        <Route path="/add-quote" element={<NewQuote />}></Route>
        <Route path="*" element={<h1 className="text-center">Not found</h1>} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
