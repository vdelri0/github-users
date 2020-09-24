import React from "react";

import HomeContainer from './containers/homeContainer'
import "./App.css";

export default function App() {
  const url = "https://api.github.com/users/"
  const header = "Top 5 GitHub Users"
  const description = "Tap the username to see more information"
  const topFive = [
    "GrahamCampbell",
    "fabpot",
    "weierophinney",
    "rkh",
    "josh"
  ]

  return (
    <React.Fragment>
      <HomeContainer url={url} header={header} description={description} topFive={topFive}></HomeContainer>
    </React.Fragment>
  );
}