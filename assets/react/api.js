import React from "react";
import { render } from "react-dom";
class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  apiData() {
    fetch("http://localhost:9000/")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
    this.apiData();
  }
  render() {
    return <h1>{this.state.apiResponse}</h1>;
  }
}
export default Api;
