import logo from "./logo.svg";
import { Component } from "react";
import { render } from "@testing-library/react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Heading from "./components/heading-text/heading.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filteredmonsters: [],
      searchstring: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onsearchChange = (event) => {
    const searchstring = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchstring };
    });
  };

  render() {
    const { monsters, searchstring } = this.state;
    const { onsearchChange } = this;

    const filteredmonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchstring);
    });

    return (
      <div className=" bg-gradient-to-tr from-[#96d600c1] to-gray-950 min-h-screen">
        <Heading headingText={"Monsters Rolodex"} />
        <SearchBox
          ChangeHandler={onsearchChange}
          placeholder={"Search Monsters..."}
        />
        <CardList monsters={filteredmonsters} />
      </div>
    );
  }
}

export default App;
