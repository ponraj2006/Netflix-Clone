import React,{useEffect, useRef} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'


const cardsRef = useRef();

useEffect(()=>{
  cardsRef.current.addEventListenner('wheel',handleWheel)
},[])

const TitleCards = () => {
  return (
    <div className='titlecards'>
      <h2>Popular on Netflix</h2>
      <div class="card-list" ref={cardsRef}>
        {
          cards_data.map((card,index)=>{
            return <div class="card" key={index}>
              <img src={card.image} alt=""/>
              <p>{card.name}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default TitleCards