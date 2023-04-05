import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

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

function CustomNavbar(props) {
  // la prop brandTitle è un attributo dell'oggetto props
  // props.brandTitle
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
            <Link to="/booking" className="nav-link">
              Prenota!
            </Link>
            <Link className="nav-link" to="/contacts">
              Contatti
            </Link>
            <Link className="nav-link" to="/admin">
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
