import "./iconFirst.css";
let iconData = require("./svgPaths.json");

function getIconData(iconName) {
  let data = iconData[iconName];
  return data ? data : iconData["default"];
}

function viewboxClass(width) {
  switch (width) {
    case 448:
      return " if-w-14";
    case 576:
      return " if-w-18";
    case 640:
      return " if-w-20";
    default:
      return " if-w-16";
  }
}

const createSvg = className => {
  const xmlns = "http://www.w3.org/2000/svg";
  const title = title;
  const icon = getIconData(className.match(/i-([a-zA-z0-9\-]+)/)[1]);
  const el = document.createElementNS(xmlns, "svg");
  el.setAttribute(
    "class",
    className
      .replace("if", "if-svg-icon__baseline")
      .concat(viewboxClass(icon[0]))
  );
  el.setAttribute("role", "img");
  el.setAttribute("xmlns", xmlns);
  el.setAttribute("viewBox", "0 0 ".concat(icon[0]).concat(" 512"));

  const path = document.createElementNS(xmlns, "path");
  path.setAttribute("fill", "currentColor");
  path.setAttribute("d", icon[1]);
  el.appendChild(path);
  return el;
};

export const transformIcons = () => {
  const elements = Array.from(document.getElementsByClassName("if"));
  elements.map(element => {
    if (element.tagName == "I") {
      element.parentNode.replaceChild(createSvg(element.className), element);
    }
  });
};

export const addListener = () =>
  document.addEventListener("DOMContentLoaded", transformIcons);
