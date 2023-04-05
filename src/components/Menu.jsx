import { Badge, Col, Container, Row } from 'react-bootstrap'
import dishes from '../data/menu.json'
import { Link } from 'react-router-dom'

const Menu = () => (
  <Container>
    {dishes.map((pasta) => (
      <Row key={pasta.id} className="justify-content-center">
        <Col xs={12} md={8} className="text-center my-2">
          <Link to={'/details/' + pasta.id}>
            {/* es: localhost:3000/details/4 */}
            <img src={pasta.image} alt="pasta pic" />
          </Link>
          <h4>
            {pasta.name}
            <Badge bg="warning">{pasta.price}</Badge>
            <Badge bg="danger">{pasta.label}</Badge>
          </h4>
        </Col>
      </Row>
    ))}
  </Container>
)

export default Menu
