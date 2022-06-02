import React, { useState, useEffect } from "react";
import axios from "axios";
import MyCard from "../components/MyCard";
import "./css/style.css";

const api = axios.create({ baseURL: `http://localhost:3001/games` });
const Game = () => {
  const [game, setGame] = useState([]);

  useEffect(() => {
    api.get("/").then((res) => {
      setGame(res.data);
    });
  }, []);

  function deleteGame(id) {
    axios.delete(`http://localhost:3001/games/${id}`).then(
      setGame((game) => {
        const newGameList = game.filter((element) => {
          return id !== element.id;
        });
        return newGameList;
      })
    );
  }
  const cardElements = game.map((item) => {
    return (
      <MyCard
        name={item.name}
        img={item.path}
        desc={item.description}
        genre={item.genre}
        publisher={item.publisher}
        price={item.price}
        deleteGame={deleteGame}
        id={item.id}
      />
    );
  });

  return (
    <div xs={1} md={2} className="gridView">
      {cardElements}
    </div>
  );
};

export default Game;
