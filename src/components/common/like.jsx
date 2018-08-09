import React, { Component } from "react";

// Input: liked: boolean
// Output: onClick

const Like = props => {
  let iconClass = "fa fa-heart";
  if (!props.liked) iconClass += "-o";
  return (
    <i
      onClick={props.onClick}
      className={iconClass}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
