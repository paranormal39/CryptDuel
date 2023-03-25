import React, { useEffect, useState } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import axios from 'axios';

const unityContext = new UnityContext({
  loaderUrl: 'Unity/build.loader.js',
  dataUrl: 'Unity/build.data',
  frameworkUrl: 'Unity/build.framework.js',
  codeUrl: 'Unity/build.wasm',
});

const Game = () => {
  
  const [isGameOver, setIsGameOver] = useState(false);
  const [userName, setUserName] = useState();
  const [score, setScore] = useState(0);
  const [authToken, setAuthToken] = useState('');
  const [cashoutSuccess, setCashoutSuccess] = useState(false);

  useEffect(() => {
    unityContext.on('OnScoreUpdated', (scoreJson) => {
      const { score } = JSON.parse(scoreJson);
      setScore(score);
    });
  }, []);

  const handleCashout = async () => {
    try {
      const response = await axios.post(
        '/cashout',
        { score: score },
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      console.log(response.data);
      setCashoutSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAuthTokenChange = (event) => {
    setAuthToken(event.target.value);
  };
  const handleGameOver = useCallback((userName, score) => {
    setIsGameOver(true);
    setUserName(userName);
    setScore(score);
  }, []);

  useEffect(() => {
    addEventListener("GameOver", handleGameOver);
    return () => {
      removeEventListener("GameOver", handleGameOver);
    };
  }, [addEventListener, removeEventListener, handleGameOver]);

  return (
    <div>
      <h1>Game</h1>
      <Unity unityContext={unityContext} />
      <p>Score: {score}</p>
      {authToken && (
        <div>
          <p>Enter your authentication token:</p>
          <input type="text" value={authToken} onChange={handleAuthTokenChange} />
          <br />
          <br />
          <button onClick={handleCashout}>Cash out</button>
          {cashoutSuccess && <p>Cashout successful!</p>}
        </div>
      )}
    </div>
  );
};

export default Game;
