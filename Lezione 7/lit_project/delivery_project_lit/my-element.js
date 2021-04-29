/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      p {
        text-align: justify;
        margin-left: 15px;
        margin-right: 15px;
      }

      img {
        display: block;
        margin: auto;
        border-radius: 1px;
        max-width: 100%;
        width: 100%;
        height: auto;
      }

      h1 {
        text-align: center;
        padding: 9px;
      }

      .border-left {
        border-left-width: 1px;
        border-left-style: solid;
        border-left-color: black;
      }

      .border-right {
        border-right-width: 1px;
        border-right-style: solid;
        border-right-color: black;
      }

      .debug-border {
        border: 0px solid black;
      }

      .d-header {
        margin-left: 15%;
        margin-right: 15%;
        top: 0px;
        right: 0px;
        left: 0px;
        z-index: 400;
        background-color: rgb(254, 217, 40);
        transition: background-color 0.2s ease-in-out 0s;
        max-width: 100%;
        width: auto;
      }

      .detail-header {
        margin-left: 15%;
        margin-right: 15%;
        top: 0px;
        right: 0px;
        left: 0px;
        z-index: 400;
        background-color: rgb(247, 246, 241);
        transition: background-color 0.2s ease-in-out 0s;
      }

      .hero-cover {
        background: url('https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fdist%2Fprod%2Fcollection-feed-header-refresh.ff66a93edfd10817d088e6b48bbb80cbedc459960022385bbdf8141e74de7c68c092f2444e22133303ff25dc3e90131d9a4474fd8a4fd1874ca7af56840d0170.jpg&quality=85&w=3200&h=0&mode=auto&format=webp&v=4');
        margin-left: 3%;
        background-attachment: scroll;
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: contain;
        margin-right: 3%;
        transition: opacity 0.4s linear;
        background-color: transparent;
        background-size: contain;
        background-repeat: no-repeat;
      }

      .detail-cover {
        background-image: url('https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com%2Fcbf49434-6c68-4947-862a-99b66fb2a01b%2Forig.jpg&quality=85&w=1500&h=0&mode=auto&format=webp&v=4');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transition: opacity 0.4s linear 0s;
      }

      .fill-background {
        background-color: rgb(254, 217, 40);
      }

      .fill-background-detail {
        background-color: rgb(247, 246, 241);
      }

      [class~='card'] {
        margin-bottom: 15px;
        margin-top: 15px;
      }

      .price {
        color: rgb(0, 204, 153);
      }

      .d-button {
        letter-spacing: 0.72px;
        font-weight: 600;
        text-transform: uppercase;
        line-height: normal;
        border: 1px solid rgba(0, 0, 0, 0.15);
        color: #000;
        background-color: transparent;
        height: 32px;
        padding-left: 16px;
        padding-right: 16px;
        border-radius: 16px;
        cursor: pointer;
        white-space: nowrap;
        -webkit-transition: background-color 0.1s ease-in-out;
        transition: background-color 0.1s ease-in-out;
        min-width: 86px;
        margin-right: 10px;
        font-size: 12px;
      }

      .d-button:hover {
        background-color: rgba(45, 49, 56, 0.03);
        border-color: rgba(45, 49, 56, 0.03);
        color: black;
      }

      .d-search {
        border-radius: 0px;
        appearance: none;
        font-size: 16px;
        letter-spacing: 0.14px;
        font-weight: 400;
        font-family: inherit;
        width: 100%;
        caret-color: rgb(0, 0, 0);
        color: rgb(45, 49, 56);
        -webkit-box-flex: 1;
        flex-grow: 1;
        line-height: normal;
        padding: 16px;
        opacity: 1;
        transition: opacity 50ms ease-in-out 0s;
        max-width: 380px;
        box-shadow: none !important;
        background-color: transparent;
        border-color: rgba(45, 49, 56, 0.03);
      }

      .d-search:hover,
      .d-search:focus {
        box-shadow: none !important;
        background-color: transparent;
        border-color: rgba(45, 49, 56, 0.03);
      }

      .nav-link {
        font-size: 1rem;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: {type: String},

      /**
       * The number of times the button has been clicked.
       */
      count: {type: Number},
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

      <div class="debug-border container-fluid fill-background sticky-top">
        <nav
          class="navbar navbar-expand-lg navbar-light d-header fill-background"
        >
          <a class="navbar-brand" href="#">Postmates ${this.count}</a>
          <button
            id="navbarTogglerBtn"
            @click=${this._onClick}
            class="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarToggler">
            <form class="form-inline mx-auto">
              <span><i class="fa fa-search" aria-hidden="true"></i> </span>
              <input
                class="form-control mr-sm-2 d-search"
                type="search"
                placeholder="Search"
              />
            </form>
            <ul
              class="nav navbar-nav ml-auto mt-2 mt-lg-0 justify-content-end"
            ></ul>
            <form class="form-inline">
              <button
                key="Login"
                class="btn btn-outline-success my-2 my-sm-0 text-uppercase d-button"
                type="submit"
              >
                Login
              </button>
              <button
                key="Signup"
                class="btn btn-outline-success my-2 my-sm-0 text-uppercase d-button"
                type="submit"
              >
                Signup
              </button>
            </form>
          </div>
        </nav>
      </div>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('my-element', MyElement);
