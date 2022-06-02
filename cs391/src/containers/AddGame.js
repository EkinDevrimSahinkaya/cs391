import "react-dropdown/style.css";
import React, { useState, useEffect } from "react";
import { Card } from "reactstrap";

import axios from "axios";

import { Button, Row, Col, FormGroup, FormLabel, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import "./css/style.css";

const api = axios.create({
  baseURL: `http://localhost:3001/games`,
});

const AddGame = () => {
  const [game, setGame] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");

  const onNameChange = (e) => setName(e.target.value);
  const onDescChange = (e) => setDesc(e.target.value);
  const onGenreChange = (e) => setGenre(e.target.value);
  const onPriceChange = (e) => setPrice(e.target.value);
  const onPublisherChange = (e) => setPublisher(e.target.value);
  const onPathChange = (e) => setPath(e.target.value);

  useEffect(() => {
    api.get("/").then((res) => {
      setGame(res.data);
    });
  }, []);
  console.log(game);

  function createPost(event) {
    event.preventDefault();
    api
      .post("http://localhost:3001/games", {
        name,
        desc,
        price,
        publisher,
        genre,
        path,
      })
      .then(() => {
        setGame({ name, desc, price, publisher, genre, path });
      });
  }

  return (
    <Card>
      <div className="addGame">
        <Form onSubmit={createPost}>
          <Row className="mb-3">
            <FormGroup as={Col} md="4" controlId="validationFormik01">
              <FormLabel>Name</FormLabel>
              <FormControl
                type="text"
                name="name"
                value={name}
                onChange={onNameChange}
              />
            </FormGroup>
            <FormGroup as={Col} md="4" controlId="validationFormik02">
              <FormLabel>Description</FormLabel>
              <FormControl
                type="text"
                name="desc"
                value={desc}
                onChange={onDescChange}
              />
            </FormGroup>
            <FormGroup as={Col} md="4" controlId="validationFormikPublisher">
              <FormLabel>Publisher</FormLabel>
              <InputGroup hasValidation>
                <FormControl
                  type="text"
                  name="publisher"
                  value={publisher}
                  onChange={onPublisherChange}
                />
              </InputGroup>
            </FormGroup>
          </Row>
          <Row className="mb-3">
            <FormGroup as={Col} md="6" controlId="validationFormik03">
              <FormLabel>Genre</FormLabel>
              <FormControl
                type="text"
                name="genre"
                value={genre}
                onChange={onGenreChange}
              />
            </FormGroup>
            <FormGroup as={Col} md="3" controlId="validationFormik04">
              <FormLabel>Price</FormLabel>
              <FormControl
                type="number"
                name="price"
                value={price}
                onChange={onPriceChange}
              />
            </FormGroup>
            <FormGroup as={Col} md="3" controlId="validationFormik05">
              <FormLabel>ImgPath</FormLabel>
              <FormControl
                type="text"
                name="path"
                value={path}
                onChange={onPathChange}
              />
            </FormGroup>
          </Row>
          <Button onSubmit={createPost} type="submit">
            Submit form
          </Button>
        </Form>
      </div>
    </Card>
  );
};

export default AddGame;
