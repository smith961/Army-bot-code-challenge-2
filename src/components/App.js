import React, { useEffect, useState } from 'react';
import '../App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {

const[botsList, setBotsList] =useState([])
const[botsArmy, setBotsArmy] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(res => res.json())
      .then(data => setBotsList(data))
  }, []);

const addBot = (bot) => {
  if(!botsArmy.includes(bot)){
    setBotsArmy([...botsArmy, bot])
  }
}





  return (
    <div className="App">
      <YourBotArmy botsList={botsList} botsArmy={botsArmy} />

      <BotCollection botsList={botsList} addBot={addBot}/>   
 
    </div>
  );
}

export default App;
