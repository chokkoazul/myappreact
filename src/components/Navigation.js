import React, { Component } from 'react';

class Navigation extends Component {
render() {
    console.log("hola navegador");
    console.log(this.props.todos);
    return (
        <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">
            { this.props.title}
        </a>
      </nav>
    )
    }
}

export default Navigation;