import React, { Component } from "react";
export class NewsItem extends Component {
  togmt = (string) => {
    let a = new Date(string).toUTCString();
    return a.slice(0, a.length - 3);
  };
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div>
        <div className="card mx-3">
          <img
            src={imageUrl}
            style={{ height: "40vh" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on {this.togmt(date)}
              </small>
            </p>
            <a href={newsUrl} target="/this" className="btn btn-sm btn-dark">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
