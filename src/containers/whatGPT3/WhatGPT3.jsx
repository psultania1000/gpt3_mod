import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          necessitatibus earum facilis! Asperiores, atque ab, in recusandae
          officiis vitae veritatis molestiae impedit incidunt sed sapiente
          voluptates provident doloremque voluptatum consequatur."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibility is beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          necessitatibus earum facilis!"
        />
        <Feature
          title="Knowledgebase"
          text="Asperiores, atque ab, in recusandae
          officiis vitae veritatis molestiae impedit"
        />
        <Feature
          title="Education"
          text="incidunt sed sapiente
          voluptates provident doloremque voluptatum consequatur"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
