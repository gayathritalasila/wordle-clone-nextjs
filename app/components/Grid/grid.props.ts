import { EvaluatedGuess } from "../Tile/tile.props";

export type GridProps = {
    guesses: EvaluatedGuess[];
    currentGuess: string;
    maxRows?: number;
    cols?: number;
};