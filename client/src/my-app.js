import { LitElement, html, css } from 'lit-element';
import {API_NAME} from "./config";

class MyApp extends LitElement {
  static get properties() {
    return { name: { type: String } };
  }

  constructor() {
    super();
    this.name = 'World';
  }
  
  static get styles() {
    return css`
      #output {
        margin: 10px 0;
      }

      .loader {
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 2s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
  }

  render() {
    return html`
      <input type="text" id="name" placeholder="Enter your name..." @input="${this.handleTyping}" autofocus>
      <div id="output"></div>
    `;
  }

  async handleTyping(e) {
    const nameTxt = this.renderRoot.querySelector("#name")
    const outputDiv = this.renderRoot.querySelector("#output");
    outputDiv.classList.add("loader");
    let result = "";
    try {
      result = await this.getData(nameTxt.value);
    } catch (err) {
      result = `Sorry ${nameTxt.value}, the network is unavailable now.`
    }
    outputDiv.classList.remove("loader");
    outputDiv.innerHTML = result;
  }

  async getData(name) {
    const response = await fetch(API_NAME + name);
    return response.text();
  }
}

customElements.define('my-app', MyApp);
