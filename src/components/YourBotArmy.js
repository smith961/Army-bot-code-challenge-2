import React from 'react'
import BotCollectionDatas from '../pages/BotCollectionDatas'

function YourBotArmy({botsArmy, addBot}) {
  return (
    <div className="army-container">
      <h2>Bot Army:</h2>
        {botsArmy.map(bot => {
          return (
            <BotCollectionDatas key={bot.id} bot={bot}/>
          )
        })}
    </div>
  )
}

export default YourBotArmy