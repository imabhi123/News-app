import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag:false
    };
  }
  makeFlag=()=>{
    if(this.state.flag===false){
      this.setState({flag:true});
      document.body.style.backgroundColor='#181e23';
    }
    else{
      document.body.style.backgroundColor='white';
      this.setState({flag:false});
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand " to="/">
              NEWS
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link active" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link active" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link active" to="/">
                    General
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link active" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link active" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link active" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link active" to="/Technology">
                    Technologies
                  </Link>
                </li>
              </ul>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={this.makeFlag}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
