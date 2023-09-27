import React, { useState } from 'react'



function BotCollectionDatas({bots}) {


const{name, health,avatar_url,catchphrase, damage, armor,bot_class,created_at,updated_at} = bots


  return (
    
        <div className="bot-card">
            <div className="bot-name">
              <h2 style={{color:"firebrick"}}>Bot-Name: {name}</h2>
            </div>
            <div className="bot-img">
              <img src={avatar_url} alt={catchphrase}/>
            </div>
            <div>
            <h4>Bot Info:</h4>
            <span><strong style={{color: "grey"}}>Health:</strong> {health}</span>,  {""}
              <span><strong style={{color: "grey"}}>Damage:</strong> {damage}</span>, <br/>
              <span><strong style={{color: "grey"}}>Armor:</strong> {armor}</span>, {""}
              <span><strong style={{color: "grey"}}>Bot-Class:</strong> {bot_class}</span>, <br/>
              <span><strong style={{color: "grey"}}>Created-Info:</strong> {created_at}</span>, <br/>
              <span><strong style={{color: "grey"}}>Update-Info:</strong> {updated_at}</span> {""}
          </div>
        </div>
        
  
  )
}

export default BotCollectionDatas