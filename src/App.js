import React, { Component } from "react";

import { Title, TitleSmall } from "./styles"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Title fontSize={20}>
            Hello world
            <span>texto menor</span>
          </Title>

          <TitleSmall>Menor</TitleSmall>
      </div>
    );
  }
}

export default App;
