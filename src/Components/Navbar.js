import React, { Component } from 'react'


class componentName extends Component {
  
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light" align="center">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Sobre</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a className="nav-link" href="#">ALJAMENTO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">RESTAURANTES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ORYZA SPA </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">RETIROS  & EVENTOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT US</a>
        </li>
        
        
       
      </ul>
      
    </div>
  </div>


  <button class="reserve">Reserve Ja</button>
</nav>



      </>
    )
  }
}

export default componentName
