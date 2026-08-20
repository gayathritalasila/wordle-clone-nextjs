import { LandingPageProps } from "./landingpage.props";

export default function LandingPage({ onPlay }: LandingPageProps){
  return (
    <main className="landing-page">
      <section className="landing-card">
        <div className="logo-box">
          <div className="logo-grid">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="yellow"></span>
            <span className="green"></span>
            <span className="green"></span>
            <span className="green"></span>
            <span className="green"></span>
          </div>
        </div>

        <h1 className="landing-title">Wordle</h1>

        <p className="landing-text">
          Get 6 chances to guess
          <br />
          a 5-letter word.
        </p>

        <button type="button" className="play-button" onClick={onPlay}>
          Play
        </button>
      </section>
    </main>
  )  
}