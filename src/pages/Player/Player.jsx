import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
import netflix_spinner from "../../assets/netflix_spinner.gif";


const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

   const [loading,setLoading] = useState(true)

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:import.meta.env.VITE_API_AUTHORIZATION,
    },
  };


  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return(
        setApiData(response.results[0]),
          setLoading(false)
        )
      })
      .catch((error) => console.error(error));
  }, []);

 

  return (
     <>
     { loading ?(
       <div className="loading-spinner">
                <img src={netflix_spinner} alt="" />
              </div>):(
    
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
    )
     }
   </>
  );

};

export default Player;
