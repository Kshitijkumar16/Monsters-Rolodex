import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div id="searchbox" className="text-center p-10 z-50">
        <input
          className="bg-gray-900 animate-pulse focus:animate-none bg-transparent border-[3px] border-[#95D600] text-[#95D600] focus:outline-none rounded-md placeholder:text-[#95D600] font-bold p-3 z-[1]"
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.ChangeHandler}
        ></input>
      </div>
    );
  }
}

export default SearchBox;
