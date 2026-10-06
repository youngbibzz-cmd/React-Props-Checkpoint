import { Container } from 'react-bootstrap'
import PlayersList from './PlayersList.js'
import './App.css'

function App() {
  return (
    <main className="showcase-shell">
      <Container className="showcase-container">
        <header className="showcase-header">
          <div className="brand-lockup">
            <span className="brand-mark" aria-hidden="true">XI</span>
            <span>ELITE <strong>XI</strong></span>
          </div>
          <div className="season-label"><span /> SEASON 25 / 26</div>
        </header>

        <section className="intro" aria-labelledby="showcase-title">
          <p className="eyebrow">THE ULTIMATE COLLECTION</p>
          <h1 id="showcase-title">Built for <span>the big moment.</span></h1>
          <div className="intro-meta">
            <p>Football's finest, all in one place.</p>
            <div className="collection-count">
              <strong>04</strong>
              <span>PLAYERS<br />IN SQUAD</span>
            </div>
          </div>
        </section>

        <PlayersList />

        <footer className="showcase-footer">
          <span>ELITE XI <span className="footer-dot">/</span> PLAYER COLLECTION</span>
          <span>MADE FOR THE GAME</span>
        </footer>
      </Container>
    </main>
  )
}

export default App