import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'light',
            buttonColor: 'is-dark'
        }
    }

    darkModeTrigger = () => {
        if(this.state.buttonText === 'Dark') {
            this.props.setDarkModeText('black');
            this.setState({buttonText: 'Light', buttonColor: 'is-dark'});
        } else {
            this.props.setDarkModeText('white');
            this.setState({buttonText: 'Dark', buttonColor: 'is-dark'});
        }
    }


    render() {
        return (
          <div>
            <nav className="navbar" style={{ backgroundColor: this.props.background }}>
              <div>
                <h1><strong style={{ color: this.props.text }}>FAUCET</strong></h1>
              </div>
              <div>
                <button className={`button is-rounded ${this.state.buttonColor}`} onClick={this.darkModeTrigger}>{this.state.buttonText}</button>
              </div>
            </nav>
          </div>
        );
      }
}

export default NavBar;