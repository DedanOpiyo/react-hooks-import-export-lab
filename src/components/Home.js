import React from "react";
import { username, city } from "../data/user"; // Importing Specific Variables
import * as userData from "../data/user"; // Importing Multiple Variables
console.log(userData);

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
      <h2>{userData.username}</h2>
      <h2>from {userData.city}</h2>
    </div>
  );
}

export default Home;
