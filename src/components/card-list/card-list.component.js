import { Component } from "react";
import Cards from "../cards/cards.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="lg:px-[200px] md:px-[130px] lg:mt-24 sm:mt-3 grid lg:grid-cols-4 sm:grid-col-2 sm:px-[70px] ">
        {monsters.map((monster) => {
          return (
            <div className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500 bg-gray-950 span-1 lg:m-6 lg:border-4 md:border-2 sm:border-2 border-[#95D600] flex-wrap sm:m-3 lg:rounded-xl sm:rounded-sm">
              <Cards monster={monster} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
