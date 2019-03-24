/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import '@polymer/paper-input/paper-input.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import { checkout } from '../actions/shop.js';

// We are lazy loading its reducer.
import shop, { cartQuantitySelector } from '../reducers/shop.js';
store.addReducers({
  shop
});

// These are the elements needed by this element.
import './shop-products.js';
import './shop-cart.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';

class MyView3 extends connect(store)(PageViewElement) {
  _render({_quantity, _error}) {
    return html`
      ${SharedStyles}
      ${ButtonSharedStyles}
      <style>
        .startButton{
    display: block;
    background: var(--app-primary-color);
    color: white;
    border-radius: 10px;
    padding: 5px 10px;
}
        .logs{
          text-align:center;
          height:300px;
        }
        section:nth-child(0) {
          padding-top:0;
overflow:auto;
        }
p{font-family:monospace;}
      </style>
      <section>
          <section class = "controlButtons">
            <button class= "startButton">Start</button>
  </section>
          <section class = "logs">
          <p> Some random text</p>
  </section>
          <section class = "inputContainer">
          <div class="labelBox">
	<paper-input id="input"  label="Input value if script asked sth" value="" disabled></paper-input>
</div>
  </section>

      </section>
    `;
  }

  static get properties() { return {
    // This is the data from the store.
    _quantity: Number,
    _error: String
  }}

  // This is called every time something is updated in the store.
  _stateChanged(state) {
    this._quantity = cartQuantitySelector(state);
    this._error = state.shop.error;
  }
}

window.customElements.define('my-view3', MyView3);
