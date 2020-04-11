import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Table } from "react-bootstrap";
import { OPTIONS_TYPE, createExercises, getTypeFunc } from "./utility";
import FormParam from "./FormParam";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayExercises: [],
      scope: parseInt(localStorage.getItem("scope")) || 100,
      howMany: parseInt(localStorage.getItem("howMany")) || 100,
      type: JSON.parse(localStorage.getItem("type")) || [OPTIONS_TYPE[0]],
      class01: localStorage.getItem("class01") || "",
      name: localStorage.getItem("name") || "",
      time: parseInt(localStorage.getItem("time")) || 5,
      copy: parseInt(localStorage.getItem("copy")) || 3,
    };
  }

  onClickCreate = () => {
    const { howMany, scope, copy, type } = this.state;
    let noType = type.length;
    let noEachType = Math.floor(parseInt(howMany) / noType);
    let arrayExercises00 = [];

    for (let page = 0; page < parseInt(copy); page++) {
      let arrayExercises01 = [];
      for (let i = 0; i < noType; i++) {
        let arrayExercises02 = createExercises(
          noEachType,
          parseInt(scope),
          getTypeFunc(type[i].value)
        );
        arrayExercises01 = arrayExercises01.concat(arrayExercises02);
      }
      arrayExercises00.push(arrayExercises01);
    }

    this.setState({
      arrayExercises: arrayExercises00,
    });
  };

  changeInput = (e, name) => {
    this.setState({
      [name]: e.target.value,
      arrayExercises: [],
    });
  };

  onClickSaveParams = () => {
    const { scope, howMany, type, class01, name, time, copy } = this.state;

    localStorage.setItem("scope", scope);
    localStorage.setItem("howMany", howMany);
    localStorage.setItem("type", JSON.stringify(type));
    localStorage.setItem("class01", class01);
    localStorage.setItem("name", name);
    localStorage.setItem("time", time);
    localStorage.setItem("copy", copy);
  };

  handleOnChange = (newValue) => {
    this.setState({
      type: newValue,
      arrayExercises: [],
    });
  };

  render() {
    const {
      scope,
      howMany,
      class01,
      name,
      type,
      time,
      arrayExercises,
      copy,
    } = this.state;

    return (
      <div className="App">
        <Container>
          <FormParam
            scope={scope}
            howMany={howMany}
            class01={class01}
            name={name}
            time={time}
            type={type}
            copy={copy}
            changeInput={this.changeInput}
            onClickSaveParams={this.onClickSaveParams}
            handleOnChange={this.handleOnChange}
            onClickCreate={this.onClickCreate}
          />

          <Card id="printme">
            <Card.Header></Card.Header>
            <Card.Body>
              {arrayExercises.length === 0 ? (
                <Table>
                  <TableHead
                    scope={scope}
                    howMany={howMany}
                    class01={class01}
                    name={name}
                    time={time}
                    type={type}
                  />
                </Table>
              ) : (
                arrayExercises.map((exercises) => (
                  <Table responsive>
                    <TableHead
                      scope={scope}
                      howMany={howMany}
                      class01={class01}
                      name={name}
                      time={time}
                      type={type}
                    />
                    <TableBody exercises={exercises} howMany={howMany} />
                  </Table>
                ))
              )}
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
