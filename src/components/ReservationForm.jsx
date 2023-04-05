// ReservationForm è un componente che renderizzerà un <form> per
// prenotare un tavolo nel nostro EpiStaurant
// creeremo di nuovo questo componente come CLASSE perchè dovremo usare
// di nuovo il "superpotere" dello STATE OBJECT

import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Col, Container, Row } from 'react-bootstrap'

// name: string
// phone: string/number
// numberOfPeople: string/number
// smoking: boolean
// dateTime: string
// specialRequests?: string

// questi dati dovranno venire inviati tramite chiamata POST
// all'endpoint https://striveschool-api.herokuapp.com/api/reservation

const ReservationForm = () => {
  // OGNI VOLTA che dovrete creare un form in React dovrete utilizzare
  // un componente fatto a CLASSE, in quanto vi servirà lavorare con
  // lo STATE OBJECT

  const [reservation, setReservation] = useState({
    name: '',
    phone: '',
    numberOfPeople: 1,
    smoking: false,
    dateTime: '',
    specialRequests: '',
  })

  // abbiamo dato il valore iniziale allo stato che rappresenterà
  // il contenuto del form
  // lo scopo è quello di mantenere SINCRONIZZATO il contenuto dello state
  // con l'attuale contenuto del form, campo per campo

  // per ottenere questa SINCRONIZZAZIONE in react devo collegare OGNI INPUT
  // tramite un 2-WAY DATA BINDING

  const sendReservation = async () => {
    // facciamo una chiamata POST alle api
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/reservation',
        {
          method: 'POST',
          body: JSON.stringify(reservation),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      // response contiene l'oggetto di tipo Response che ci darà
      // informazione sull'esito della chiamata
      if (response.ok) {
        // codice 200/201, tutto a posto!
        alert('PRENOTAZIONE SALVATA CORRETTAMENTE!')
        // svuotiamo il form resettando l'oggetto state
        // al suo valore iniziale!
        setReservation({
          name: '',
          phone: '',
          numberOfPeople: 1,
          smoking: false,
          dateTime: '',
          specialRequests: '',
        })
      } else {
        // errore nei dati inviati? server in crash?
        console.log('errore nella chiamata :(')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <h2>PRENOTA IL TUO TAVOLO!</h2>
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              console.log('STO PER INVIARE IL FORM!')
              console.log('i dati sono già pronti nello state:', reservation)
              sendReservation()
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Inserisci nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci qui il tuo nome"
                required
                value={reservation.name}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    // name: reservation.name,
                    // phone: reservation.phone,
                    // ...etc.
                    name: e.target.value,
                  })
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Inserisci telefono</Form.Label>
              <Form.Control
                type="tel"
                required
                placeholder="Inserisci qui il tuo cellulare"
                value={reservation.phone}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    phone: e.target.value,
                  })
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>In quanti siete?</Form.Label>
              <Form.Select
                required
                value={reservation.numberOfPeople}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    numberOfPeople: e.target.value,
                  })
                }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Fumatori?"
                checked={reservation.smoking}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    smoking: e.target.checked,
                  })
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Data e ora</Form.Label>
              <Form.Control
                type="datetime-local"
                required
                value={reservation.dateTime}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    dateTime: e.target.value,
                  })
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Richieste particolari?</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={reservation.specialRequests}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    specialRequests: e.target.value,
                  })
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              PRENOTA!
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ReservationForm
