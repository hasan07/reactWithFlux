import React from "react";

export default class Article extends React.Component {
  render() {
    const { complete, edit, text } = this.props;
    const icon = complete ? "\u2714" : "\u2716"
    return (
      <li>
        <span>{text}</span>
        <span>{icon}</span>
      </li>
    );
  }
}