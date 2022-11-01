import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Button, Card, Col, Container, Row, Stack } from 'react-bootstrap';
import { playerInfo } from '../../data/Players/constants';
import { Player } from '../../data/Players/types';
import { url } from '../../data/Shared/constants';

const fetchPlayer = () => axios.get<Player>(`${url}${playerInfo('109399022')}`);

export const PlayerSummary = () => {
  const { data, isLoading } = useQuery(['player'], fetchPlayer, {
    select: (data) => data['data'],
  });

  return isLoading ? (
    <Container>
      <Stack gap={5}>
        <Row className="col-md-5 mx-auto">
          <Col>
            <h2>Loading...</h2>{' '}
          </Col>
        </Row>
      </Stack>
    </Container>
  ) : (
    <Container>
      <Stack gap={5}>
        <Row className="col-md-5 mx-auto">
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={data?.profile.avatarfull} />
              <Card.Body className="col-md-5 mx-auto">
                <Row>
                  <Col>
                    <Card.Title>{data?.profile.personaname}</Card.Title>
                  </Col>
                </Row>
                <Row>
                  <Col>MMR:{data?.mmr_estimate.estimate}</Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
};
