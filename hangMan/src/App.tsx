import { useState } from 'react';
import words from './wordList.json';
import './App.css';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
function App() {
  const [wordToGuesse, setWordToGuesse] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [gessedLetters, setGuessedLetters] = useState<string[]>([]);

  // console.log(wordToGuesse);

  return (
    <>
      <div className="app">
        <div className="result">Lose Win</div>
        <HangmanDrawing />
        <HangmanWord />
        <Keyboard />
      </div>
    </>
  );
}

export default App;
