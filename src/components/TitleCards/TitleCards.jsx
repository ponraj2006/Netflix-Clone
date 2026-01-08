import React,{useEffect, useRef, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title,category}) => {
  const [apiData,setApiData] =useState([])

const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTgwZGU3ZjJmODY4Y2U5M2Y1ODFlNTQyNjk1NmI4YiIsIm5iZiI6MTc2NzQxMDExMi4xMTYsInN1YiI6IjY5NTg4OWMwNDYyMDUyNzEzN2NjOGZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6VK0j6_nx_IWniW7vZsgblY907kS7ofKIT-NlF7tpnM'
  }
};


const handleWheel =(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  
  cardsRef.current.addEventListener('wheel',handleWheel);
},[])

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {
          apiData.map((card,index)=>{
            return <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt=""/>
              <p>{card.original_title}</p>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default TitleCards