import React from "react";
import renderer from "react-test-renderer";
import PlayerSettings, {
  dropdownOptions,
  humanVsHuman,
} from "../components/PlayerSettings";

var players = {};

function updatePlayers(p) {
  players = p;
}

describe("PlayerSettings", () => {
  test("Test update callback", () => {
    const settings = renderer.create(
      <PlayerSettings players={humanVsHuman} callBackPlayer={updatePlayers} />
    );
    const root = settings.root;
    const dropdownPlayer1 = root.findByProps({ name: "p1" });
    dropdownPlayer1.props.onChange("p1", dropdownOptions[1]);

    expect(players.p1).toBe(dropdownOptions[1].value);
    expect(true).toBe(true);
  });
});
