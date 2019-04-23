'use strict';
(
  function () {

    class TopNavigation extends HTMLElement {
      constructor() {
        // establish prototype chain
        super();

        // attaches shadow tree and returns shadow root reference
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
        const shadow = this.attachShadow({ mode: 'open' });


        // creating a container for the navigation component
        const topNavigationContainer = document.createElement('div');
        const user = this.user;

        // adding a class to our container for the sake of clarity
        topNavigationContainer.classList.add('navigation');

        // creating the inner HTML of the editable list element
        topNavigationContainer.innerHTML = `
        <style>
          .atom-navigation {
            border-bottom: 1px solid #dae1eb;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo {
            height: 31px;
            padding: 16px 27px;
          }

          .menu {
            font-family: inherit;
          }

          .dropdown {
            display: inline-block;
            position: relative;
          }
          
          .username {
            border-bottom: 4px solid var(--primaryColor);
            padding: 20px;
            min-width: 260px;
            text-align: center;
            background-color: #ffffff;
            cursor: pointer;
            line-height: 24px;
            white-space: nowrap;
            font-weight: bold;
            display:flex;
            justify-content: space-evenly;
            align-items: center;
          }
          
          .dropdown-menu {
            position: absolute;
            top: 100%;
            border: 1px solid #ccc;
            padding: 0;
            margin: 0;
            background-color: #ffffff;
            list-style-type: none;
          }

          .carat {
            font-size: 20px;
          }
          
          .dropdown-input {
            display: none;
          } 
          
          .dropdown-input + .dropdown-menu {
            display: none;
          } 
          
          .dropdown-input:checked + .dropdown-menu {
            display: block;
            width: 99%;
          } 
          
          .dropdown-menu li {
            padding: 10px 20px;
            cursor: pointer;
            white-space: nowrap;
          }
          
          .dropdown-menu li:hover {
            background-color: #f6f6f6;
          }
          
          .dropdown-menu li a {
            display: block;
            margin: -10px -20px;
            padding: 10px 20px;
          }
          
          .dropdown-menu li.divider{
            padding: 0;
            border-bottom: 1px solid #cccccc;
          }

        </style>
         

        <body>

        <div class="atom-navigation">
          <img src="https://www.learnwithatom.com/logo.png" class="logo">
          <div class="menu">
                <label class="dropdown">

                <div class="username">
                <img src="https://www.shareicon.net/data/32x32/2016/09/15/829458_user_512x512.png"> ${user} <mwc-icon>keyboard_arrow_down</mwc-icon>

                </div>
              
                <input type="checkbox" class="dropdown-input" id="test">
              
                <ul class="dropdown-menu">
                  <li>Organizations</li>
                  <li>Bonuses</li>
                  <li>Settings</li>
                  <li class="divider"></li>
                  <li>
                    <a href="http://www.learnwithatom.com">Sign Out</a>
                  </li>
                </ul>
                
              </label>
          </div>
        </div>


        </body>

      `;

        shadow.appendChild(topNavigationContainer);
      }

      // gathering data from element attributes
      get user() {
        console.log(this.getAttribute('user') || '')
        return this.getAttribute('user') || '';
      }

    }

    // let the browser know about the custom element
    customElements.define('atom-topnav', TopNavigation);
  })();