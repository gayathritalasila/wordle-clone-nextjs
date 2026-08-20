export type KeyboardProps = {
    onKeyPress: (letter: string) => void;
    onBackspace: () => void;
    onEnter: () => void;
}