import React from "react";
import Slider from "./components/Slider.jsx";
import "./App.css";
import Comics from "./components/Comics.jsx";

const App = () => {
  const images1 = [
    "https://cdn.marvel.com/u/prod/marvel/i/mg/2/f0/66212c11e4f36/portrait_uncanny.jpg",
    "https://cdn.marvel.com/u/prod/marvel/i/mg/3/30/66212b6d548b2/portrait_uncanny.jpg",
    "https://cdn.marvel.com/u/prod/marvel/i/mg/2/b0/66212bc63313d/portrait_uncanny.jpg",
    "https://cdn.marvel.com/u/prod/marvel/i/mg/6/b0/66212c29bf96d/portrait_uncanny.jpg",
    "https://cdn.marvel.com/u/prod/marvel/i/mg/d/d0/663a417775085/portrait_uncanny.jpg",
    "https://cdn.marvel.com/u/prod/marvel/i/mg/c/60/66212bee4e8eb/portrait_uncanny.jpg",
    "https://cdn.marvel.com/u/prod/marvel/i/mg/b/03/66212b9e94183/portrait_uncanny.jpg",
    "https://cdn.marvel.com/u/prod/marvel/i/mg/3/20/66212c2496cc2/portrait_uncanny.jpg",
  ];

  const images2 = [
    "https://cdn.marvel.com/u/prod/marvel/i/mg/6/a0/5d4dc3741478c/portrait_uncanny.jpg",
    "https://cdn.marvel.com/u/prod/marvel/i/mg/c/f0/66212c6472025/portrait_uncanny.jpg",
    "https://cdn.marvel.com/u/prod/marvel/i/mg/6/03/66212c68d0708/portrait_uncanny.jpg",
    "https://cdn.marvel.com/u/prod/marvel/i/mg/d/60/6627e64242360/portrait_uncanny.jpg",
    "https://cdn.marvel.com/u/prod/marvel/i/mg/6/40/66212c2dc8e09/portrait_uncanny.jpg",
    "https://cdn.marvel.com/u/prod/marvel/i/mg/c/50/66212b2cdffc9/portrait_uncanny.jpg",
    "https://cdn.marvel.com/u/prod/marvel/i/mg/3/00/66212b10594ed/portrait_uncanny.jpg",
    "https://cdn.marvel.com/u/prod/marvel/i/mg/3/a0/66212be8634e7/portrait_uncanny.jpg",
  ];

  const item = [
    {
      src: "https://cdn.marvel.com/u/prod/marvel/i/mg/6/a0/5d4dc3741478c/portrait_uncanny.jpg",
      name: "X-men",
      writer: "Bedard, Asamiya, Hitch",
    },
    {
      src: "https://cdn.marvel.com/u/prod/marvel/i/mg/6/60/60c280c88dc62/portrait_uncanny.jpg",
      name: "Marvel Adventures Fantastic Four",
    },
    {
      src: "https://cdn.marvel.com/u/prod/marvel/i/mg/f/60/4bb5103542432/portrait_uncanny.jpg",
      name: "Avenger",
      writer: "Immonen",
    },
    {
      src: "https://cdn.marvel.com/u/prod/marvel/i/mg/9/70/55ba3e95d3a92/portrait_uncanny.jpg",
      name: "New Avangers: Illuminati",
      writer: "Bedard, Asamiya, Dell'otto",
    },
    {
      src: "https://cdn.marvel.com/u/prod/marvel/i/mg/c/03/57865227ac607/portrait_uncanny.jpg",
      name: "Annihilation: Prologue",
      writer: "Dell'otto",
    },
    {
      src: "https://cdn.marvel.com/u/prod/marvel/i/mg/8/f0/4bc334f5dc432/portrait_uncanny.jpg",
      name: "Ultimate Vision",
      writer: "Millar, Romita",
    },
    {
      src: "https://cdn.marvel.com/u/prod/marvel/i/mg/4/00/572a184d97b49/portrait_uncanny.jpg",
      name: "Civil War: Opening Shot"
    },
    {
      src: "https://cdn.marvel.com/u/prod/marvel/i/mg/6/00/5ab00b9b65645/portrait_uncanny.jpg",
      name: "Amazing Spider-Girl",
      writer: "Defalco, Campbell",
    },
    {
      src: "https://cdn.marvel.com/u/prod/marvel/i/mg/a/70/59fce99564cc3/portrait_uncanny.jpg",
      name: "Cable",
      writer: "Robinson, Clark, Ladronn",
    },
    {
      src: "https://cdn.marvel.com/u/prod/marvel/i/mg/9/20/5925f19a2bc1c/portrait_uncanny.jpg",
      name: "DeadPool"
    },
  ];

  return (
    <div className="body h-auto bg-[skyblue]">
      <h1 className="text-6xl font-bold m-4">Recomended Comics</h1>
      <Slider images={images1} direction="left" />
      <Slider images={images2} direction="right" />
      <h1 className="text-6xl font-bold m-4">Best of Marvel</h1>
      <Comics items={item} />
    </div>
  );
};

export default App;
