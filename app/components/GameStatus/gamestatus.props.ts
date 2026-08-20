export type GameStatus = 'playing' | 'won' | 'lost';

export type GameStatusProps = {
    status: GameStatus;
    secretWord: string;
    guessCount: number;
    onRestart: () => void;
}