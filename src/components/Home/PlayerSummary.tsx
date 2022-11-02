import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Card, Col, Container, Row, Stack } from 'react-bootstrap';
import { playerInfo } from '../../data/Players/constants';
import { Player } from '../../data/Players/types';
import { url } from '../../data/shared/constants';
import { Loader } from '../Layout/Loader';

const fetchPlayer = () => axios.get<Player>(`${url}${playerInfo('109399022')}`);

export const PlayerSummary = () => {
  const { data, isLoading } = useQuery(['player'], fetchPlayer, {
    select: (data) => data['data'],
  });

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <Stack gap={5} className="col-4 mx-auto">
        <Row>
          <Col>
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={data?.profile.avatarfull} />
              <Card.Body>
                <Row>
                  <Col className="col-4 mx-auto">
                    <Card.Title>{data?.profile.personaname}</Card.Title>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-4 mx-auto">MMR: {data?.mmr_estimate.estimate}</Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
};
