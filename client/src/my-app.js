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
    `;
  }

  render() {
    return html`
      <input type="text" id="name" placeholder="Enter your name..." @input="${this.handleTyping}" autofocus>
      <div id="output"></div>
    `;
  }

  handleTyping(e) {
    const nameTxt = this.renderRoot.querySelector("#name")
    this.getData(nameTxt.value).then(text => {
      console.log(text);
      this.renderRoot.querySelector("#output").innerHTML = text;
    })
  }

  async getData(name) {
    const response = await fetch(API_NAME + name);
    return response.text();
  }
}

customElements.define('my-app', MyApp);
