import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

// REGOLE DEGLI HOOKS
// 1) USALI SOLO NEI COMPONENTI REACT A FUNZIONE
// 2) USALI PRIMA DEL RETURN, FUORI DA OGNI ALTRA FUNZIONE/CONDIZIONE/CICLO

// normalmente la navigazione può essere gestita in due modi:
// 1) <a href="/booking"></a> <-- HTML
// 2) window.location.assign('/booking')  <-- JS

// RIMPIAZZI in react-router-dom
// 1) <Link>
// 2) useNavigate()

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <h2>404 - Page not found :(</h2>
          <Button
            variant="info"
            onClick={() => {
              navigate('/')
            }}
          >
            GO HOME
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
