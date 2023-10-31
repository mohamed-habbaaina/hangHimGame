import { useState } from 'react';
import words from './wordList.json';
import './App.css';
function App() {
  const [wordToGuesse, setWordToGuesse] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [gessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuesse);

  return (
    <>
      <div className="app">
        <h1>Hello </h1>
      </div>
    </>
  );
}

export default App;
