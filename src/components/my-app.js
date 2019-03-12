/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
**/

import { LitElement, html } from '@polymer/lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
  updateDrawerState,
  updateLayout
} from '../actions/app.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { menuIcon } from './my-icons.js';
import './snack-bar.js';

class MyApp extends connect(store)(LitElement) {
  _render({appTitle, _page, _drawerOpened, _snackbarOpened, _offline}) {
    // Anything that's related to rendering should be done in here.
    return html`
    <style>
      :host {
        --app-drawer-width: 256px;
        display: block;

        --app-primary-color: #de3838;
        --app-secondary-color: #293237;
        --app-dark-text-color: var(--app-secondary-color);
        --app-light-text-color: white;
        --app-section-even-color: #f7f7f7;
        --app-section-odd-color: white;

        --app-header-background-color: white;
        --app-header-text-color: var(--app-dark-text-color);
        --app-header-selected-color: var(--app-primary-color);

        --app-drawer-background-color: var(--app-secondary-color);
        --app-drawer-text-color: var(--app-light-text-color);
        --app-drawer-selected-color: #78909C;
      }

      app-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        background-color: var(--app-header-background-color);
        color: var(--app-header-text-color);
        border-bottom: 1px solid #eee;
      }

      .toolbar-top {
        background-color: var(--app-header-background-color);
      }

      [main-title] {
        font-family: 'Pacifico';
        text-transform: lowercase;
        font-size: 30px;
        /* In the narrow layout, the toolbar is offset by the width of the
        drawer button, and the text looks not centered. Add a padding to
        match that button */
        padding-right: 44px;
      }

      .toolbar-list {
        display: none;
      }

      .toolbar-list > a {
        display: inline-block;
        color: var(--app-header-text-color);
        text-decoration: none;
        line-height: 30px;
        padding: 4px 24px;
      }

      .toolbar-list > a[selected] {
        color: var(--app-header-selected-color);
        border-bottom: 4px solid var(--app-header-selected-color);
      }

      .menu-btn {
        background: none;
        border: none;
        fill: var(--app-header-text-color);
        cursor: pointer;
        height: 44px;
        width: 44px;
      }

      .drawer-list {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 24px;
        background: var(--app-drawer-background-color);
        position: relative;
      }

      .drawer-list > a {
        display: block;
        text-decoration: none;
        color: var(--app-drawer-text-color);
        line-height: 40px;
        padding: 0 24px;
      }

      .drawer-list > a[selected] {
        color: var(--app-drawer-selected-color);
      }

      .main-content {
        padding-top: 64px;
        min-height: 100vh;
      }

      .page {
        display: none;
      }

      .page[active] {
        display: block;
      }

      footer {
        padding: 24px;
        background: var(--app-drawer-background-color);
        color: var(--app-drawer-text-color);
        text-align: center;
      }

      /* Wide layout: when the viewport width is bigger than 460px, layout
      changes to a wide layout. */
      @media (min-width: 460px) {
        .toolbar-list {
          display: block;
        }

        .menu-btn {
          display: none;
        }

        .main-content {
          padding-top: 107px;
        }

        /* The drawer button isn't shown in the wide layout, so we don't
        need to offset the title */
        [main-title] {
          padding-right: 0px;
        }
      }
.cls-1,.cls-3,.cls-4,.cls-5{fill:#fff;}.cls-1,.cls-2,.cls-3,.cls-4{stroke:#020608;}.cls-1,.cls-2,.cls-3,.cls-4,.cls-5,.cls-9{stroke-miterlimit:10;}.cls-2,.cls-6{fill:var(--app-primary-color)}.cls-3,.cls-5{stroke-width:0.75px;}.cls-4{stroke-width:0.5px;}.cls-5,.cls-9{stroke:#000;}.cls-7,.cls-8{isolation:isolate;}.cls-8{font-size:103.09px;font-family:Constantia-Italic, Constantia;font-style:italic;}    </style>

    <!-- Header -->
    <app-header condenses reveals effects="waterfall">
      <app-toolbar class="toolbar-top">
        <button class="menu-btn" title="Menu" on-click="${_ => store.dispatch(updateDrawerState(true))}">${menuIcon}</button>
        <div main-title style="height:100%; padding-top: 10px;"><svg style="height:100%" xmlns="http://www.w3.org/2000/svg" id="betautomation_logo" data-name="betautomation logo" viewBox="0 0 482.24 116.8"><ellipse class="cls-1" cx="249.68" cy="165.45" rx="26.97" ry="26.02" transform="translate(29.63 270.31) rotate(-76.81)"/><polygon class="cls-2" points="261.09 84.55 256.99 78.63 247.38 80.21 242.48 86.89 252.73 90.79 261.09 84.55"/><polygon class="cls-2" points="246.82 64.89 240.43 57.4 230.56 61.66 232.55 71.91 242.88 72.15 246.82 64.89"/><polygon class="cls-2" points="259.51 70.2 267.24 66.3 269.29 57.68 260.23 55.92 255.52 63.43 259.51 70.2"/><polygon class="cls-4" points="244.93 48.31 240.39 57.02 246.98 65.2 255.22 63.65 260.07 54.99 253.44 47.38 244.93 48.31"/><path class="cls-3" d="M260.28,140.6l-5.21,7,6.75,8.46,9.7,1.72,2.92-.94c-1-2.83-1.82-5.46-4.26-8.35C265.53,142.27,260.28,140.6,260.28,140.6Z" transform="translate(-1.99 -100.47)"/><path class="cls-2" d="M240.53,140.36a14.2,14.2,0,0,0-3.43,2.11l9.82,6.32,8.51-.94,4.81-6.51s-7.44-2.77-9.93-2.66C247.11,139,243.53,139.24,240.53,140.36Z" transform="translate(-1.99 -100.47)"/><path class="cls-3" d="M230.71,147.38c-2.84,3.05-5.32,8.78-5.32,8.78l6.86,5.74,10.12-4.45,4.55-8.7-10.41-6.17A21.4,21.4,0,0,0,230.71,147.38Z" transform="translate(-1.99 -100.47)"/><path class="cls-3" d="M261.42,171.07l-2.44,8,4.15,6.2s4.93-1.6,6.62-3.28,4.37-6.12,4.53-8.23c-.63-1.33-4.65-6.51-4.65-6.51Z" transform="translate(-1.99 -100.47)"/><polygon class="cls-5" points="232.15 72.31 228.49 77.34 232.51 86.7 242.69 86.82 247.29 79.91 242.8 72.89 232.15 72.31"/><path class="cls-3" d="M232.25,161.9l-6.62-6a28.6,28.6,0,0,0-2.13,9.25,25,25,0,0,0,1,7.76l5.95,4.88,3.67-5Z" transform="translate(-1.99 -100.47)"/><path class="cls-6" d="M225,173.71c.16,4.14,6.15,10.85,9.49,13.46l-4-9.36Z" transform="translate(-1.99 -100.47)"/><path d="M71.49,146S65,134.9,56,139.46,43.7,151.72,41.27,160.59c-3.13,11.39-1.83,24.26,1.91,27.93,3.12,3.58,7.4,5.12,13.81,3.8a15.29,15.29,0,0,0,7.72-3.72l.37-6.48S53,187.65,49.6,183.71s-2.83-11.11-2.34-15.48,4.78-21.55,12.25-23c4.53-.89,7.08,3.52,8,4.63C68,150.42,71.49,146,71.49,146Z" transform="translate(-1.99 -100.47)"/><polygon points="60.67 63.18 34.72 63.09 36.95 56.59 62.68 56.55 60.67 63.18"/><polygon points="57.56 72.22 32.55 72.14 34.51 65.64 59.68 65.84 57.56 72.22"/><g class="cls-7"><text class="cls-8" transform="translate(0 91.23) scale(0.67 1)"><tspan xml:space="preserve">b  t  aut   mation</tspan></text></g><polygon class="cls-9" points="80.51 49.8 159.01 17.8 192.01 39.3 243.51 8.8 236.01 6.8 260.51 0.8 249.01 17.3 248.33 12.55 192.01 47.47 158.51 25.3 90.51 50.3 80.51 49.8"/></svg></div>
      </app-toolbar>

      <!-- This gets hidden on a small screen-->
      <nav class="toolbar-list">
        <a selected?="${_page === 'view1'}" href="/view1">Credentials</a>
        <a selected?="${_page === 'view2'}" href="/view2">Sites</a>
        <a selected?="${_page === 'view3'}" href="/view3">Run</a>
      </nav>
    </app-header>

    <!-- Drawer content -->
    <app-drawer opened="${_drawerOpened}"
        on-opened-changed="${e => store.dispatch(updateDrawerState(e.target.opened))}">
      <nav class="drawer-list">
        <a selected?="${_page === 'view1'}" href="/view1">View One</a>
        <a selected?="${_page === 'view2'}" href="/view2">View Two</a>
        <a selected?="${_page === 'view3'}" href="/view3">View Three</a>
      </nav>
    </app-drawer>

    <!-- Main content -->
    <main class="main-content">
      <my-view1 class="page" active?="${_page === 'view1'}"></my-view1>
      <my-view2 class="page" active?="${_page === 'view2'}"></my-view2>
      <my-view3 class="page" active?="${_page === 'view3'}"></my-view3>
      <my-view404 class="page" active?="${_page === 'view404'}"></my-view404>
    </main>

    <footer>
      <p>Made with &hearts; by the Polymer team.</p>
    </footer>

    <snack-bar active?="${_snackbarOpened}">
        You are now ${_offline ? 'offline' : 'online'}.</snack-bar>
    `;
  }

  static get properties() {
    return {
      appTitle: String,
      _page: String,
      _drawerOpened: Boolean,
      _snackbarOpened: Boolean,
      _offline: Boolean
    }
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/2.0/docs/devguide/gesture-events#use-passive-gesture-listeners
    setPassiveTouchGestures(true);
  }

  _firstRendered() {
    installRouter((location) => store.dispatch(navigate(window.decodeURIComponent(location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`,
        (matches) => store.dispatch(updateLayout(matches)));
  }

  _didRender(properties, changeList) {
    if ('_page' in changeList) {
      const pageTitle = properties.appTitle + ' - ' + changeList._page;
      updateMetadata({
          title: pageTitle,
          description: pageTitle
          // This object also takes an image property, that points to an img src.
      });
    }
  }

  _stateChanged(state) {
    this._page = state.app.page;
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
    this._drawerOpened = state.app.drawerOpened;
  }
}

window.customElements.define('my-app', MyApp);
