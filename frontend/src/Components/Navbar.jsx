import React, { Component } from 'react';
import {  useNavigate } from 'react-router-dom'

class Navbar extends Component{
        toHome()
        {
            this.props.navigate('/');
        }
        toAbout()
        {
            this.props.navigate('/about');
        }
        toProjects()
        {
            this.props.navigate('/projects');
        }
        render()
        {
            return (

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <a class="navbar-brand" >Atharva Trivedi</a>
                <div class="collapse navbar-collapse me-2" id="navbarSupportedContent" >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

           )
        }
        
             
}

export function NavbarWithNavigate(props) {
    const navigate = useNavigate();
    return <Navbar navigate={navigate}></Navbar>
}
export default Navbar;