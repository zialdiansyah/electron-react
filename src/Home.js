import React, {
   Component
} from 'react';

import {
  NavLink
} from "react-router-dom";

import 'bulma/css/bulma.css';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="tabs is-centered">
          <ul>
            <li className="is-active"><a>Pictures</a></li>
            <li><a>Music</a></li>
            <li><a>Videos</a></li>
            <li><a>Documents</a></li>
            <li><NavLink to="/">Logout</NavLink></li>
          </ul>
        </div>
        
      </div>
    )
  }
}

export default Home;