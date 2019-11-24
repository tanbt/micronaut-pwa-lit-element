import { LitElement, html } from 'lit-element';

class MyApp extends LitElement {
  static get properties() {
    return { name: { type: String } };
  }

  constructor() {
    super();
    this.name = 'World';
  }
  
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

customElements.define('my-app', MyApp);
