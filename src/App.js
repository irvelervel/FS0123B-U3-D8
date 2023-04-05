import './App.css'
// il fatto di aver installato bootstrap e react-bootstrap nel mio progetto
// non rende bootstrap automaticamente disponibile in ogni componente!
import 'bootstrap/dist/css/bootstrap.min.css'
// questo rende disponibile il file CSS di bootstrap a tutto il mio progetto
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
import ReservationForm from './components/ReservationForm'
import ReservationList from './components/ReservationList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import PastaDetails from './components/PastaDetails'

// BrowserRouter è il componente "principale" di react-router-dom
// Una buona idea può essere posizionarlo agli estremi di App
// anche se, la cosa importante è che contenga sempre i Routes e i Route
// se provate a posizionare un Routes e/o un Route fuori da BrowserRouter... *boom*
// BrowserRouter NON renderizza niente di "fisico" (nessun div, nessun tag...)

// Routes è un contenitore per elementi/componenti a cui vogliamo impartire
// un comportamento di RENDERING CONDIZIONALE in base all'URL
// tutti i componenti la cui visibilità dev'essere condizionata dall'URL
// vanno inseriti dentro <Routes></Routes>

// Route (singolare) imparisce il vero e proprio rendering condizionale:
// dice all'applicazione QUALE componente montare su QUALE path (indirizzo)

const App = () => {
  return (
    // JSX
    <BrowserRouter>
      <div className="App">
        {/* questa è un'INVOCAZIONE di un componente React */}
        {/* la CustomNavbar verrà SEMPRE montata! */}
        <CustomNavbar brandTitle="Homepage" />
        {/* grazie alla prop brandTitle possiamo personalizzare
      parte del testo nella sezione "brand" */}
        {/* <CustomNavbar brandTitle="Stefano" /> */}

        <Routes>
          {/* sto indicando all'applicazione di renderizzare Home solamente
          quando mi trovo sulla rotta principale, la '/' */}

          {/* / */}
          <Route path="/" element={<Home />} />

          {/* /admin */}
          <Route path="/admin" element={<ReservationList />} />

          {/* /booking */}
          <Route path="/booking" element={<ReservationForm />} />

          {/* /menu */}
          <Route path="/menu" element={<Menu />} />

          <Route path="/details/:id" element={<PastaDetails />} />

          {/* monto NotFound su TUTTE le rotte non precedentemente gestite */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
