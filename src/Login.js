import React, {
  Component
} from 'react';
import 'bulma/css/bulma.css';
import './Login.css';

import {
  NavLink
} from "react-router-dom";

class Login extends Component {
  render() {
    return(
      <section className = "hero is-success is-fullheight">
        <div className = "hero-body" >
          <div className = "container has-text-centered" >
            <div className = "column is-4 is-offset-4" >
              <h3 className = "title has-text-grey" > Login </h3> <p className = "subtitle has-text-grey" > Please login to proceed. </p> 
              <div className = "box" >
                <form>
                  <div className = "field" >
                    <div className = "control" >
                      <input className = "input is-large" type = "email" placeholder = "Your Email" autoFocus = "" />
                    </div> 
                  </div>
                  <div className = "field" >
                    <div className = "control" >
                      <input className = "input is-large" type = "password" placeholder = "Your Password" />
                    </div>
                  </div>
                  <NavLink className = "button is-block is-info is-large is-fullwidth" to="/home"> Login </NavLink> 
                </form> 
              </div>
            </div> 
          </div> 
        </div>
      </section>
    )
  }
}

export default Login;