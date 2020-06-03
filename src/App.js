import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      shinobis: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/v1/shinobis")
      .then((response) => response.json())
      .then((data) => this.setState({ shinobis: data }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { shinobis, searchField } = this.state;
    const filteredShinobis = shinobis.filter((shinobi) =>
      shinobi.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="main-title">Shinobis Collection</h1>
        <SearchBox
          placeholder="search ninjas"
          handleChange={this.handleChange}
        />
        <CardList shinobis={filteredShinobis} />
      </div>
    );
  }
}

export default App;
