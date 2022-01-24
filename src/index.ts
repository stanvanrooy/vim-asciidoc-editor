const asciidoctor = require('asciidoctor')()
import * as monaco from "monaco-editor";
import { initVimMode } from 'monaco-vim';

let preview: HTMLElement;
const startup = () => {
  const content = document.getElementById("content");
  preview = document.getElementById("preview");

  // Initialize the editor
  const initialValue = localStorage.getItem("content") || "";
  const editor = monaco.editor.create(content, { 
    value: initialValue,
    language: 'asciidoc'
  });
  updatePreview(initialValue);
  editor.getModel().onDidChangeContent(_ => updatePreview(editor.getValue()));

  // Initialize vim mode
  initVimMode(editor, document.getElementById('statusbar'))
};


const updatePreview = (inp: string) => {
  localStorage.setItem("content", inp);
  preview.innerHTML = asciidoctor.convert(inp, {
    safe: 'server',
    backend: 'html5',
    attributes: {
      'source-highlighter': 'highlightjs',
      'highlightjs-theme': 'github',
      'icons': 'font',
    }
  });
};

document.addEventListener('DOMContentLoaded', startup, false);

