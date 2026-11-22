import {  updateCytoscapeEdgesCode,graph } from "./main.js";

const codeLines = [

];
const counthistory = [];
export const history = []
// internal state

export let currentLine = 0;

// DOM refs (set during init)
let codeDiv = null;
let linesDiv = null;
let cursor = null;
let padding =0
export let counter =0;
/**
 * Initialize editor (call after DOM is ready)
 */
export function initEditor() {
  codeDiv = document.getElementById("code");
  linesDiv = document.getElementById("lines");
  cursor = document.getElementById("cursor");

  if (!codeDiv || !linesDiv || !cursor) {
    console.error("Editor DOM elements not found");
    return;
  }

  render();
}

export function addhistory(graph,special) {
  history.push([counter,graph.clone(),special]);
  counthistory.push(counter);

}


/**
 * Render code + line numbers
 */
export function render() {
  codeDiv.innerHTML = "";
  linesDiv.innerHTML = "";

  for (let i = 0; i < codeLines.length; i++) {
    // code line
    const lineEl = document.createElement("div");
    lineEl.className = "line";
    lineEl.textContent = codeLines[i];
    codeDiv.appendChild(lineEl);

    // line number
    const numEl = document.createElement("div");
    numEl.className = "line-number";
    numEl.textContent = i + 1;
    linesDiv.appendChild(numEl);
  }

  moveCursor();
}

/**
 * Move visual cursor to current line
 */
export function moveCursor() {
  const lineHeight = 20;
  const offsetTop = 10;

  cursor.style.top = (currentLine * lineHeight + offsetTop) + "px";
}

