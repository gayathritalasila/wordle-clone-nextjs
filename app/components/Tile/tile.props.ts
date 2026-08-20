export type TileStatus = 'empty' | 'correct' | 'present' | 'absent';

export type EvaluatedGuess = {
    word: string;
    statuses: TileStatus[];
};

export type TileProps = {
    letter?: string;
    status?: TileStatus;
};
