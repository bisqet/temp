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
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@polymer/paper-input/paper-input.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView1 extends PageViewElement {
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
    min-height:100px;
    }
.wrapper {
    text-aling:center;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(3, 100px);
}
  section > div{
    max-width:1000px
  }
</style>
      <section>
  
<div class="wrapper">
<div class="labelBox">
	<paper-input   label="Username" value="gutNutzer100"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="E-mail" value="somasdslr100@nwytg.net"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Password" value="sOMen1(k2"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Title" value="Ms/Mrs"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="First name" value="Jackie"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Last name" value="Ripper"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Birth year" value="1998"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Birth month" value="4"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Birth day" value="12"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Nationality" value="DE"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Country of birth" value="DE"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="City of birth" value="Berlin"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Country code" value="DE"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Country code 3 symbols" value="DEU"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Land" value="Deutschland"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Bundesland" value="Berlin"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="City" value="Berlin"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Town city area" value="Charlottenburg-Wilmersdorf"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Street and house" value="Proskauer Str. 20"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Street" value="Proskauer Str."></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="House Number" value="20"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Address" value="Deutschland Berlin Charlottenburg-Wilmersdorf red st 3"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Post code" value="10247"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Phone" value="+498005907441"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Phone without country code" value="01802720000"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Data processing" value="Yes"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Quoten-stil" value="Europäischer Quoten-Stil"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Currency" value="EUR - Euro"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Currency code" value="EUR"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Deposit period" value="Täglich"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Deposit take" value="Kein Limit"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Bonus code Bet90" value="bonus code"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Bonus code Bet365" value="15415"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Phone call" value="Yes"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="SMS notify" value="Yes"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Post notification" value="Yes"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Allow notification" value="Yes"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Text notification" value="Yes"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Email notification" value="Yes"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Bet365 notification" value="Yes"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Policies acceptance" value="Yes"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Four digit security number" value="5968"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Time zone" value="CET"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Odds type" value="Dezimal"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Security question Bwin" value="Mein Spitzname?"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Security question Bwin answer" value="Biba"></paper-input>
</div>
<div class="labelBox">
	<paper-input   label="Preferred language" value="Deutsch"></paper-input>
</div>
</div>
      </section>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
