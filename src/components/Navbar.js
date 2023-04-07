import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Mera Cart
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
