'use client';

import { useEffect, useRef, useState } from 'react';
import Grid from './Grid/Grid';
import Keyboard from './Keyboard/Keyboard';
import GameHeader from './GameHeader';
import GameRules from './GameRules/GameRules';
import { EvaluatedGuess, TileStatus } from './Tile/tile.props';
import { GameStatus as GameStatusType } from './GameStatus/gamestatus.props';
import GameStatus from './GameStatus/GameStatus';
import { VALID_WORDS } from '../utils/wordList';

const SECRET_WORD = 'AUDIO';
const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

function evaluateGuess(guess: string, secret: string): TileStatus[] {
    const result: TileStatus[] = Array(WORD_LENGTH).fill('absent');
    const secretLetters = secret.split('');
    const guessLetters = guess.split('');

    for (let i = 0; i < WORD_LENGTH; i += 1) {
        if (guessLetters[i] === secretLetters[i]) {
            result[i] = 'correct';
            secretLetters[i] = '*';
            guessLetters[i] = '_';
        }
    }

    for (let i = 0; i < WORD_LENGTH; i += 1) {
        if (guessLetters[i] === '_') continue;
        const foundIndex = secretLetters.indexOf(guessLetters[i]);

        if (foundIndex !== -1) {
            result[i] = 'present';
            secretLetters[foundIndex] = '*';
        }
    }
    return result;
}


export default function GameScreen() {
    const [currentGuess, setCurrentGuess] = useState('');
    const [isGameRulesOpen, setIsGameRulesOpen] = useState(false);
    const [gameStatus, setGameStatus] = useState<GameStatusType>('playing');
    const [guesses, setGuesses] = useState<EvaluatedGuess[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const isGameOver = gameStatus !== 'playing';
    const errorTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const showTemporaryError = (msg: string, durationMs = 600) => {
        // Clear any ongoing timer before setting a new one
        if (errorTimeoutRef.current) {
            clearTimeout(errorTimeoutRef.current);
        }

        setErrorMessage(msg);

        // Hide message after 1 minute (60,000ms)
        errorTimeoutRef.current = setTimeout(() => {
            setErrorMessage(null);
            errorTimeoutRef.current = null;
        }, durationMs);
    };

    useEffect(() => {
        return () => {
            if (errorTimeoutRef.current) {
                clearTimeout(errorTimeoutRef.current);
            }
        };
    }, []);

    const handleKeyPress = (letter: string) => {
        if (isGameOver) return;
        if (currentGuess.length >= WORD_LENGTH) return;
        // if (guesses.length >= MAX_GUESSES) return;

        setCurrentGuess((prev) => prev + letter);
    };

    const handleBackspace = () => {
        if (isGameOver) return;

        setCurrentGuess((prev) => prev.slice(0, -1));
    };

    const handleEnter = () => {
        if (isGameOver) return;

        if (currentGuess.length !== WORD_LENGTH) {
            showTemporaryError('Not enough letters!');
            return;
        };
        // if (guesses.length >= MAX_GUESSES) return;

        const normalizedGuess = currentGuess.toUpperCase();
        if (!VALID_WORDS.has(normalizedGuess)) {
            showTemporaryError('Word not found!');
            return;
        }

        const evaluatedStatuses = evaluateGuess(normalizedGuess, SECRET_WORD);

        const evaluatedGuess: EvaluatedGuess = {
            word: normalizedGuess,
            statuses: evaluatedStatuses,
        };

        const nextGuesses = [...guesses, evaluatedGuess];

        setGuesses(nextGuesses);
        setCurrentGuess('');

        if (normalizedGuess === SECRET_WORD) {
            setGameStatus('won');
        } else if (nextGuesses.length >= MAX_GUESSES) {
            setGameStatus('lost');
        }
    };

    const handleRestart = () => {
        setGuesses([]);
        setCurrentGuess('');
        setGameStatus('playing');
    }

    return (
        <main className="page">
            <section className="game-card">
                <GameHeader onOpenHowToPlay={() => setIsGameRulesOpen(true)} />
                {errorMessage && (
                    <div className="error-toast" role="alert">
                        {errorMessage}
                    </div>
                )}
                <Grid guesses={guesses} currentGuess={currentGuess} />

                <GameStatus status={gameStatus} secretWord={SECRET_WORD} guessCount={guesses.length} onRestart={handleRestart} />

                <Keyboard
                    onKeyPress={handleKeyPress}
                    onBackspace={handleBackspace}
                    onEnter={handleEnter}
                />

                <GameRules isOpen={isGameRulesOpen} onClose={() => setIsGameRulesOpen(false)} />
            </section>
        </main>
    );
}
