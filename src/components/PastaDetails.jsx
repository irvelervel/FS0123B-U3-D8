import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import dishes from '../data/menu.json'

// dobbiamo recuperare da PastaDetails, un componente montato su una rotta
// dinamica, il valore di pastaId, ovvero il parametro indicato nella rotta!

const PastaDetails = () => {
  const params = useParams()
  console.log('PARAMS OBJECT', params)

  const [pastaToShow, setPastaToShow] = useState(null)

  // il valore del parametro :id che riceviamo nella barra degli indirizzi
  // lo recuperiamo sotto 'params.id'

  // devo comparare 'params.id' a tutti gli id delle paste in menu.json
  // così da estrapolare la pasta corretta e mostrarne i dettagli

  useEffect(() => {
    // qua trovo la pasta da mostrare
    // 0, 1, 2, etc.
    let foundPasta = dishes.find((pasta) => params.id === pasta.id.toString())
    // foundPasta può essere l'oggetto pasta trovato oppure undefined
    console.log(foundPasta)

    // il valore iniziale di pastaToShow è null
    // se troviamo una pasta, pastaToShow diventa l'oggetto pasta che stavamo cercando
    // se il find NON HA trovato una pasta, torna undefined! quindi assegniamo undefined
    // a pastaToShow
    setPastaToShow(foundPasta)
  }, [])
  // pastaToShow può essere: null (valore iniziale), undefined (pasta non trovata)
  // oppure un oggetto pasta valido

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center my-2">
          {pastaToShow === null ? (
            <div>LOADING...</div>
          ) : typeof pastaToShow === 'undefined' ? (
            // <Navigate to="/notfound" />
            <h2>404 - PASTA NOT FOUND</h2>
          ) : (
            <Card>
              <Card.Img variant="top" src={pastaToShow.image} />
              <Card.Body>
                <Card.Title>{pastaToShow.name}</Card.Title>
                <Card.Text>{pastaToShow.description}</Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default PastaDetails
