import { Card } from 'react-bootstrap'

function Player({
  name = Player.defaultProps.name,
  team = Player.defaultProps.team,
  nationality = Player.defaultProps.nationality,
  jerseyNumber = Player.defaultProps.jerseyNumber,
  age = Player.defaultProps.age,
  image = Player.defaultProps.image,
  overall = Player.defaultProps.overall,
  position = Player.defaultProps.position,
  flag = Player.defaultProps.flag,
  accent = Player.defaultProps.accent,
}) {
  const cardStyle = {
    '--player-accent': accent,
    background: `linear-gradient(155deg, ${accent} 0%, #d6dda9 38%, #a4a884 100%)`,
    border: '1px solid rgba(255, 255, 255, 0.25)',
    borderRadius: '5px',
    color: '#142018',
    overflow: 'hidden',
    boxShadow: '0 18px 45px rgba(0, 0, 0, 0.24)',
  }

  return (
    <Card className="player-card h-100" style={cardStyle}>
      <div className="card-topline">
        <div className="overall-rating">
          <strong>{overall}</strong>
          <span>{position}</span>
        </div>
        <span className="edition-badge">ELITE</span>
      </div>
      <div className="player-photo-wrap">
        <img className="player-photo" src={image} alt={`${name} on the pitch`} />
        <span className="jersey-mark">{jerseyNumber}</span>
      </div>
      <Card.Body className="player-details">
        <p className="player-nationality"><span aria-hidden="true">{flag}</span> {nationality}</p>
        <Card.Title as="h2" className="player-name">{name}</Card.Title>
        <div className="player-divider" />
        <div className="player-facts">
          <div><span>CLUB</span><strong>{team}</strong></div>
          <div className="age-fact"><span>AGE</span><strong>{age}</strong></div>
        </div>
      </Card.Body>
    </Card>
  )
}

Player.defaultProps = {
  name: 'Player Name',
  team: 'Club Name',
  nationality: 'Nationality',
  jerseyNumber: 0,
  age: 0,
  image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=85',
  overall: 90,
  position: 'CM',
  flag: '⚽',
  accent: '#d8f16b',
}

export default Player