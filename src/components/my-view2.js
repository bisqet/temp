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

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import { increment, decrement } from '../actions/counter.js';
import '@polymer/paper-checkbox/paper-checkbox.js';

// We are lazy loading its reducer.
import counter from '../reducers/counter.js';
store.addReducers({
  counter
});

// These are the elements needed by this element.
import './counter-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView2 extends connect(store)(PageViewElement) {
  _render(props) {
    return html`
      ${SharedStyles}
<style>
  :host{
        --primary-color:var(--app-primary-color);
    --secondary-color:var(--app-secondary-color);
  }
  .wrapper>div{
    width:90%;
    }
.wrapper {
    text-align:center;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(4, 100px);
}
  section > div{
    max-width:1000px
  }
</style>
      <section>
  <div class="wrapper">
        <div><paper-checkbox>888sport</paper-checkbox></div>
<div><paper-checkbox>Bet-at-home</paper-checkbox></div>
<div><paper-checkbox>Bet365</paper-checkbox></div>
<div><paper-checkbox>Bet90</paper-checkbox></div>
<div><paper-checkbox>Betsafe</paper-checkbox></div>
<div><paper-checkbox>Betway</paper-checkbox></div>
<div><paper-checkbox>Bigbetworld</paper-checkbox></div>
<div><paper-checkbox>bwin</paper-checkbox></div>
<div><paper-checkbox>expekt</paper-checkbox></div>
<div><paper-checkbox>Gamebookers</paper-checkbox></div>
<div><paper-checkbox>krooncasino</paper-checkbox></div>
<div><paper-checkbox>Mr.Green</paper-checkbox></div>
<div><paper-checkbox>Skybet</paper-checkbox></div>
<div><paper-checkbox>Sportingbet</paper-checkbox></div>
<div><paper-checkbox>Tipico</paper-checkbox></div>
<div><paper-checkbox>Unibet</paper-checkbox></div>
<div><paper-checkbox>Sportwetten.de</paper-checkbox></div>
<div><paper-checkbox>WilliamHill</paper-checkbox></div>
<div><paper-checkbox>Wetten.com</paper-checkbox></div>
<div><paper-checkbox>LeoVegas</paper-checkbox></div>
  </div>

      </section>
    `;
  }

  static get properties() { return {
    // This is the data from the store.
    _clicks: Number,
    _value: Number
  }}

  // This is called every time something is updated in the store.
  _stateChanged(state) {
    this._clicks = state.counter.clicks;
    this._value = state.counter.value;
  }
}

window.customElements.define('my-view2', MyView2);
