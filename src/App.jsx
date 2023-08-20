import { useEffect } from 'react'
import './index.css' 
import { useTelegram } from './hooks/useTelegram'
import { Button } from './components/Button/Button'



function App() {
  const {onToggleButton} = useTelegram()
  const tg = window.Telegram.WebApp

  useEffect(() => {
    tg.ready()
  }, [])



  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
