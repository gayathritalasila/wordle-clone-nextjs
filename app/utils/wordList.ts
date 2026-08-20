const wordList = require('word-list-json') as string[];

export const VALID_WORDS = new Set(wordList.filter((word: string) => word.length === 5).map((word: string) => word.toUpperCase()));