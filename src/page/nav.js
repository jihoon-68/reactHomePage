import { Link, Outlet } from "react-router-dom";
import Footer from "../component/Footer";
export default () => {
  return (
    <>
      <section id="header">
        <div className="container">
          <h1 id="logo">
            <a href="index.html">Strongly Typed</a>
          </h1>
          <p>A responsive HTML5 site template. Manufactured by HTML5 UP.</p>
          <nav id="nav">
            <ul>
              <li>
                <Link className="icon solid fa-home" to="/">
                  <span>Introduction</span>
                </Link>
              </li>
              <li>
                <a className="icon solid fa-cog" href="left-sidebar.html">
                  <span>Left Sidebar</span>
                </a>
              </li>
              <li>
                <a className="icon solid fa-retweet" href="right-sidebar.html">
                  <span>Right Sidebar</span>
                </a>
              </li>
              <li>
                <a className="icon solid fa-sitemap" href="no-sidebar.html">
                  <span>No Sidebar</span>
                </a>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </section>
      <Footer />
    </>
  );
};
