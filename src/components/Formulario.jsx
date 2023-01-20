import { Button, Form, Row, Col } from 'react-bootstrap'

const Formulario = () => {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='nombre'>Nombre bebida</Form.Label>

            <Form.Control
              type='text'
              placeholder='Ej: Tequila, Vodka, etc'
              name='nombre'
              id='nombre'
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='categoria'>Categoria bebida</Form.Label>
            <Form.Select
              id="categoria"
              name="categoria"
            >
              <option>- Selecciona Categoria -</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )
}

export default Formulario