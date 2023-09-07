import { Component } from "react";

class Heading extends Component {
  render() {
    const { headingText } = this.props;
    return (
      <div className="bg-gray-900 font-mono text-[#95D600] text-center font-bold text-5xl px-10 pb-10 pt-10 sticky top-0 z-[100]">
        <div className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500 overflow-hidden">
          {headingText}
        </div>
      </div>
    );
  }
}

export default Heading;
