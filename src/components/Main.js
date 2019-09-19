/* eslint-disable no-unused-labels */
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import PhotoWall from "./PhotoWall.js";
import AddPhoto from "./AddPhoto.js";
import Single from "./Single.js";

class Main extends Component {
  render() {
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

        <Route
          path="/single/:id"
          render={params => <Single {...this.props} {...params} />}
        />
      </div>
    );
  }
}

export default Main;
