import { Component } from "react";

class Cards extends Component {
  render() {
    const { id, name } = this.props.monster;

    return (
      <div
        id="cardlist"
        className=" text-[#95D600] text-center flex-wrap lg:p-6 sm:p-2"
        key={id}
      >
        <img
          className="min-h-full min-w-full"
          alt={`monster-${name}`}
          src={`http://robohash.org/${id}?set=set2&size=180x180`}
        />
        <div className="lg:p-3 sm:p-1">
          <p className="lg:pt-3 lg:px-3 sm:pt-1 sm:px-1 lg:text-lg sm:text-xs lg:font-bold sm:font-light flex-wrap sm:overflow-hidden">
            {name}
          </p>
        </div>
      </div>
    );
  }
}

export default Cards;
