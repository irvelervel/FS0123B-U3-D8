import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useLocation } from 'react-router-dom'

// normalmente la navigazione può essere gestita in due modi:
// 1) <a href="/booking"></a> <-- HTML
// 2) window.location.assign('/booking')  <-- JS

// RIMPIAZZI in react-router-dom
// 1) <Link>

// questi import sono più scomodi, ma sono più efficienti
// perchè non importano tutto 'react-bootstrap' dentro il mio componente
// CustomNavbar, ma solo tre "sotto-sezioni" della libreria

// import { Container, Nav, Navbar } from 'react-bootstrap'
// import meno efficiente :(

// problema: vorremmo attribuire una classe "active" al nav-link correntemente
// "attivo", l'ultimo cliccato...
// ...ma per fare questo dovremmo rendere la CustomNavbar "consapevole" di
// quale sia la rotta attuale!
// questa consapevolezza la possiamo ottenere grazie al hook "useLocation"

function CustomNavbar(props) {
  // la prop brandTitle è un attributo dell'oggetto props
  // props.brandTitle

  const location = useLocation()
  console.log('LOCATION OBJECT', location)
  // location.pathname ci fornirà SEMPRE la rotta attualmente selezionata

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        {/* cliccando sulla sezione Brand, ritorniamo alla HomePage */}
        <Link to="/" id="home-link">
          <Navbar.Brand>Epistaurant - {props.brandTitle}</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link
              className={
                location.pathname === '/booking'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              to="/booking"
            >
              Prenota!
            </Link>
            <Link className="nav-link" to="/contacts">
              Contatti
            </Link>
            <Link
              className={
                location.pathname === '/menu' ? 'nav-link active' : 'nav-link'
              }
              to="/menu"
            >
              Menu
            </Link>
            <Link
              className={
                location.pathname === '/admin' ? 'nav-link active' : 'nav-link'
              }
              to="/admin"
            >
              Admin
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

// ESEMPIO CON PROPS DESTRUTTURATE
// function CustomNavbar({ brandTitle }) {
//     // la prop brandTitle è un attributo dell'oggetto props
//     // props.brandTitle
//     return (
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Container fluid>
//           <Navbar.Brand href="#home">
//             Epistaurant - {brandTitle}
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#booking">Prenota!</Nav.Link>
//               <Nav.Link href="#contacts">Contatti</Nav.Link>
//               <Nav.Link href="#admin">Admin</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     )
//   }

export default CustomNavbar
