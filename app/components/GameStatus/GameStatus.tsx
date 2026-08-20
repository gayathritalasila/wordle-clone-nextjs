import { GameStatusProps } from "./gamestatus.props";

export default function GameStatus({status, secretWord, guessCount, onRestart}: GameStatusProps) {
    if(status === 'playing'){
        return null;
    }

    return (
        <div className="game-status">
            {status === 'won' ? (
                <div className="status-badge win">
                    <span>You win 🏆! {guessCount} {guessCount === 1 ? 'guess':'guesses'} </span>
                </div>
            ) : (
                <div className="status-badge lose">
                    <span>Game over. The word was <strong>{secretWord}</strong></span>
                </div>
            )}
            <button type="button" className="restart-button" onClick={onRestart}>Play Again</button>
        </div>
    );
}