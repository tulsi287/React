import React, { Component } from "react";

class Header extends Component {

  inputchanges(){
    console.log("changing in input");
  }
  render() {
    return (
      <header>
        <div className="logo">Logo</div>
        <input  onChange={this.inputchanges}/>
      </header>
    );
  }
}

export default Header;
