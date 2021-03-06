import React from 'react';
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="top-nav fade-in">
      <div className="grid-container">
        <div className="column-24">
          <div className="tablet-hide">
            <a className="skip-to-content" href="#skip-to-content">Skip To Content</a>
            <NavLink to="/" className="top-nav-title"  activeClassName="is-active">
              Web AppBuilder Widget Search
            </NavLink>
            <nav className="top-nav-list" role="navigation" aria-labelledby="topnav">
              <NavLink to="/about" className="top-nav-link"  activeClassName="is-active">
                About
              </NavLink>
            </nav>


            <nav className="class-top-nav-list right" role="navigation" aria-labelledby="usernav">
              <a className="top-nav-link" href="https://github.com/gavinr/wab-widget-search" aria-label="Github" target="_blank" rel="noopener noreferrer">GitHub</a>
            </nav>
          </div>

          <div className="tablet-show top-nav-flex">
            <nav className="top-nav-flex-list" role="navigation" aria-labelledby="topnav">
              <a href="/" className="icon-ui-menu top-nav-link js-drawer-toggle" data-drawer="left"><span className="phone-hide">Menu</span></a>
            </nav>
            <header className="top-nav-flex-title">
              <a href="/" className="top-nav-link">Web AppBuilder Widget Search</a>
            </header>
          </div>
        </div>
      </div>
    </header>
  );
}
