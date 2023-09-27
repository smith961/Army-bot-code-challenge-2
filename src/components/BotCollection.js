import React from 'react'
import BotCollectionDatas from '../pages/BotCollectionDatas'

function BotCollection({botsList}) {
  return (
    <div className="bot-container">
        <h2 style={{textAlign:'left', paddingLeft:"20px"}}>Bots collection:</h2>
        {botsList.map((bots)=> {
           return (
            <div className="cards-display">
              <BotCollectionDatas key={bots.id} bots={bots}/>
           </div> )
        
        })}
    </div>
  )
}

export default BotCollection