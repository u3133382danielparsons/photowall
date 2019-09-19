/* eslint-disable no-unused-labels */
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";

class Main extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          <Link to="/">PHOTOWALL</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />

        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
      </div>
    );
  }
}

export default Main;
