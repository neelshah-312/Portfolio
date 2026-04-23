import "./style.css";
import { renderApp } from "./app.js";
import { bindUI } from "./bindUI.js";

const base = import.meta.env.BASE_URL;
document.documentElement.style.setProperty(
  "--hero-image",
  `url("${base}images/hero.jpg")`
);

renderApp();
bindUI();
