import { Col, Container, FormText, Row, Stack } from 'react-bootstrap';

export const Loader = () => (
  <Container>
    <Stack gap={5}>
      <Row className="col-md-5 mx-auto">
        <Col>
          <FormText>Loading...</FormText>
        </Col>
      </Row>
    </Stack>
  </Container>
);
