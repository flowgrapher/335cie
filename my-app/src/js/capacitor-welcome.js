import { SplashScreen } from '@capacitor/splash-screen';
import { Camera } from '@capacitor/camera';

window.customElements.define(
  'capacitor-welcome',
  class extends HTMLElement {
    constructor() {
      super();

      SplashScreen.hide();

      const clics = 0;

      const root = this.attachShadow({ mode: 'open' });

      // clicsBtn('#clic-me').on('click', (event) => {
      //   clics++;
      //   console.log(clics);
      // });

      // function clicsBtn() {
      //   return clics++;
      // }

      // connectedCallback() {
      //   const self = this;

      //   self.shadowRoot
      //     .querySelector('#click-me')
      //     .addEventListener('click', function (e) {
      //       console.log('clicked');
      //       clics++;
      //     });
      // }

      function clicsBtn() {
        root.querySelector('#click-me').addEventListener('click', function () {
          console.log('clicked');
          clics++;
        });
      }

      root.innerHTML = `
    <style>
      :host {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        display: block;
        width: 100%;
        height: 100%;
      }
      h1, h2, h3, h4, h5 {
        text-transform: uppercase;
      }
      .button {
        display: inline-block;
        padding: 10px;
        background-color: #73B5F6;
        color: #fff;
        font-size: 0.9em;
        border: 0;
        border-radius: 3px;
        text-decoration: none;
        cursor: pointer;
      }
      main {
        padding: 15px;
      }
      main hr { height: 1px; background-color: #eee; border: 0; }
      main h1 {
        font-size: 1.4em;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      main h2 {
        font-size: 1.1em;
      }
      main h3 {
        font-size: 0.9em;
      }
      main p {
        color: #333;
      }
      main pre {
        white-space: pre-line;
      }
    </style>
    <div>
      <capacitor-welcome-titlebar>
        <h1>Capacitor</h1>
      </capacitor-welcome-titlebar>
      <main>

        <h2>Hello World</h2>

          <button class="button" id="clic-me" onClick="clicsBtn()" >Clic me</button>
        </p>
        <p>
          Vous avez cliqué <span id="clics">${clics}</span> fois.
        </p>
      </main>
    </div>
    `;
    }

    // connectedCallback() {
    //   const self = this;

    //   self.shadowRoot
    //     .querySelector('#click-me')
    //     .addEventListener('click', function (e) {
    //       console.log('clicked');
    //       clics++;
    //     });
    // }
  }
);

window.customElements.define(
  'capacitor-welcome-titlebar',
  class extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `
    <style>
      :host {
        position: relative;
        display: block;
        padding: 15px 15px 15px 15px;
        text-align: center;
        background-color: #73B5F6;
      }
      ::slotted(h1) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 0.9em;
        font-weight: 600;
        color: #fff;
      }
    </style>
    <slot></slot>
    `;
    }
  }
);
