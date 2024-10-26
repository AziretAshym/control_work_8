import './App.css'
import Navbar from '../src/Components/Navbar/Navbar.tsx';
import Footer from './Components/Footer/Footer.tsx';
import QuoteForm from './Components/QuoteForm/QuoteForm.tsx';
import Qoutes from './Containers/Qoutes/Qoutes.tsx';

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <Qoutes />
      <QuoteForm />
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
