import React from "react";

export default class Article extends React.Component {
  render() {
    const { title } = this.props;
    const { param } = this.props;
    const { location } = this.props;
    var hidden = "hidden";
    if (location == "/archives" || location == "archives") {
      hidden = "";
    } else if (param.article && param.article.replace("/ /g", "_") === title.replace("/ /g", "_")) {
      hidden = "";
    };
    return (
      <div class={"col-md-4 " + hidden}>
        <h4>{title}</h4>
        <p>{title} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <a class="btn btn-default" href={"#/archives/" + title.replace("/ /g", "_")}>More Info</a>
      </div >
    );
  }
}