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
      type: JSON.parse(localStorage.getItem("type")) || [OPTIONS_TYPE[0]],
      scope: parseInt(localStorage.getItem("scope")) || 100,
      howMany: parseInt(localStorage.getItem("howMany")) || 100,
      copy: parseInt(localStorage.getItem("copy")) || 3,
      name: localStorage.getItem("name") || "",
      class01: localStorage.getItem("class01") || "",
      time: parseInt(localStorage.getItem("time")) || "",
      title: localStorage.getItem("title") || "",
    };
  }

  onClickCreate = (values) => {
    const { type, scope, howMany, copy, name, class01, time, title } = values;

    // set state
    this.setState({
      type,
      scope,
      howMany,
      copy,
      name,
      class01,
      time,
      title,
    });

    let noType = type.length;
    let noEachType = Math.floor(parseInt(howMany) / noType);

    // how many for each type
    const arrayNoType = [];
    for (let i = 0; i < noType; i++) {
      arrayNoType.push(noEachType);
    }
    const remainder = parseInt(howMany) / noType;

    for (let i = 0; i < remainder; i++) {
      arrayNoType[i] = arrayNoType[i] + 1;
    }

    let arrayExercises00 = [];

    for (let page = 0; page < parseInt(copy); page++) {
      let arrayExercises01 = [];
      for (let i = 0; i < noType; i++) {
        let arrayExercises02 = createExercises(
          arrayNoType[i],
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

  render() {
    const {
      arrayExercises,
      type,
      scope,
      howMany,
      copy,
      name,
      class01,
      time,
      title,
    } = this.state;

    return (
      <div className="App">
        <Container>
          <FormParam
            type={type}
            scope={scope}
            howMany={howMany}
            copy={copy}
            name={name}
            class01={class01}
            time={time}
            title={title}
            onClickCreate={this.onClickCreate}
          />

          <Card id="printme">
            <Card.Header className="no-print"></Card.Header>
            <Card.Body>
              {arrayExercises.length > 0
                ? arrayExercises.map((exercises) => (
                    <Table responsive>
                      <TableHead
                        type={type}
                        scope={scope}
                        howMany={howMany}
                        name={name}
                        class01={class01}
                        time={time}
                        title={title}
                      />
                      <TableBody exercises={exercises} howMany={howMany} />
                    </Table>
                  ))
                : null}
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
