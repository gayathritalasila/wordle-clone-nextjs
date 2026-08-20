import { GameRulesProps } from "./gamerules.props";

export default function GameRules({ isOpen, onClose}: GameRulesProps) {
    if(!isOpen){
        return null;
    }
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-card" onClick={(event) => event.stopPropagation()} >
                <button type="button" className="close-button" onClick={onClose} >
                    X
                </button>

                <h2 className="modal-title">How To Play</h2>
                <p>Wordle is a word-guessing game where players try to guess a hidden word within six attempts. The game provides feedback for each guess to help players find the correct word.</p>

                <h3 className="examples-title">Wordle Rules</h3>

                <ul className="rules-list">
                    <li>Guess the Wordle in 6 tries.</li>
                    <li>Each guess must be a valid 5-letter word</li>
                    <li>The color of the tiles will change to show how close your guess was to the word.</li>
                </ul>

                <h3 className="examples-title">Examples</h3>

                <div className="example-block">
                    <div className="example-row">
                        <span className="example-tile green">W</span>
                        <span className="example-tile">E</span>
                        <span className="example-tile">A</span>
                        <span className="example-tile">R</span>
                        <span className="example-tile">Y</span>
                    </div>
                    <p><strong>W</strong> is in the word and in the correct position.</p>
                </div>

                <div className="example-block">
                    <div className="example-row">
                        <span className="example-tile">P</span>
                        <span className="example-tile yellow">I</span>
                        <span className="example-tile">L</span>
                        <span className="example-tile">L</span>
                        <span className="example-tile">S</span>
                    </div>
                    <p><strong>I</strong> is in the word but in the wrong position.</p>
                </div>

                <div className="example-block">
                    <div className="example-row">
                        <span className="example-tile">V</span>
                        <span className="example-tile">A</span>
                        <span className="example-tile">G</span>
                        <span className="example-tile gray">U</span>
                        <span className="example-tile">E</span>
                    </div>
                    <p><strong>U</strong> is not in the word and in any position.</p>
                </div>
            </div>
        </div>
    );
}