import React from "react";
import SettingsForm from "./components/SettingsForm.js";
import Game from "./components/Game.js";

export const defaultSettings = {
  clock: false,
  time: 10,
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: defaultSettings.clock,
      time: defaultSettings.time,
      matchID: 0,
    };
    this.newGame = this.newGame.bind(this);
  }

  newGame(clock, time, players) {
    // console.log('New size is ' + size);
    this.setState((prevState, props) => ({
      clock: clock,
      time: time,
      matchID: prevState.matchID + 1,
      players: players,
    }));
  }

  updatePlayer(players) {}
  render() {
    return (
      <div className="app">
        <div className="container mt-2">
          <div className="row justify-content-center">
            <SettingsForm
              defaultValues={this.state}
              submitCallback={this.newGame}
            />
            <br />
          </div>
          <div className="row justify-content-center">
            <Game
              getPlayer={this.getPlayer}
              key={this.state.matchID}
              size={3}
              clock={this.state.clock}
              time={this.state.time}
              renderInfo={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
