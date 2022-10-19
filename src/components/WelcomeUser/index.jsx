import React from "react";
import Card from "../../layout/utilities/Card";
import "./styles.css";

const WelcomeUser = () => {
  let user = "Paloma Morais";
  return (
    <Card className="title">
      <h2>
        Bem vindo, <span className="title__name">{user}</span> !
      </h2>
    </Card>
  );
};

export default WelcomeUser;
