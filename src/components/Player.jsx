import React, { useRef, useState } from "react";

function Player() {
  const [name, setName] = useState(null);
  const playerName = useRef();
  const handleClick = () => {
    setName(playerName.current.value);
    playerName.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {name ?? "unkonwn name"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

export default Player;
