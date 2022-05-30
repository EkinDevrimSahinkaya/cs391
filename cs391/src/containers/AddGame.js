import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';
const api = axios.create({
    baseURL: `http://localhost:3001/games`,
    timeout: 1000
});

const AddGame = () => {
  const [game, setGame] = useState("");
  const [state, setState] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");

  const onNameChange = (e) => setName(e.target.value);
  const onDescChange = (e) => setDesc(e.target.value);
  const onGenreChange = (e) => setGenre(e.target.value);
  const onPriceChange = (e) => setPrice(e.target.value);
  const onPublisherChange = (e) => setPublisher(e.target.value);

  
useEffect(() => {
    api.get('/').then(res => {
        setGame(res.data);
    })
}, []);
console.log(game)
  const genres = [
    "Sandbox",
    "Real-time strategy (RTS)",
    "Shooters (FPS and TPS)",
    "Multiplayer online battle arena (MOBA)",
    "Role-playing (RPG, ARPG, and More)",
    "Simulation and sports",
    "Puzzlers and party games",
    "Action-adventure",
    "Survival and horror",
    "Platformer",
  ];
function createPost() {
    const data = { name, desc, price, publisher, genre }
    api
      .post("http://localhost:3001/games",  { name, desc, price, publisher, genre })
      .then((response) => {
        setGame({ name, desc, price, publisher, genre });
      });
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <form>
        <label>
          Name:{" "}
          <input type="text" name="name" value={name} onChange={onNameChange} />
        </label>
        <label>
          description:{" "}
          <input
            type="text"
            name="description"
            value={desc}
            onChange={onDescChange}
          />
        </label>
        <label>
          Publisher:
          <input
            type="text"
            name="publisher"
            value={publisher}
            onChange={onPublisherChange}
          />
          {/* <Dropdown
            options={game.map((publisher,id) => (
              <option value={publisher} key={id}>{publisher}</option>
            ))}
            onChange={onPublisherChange}
            value={publisher}
            placeholder="Select an option"
          ></Dropdown> */}
        </label>
        <label>
          Game Genre:
          <input
            type="text"
            name="genre"
            value={genre}
            onChange={onGenreChange}
          />
          {/* <Dropdown
            options={genres}
            onChange={onGenreChange}
            value={genre}
            placeholder="Select an option"
          /> */}
          ;
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={price}
            onChange={onPriceChange}
          />
        </label>
        <input type="submit" value="Submit" onClick={createPost}  />
      </form>
    </main>
  );
};

export default AddGame;
