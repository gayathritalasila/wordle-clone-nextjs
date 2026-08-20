import { KeyboardProps } from "./keyboard.props";

const keyboardRows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

export default function Keyboard({
    onKeyPress,
    onBackspace,
    onEnter,
}: KeyboardProps){
    return(
        <div className="keyboard">
            {keyboardRows.map((row, rowIndex) =>(
                <div className="keyboard-row" key={rowIndex}>
                    {rowIndex === 2 && (
                        <button className="key wide-key" onClick={onEnter}> Enter </button>
                    )}
                    {row.split('').map((letter) => (
                        <button key={letter} className="key" onClick={()=>onKeyPress(letter)}>{letter}</button>
                    ))}
                    {rowIndex === 2 && (
                        <button className="key wide-key" onClick={onBackspace}>Delete</button>
                    )}
                    </div>
            ))}
        </div>
    );
}