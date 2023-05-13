import React from "react";

function Navbar(){
    return(
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <img class="logo" src="https://www.xivtech.io./logo.svg" alt="Logo.png"></img>
      <img class="text-logo" src="https://www.xivtech.io./Text.svg" alt="Logo.png"></img>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul class="dropdown-menu">
              <div class="dropdown-menu d-block position-static pt-0 mx-0 rounded-3 shadow overflow-hidden w-280px" data-bs-theme="light">
                <form class="p-2 mb-2 bg-body-tertiary border-bottom">
                  <input type="search" class="form-control" autocomplete="false" placeholder="Type to filter..."></input>
                </form>
                <ul class="list-unstyled mb-0">
                  <li><a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                    <span class="d-inline-block bg-success rounded-circle p-1"></span>
                    Complete AI + RPA Automation
                  </a></li>
                  <li><a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                    <span class="d-inline-block bg-primary rounded-circle p-1"></span>
                    Build Better Apps
                  </a></li>
                  <li><a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                    <span class="d-inline-block bg-danger rounded-circle p-1"></span>
                    Cloud Services
                  </a></li>
                  <li><a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                    <span class="d-inline-block bg-info rounded-circle p-1"></span>
                    Cloud Ops
                  </a></li>
                </ul>
              </div>
            </ul>
          </li>
          <li class=" nav-item">
            <a class="nav-link ">Disabled</a>
          </li>
        </ul>
        <button class="btn btn-outline-danger submit" type="submit">Search</button>
      </div>
    </div>
  </nav>
      </div>
    )
}

export default Navbar;