import React, { Component } from "react";

// Input: liked: boolean
// Output: onClick

class Like extends Component {
  render() {
    let iconClass = "fa fa-heart";
    if (this.props.liked) iconClass += "-o";
    return (
      <i
        className={iconClass}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
      />
    );
  }
}

export default Like;
