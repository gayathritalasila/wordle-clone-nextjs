import Tile from "../Tile/Tile";
import { TileStatus } from "../Tile/tile.props";
import { GridProps } from "./grid.props";

export default function Grid({ guesses, currentGuess, maxRows = 6, cols = 5 }: GridProps) {
    const activeRowIndex = guesses.length;

    return (
        <div className="grid" aria-label="Wordle grid">
            {Array.from({ length: maxRows }).map((_, rowIndex) => {
                const submittedGuess = guesses[rowIndex];

                return (
                    <div className="grid-row" key={rowIndex}>
                        {Array.from({ length: cols }).map((_, colIndex) => {
                            let letter = '';
                            let status: TileStatus = 'empty';

                            if (submittedGuess) {
                                letter = submittedGuess.word[colIndex] || '';
                                status = submittedGuess.statuses[colIndex] || 'empty';
                            } else if (rowIndex === activeRowIndex) {
                                letter = currentGuess[colIndex] || '';
                            }
                            return <Tile key={`${rowIndex} - ${colIndex}`} letter={letter} status={status} />
                        })}
                    </div>
                );
            })}
        </div>
    );
}