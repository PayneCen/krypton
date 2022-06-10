import "./nav.css";

function Nav() {
  return (
    <div className="nav">
      <nav id="navbar" className="nav">
        <ul className="nav-list">
          <li>
            <a href="#welcome-section">主页</a>
          </li>
          <li>
            <a href="#projects">Demo</a>
          </li>
          <li>
            <a href="#contact">联系方式</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
