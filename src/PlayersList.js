import { Col, Row } from 'react-bootstrap'
import players from './players.js'
import Player from './Player.js'

function PlayersList() {
  return (
    <Row className="player-grid g-4">
      {players.map((player) => (
        <Col key={player.name} xs={12} sm={6} lg={3}>
          <Player {...player} />
        </Col>
      ))}
    </Row>
  )
}

export default PlayersList