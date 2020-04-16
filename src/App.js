import React from "react";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { routes } from "./router/routes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "John",
        avatarUrl: require("./assets/avatar2.png"),
      },
    };
  }

  updateUser = (user) => {
    const newUser = {
      ...this.state.user,
      ...user,
    };
    this.setState({ user: newUser });
  };

  render() {
    return (
      <React.Fragment>
        <AppRouter routes={routes} />
      </React.Fragment>
    );
  }
}

export default App;
