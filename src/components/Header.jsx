import { Link } from "react-router-dom";

export default function Header({ children }) {
  return (
    <>
      <div id="main-header-loading"></div>
      <header id="main-header">
        <div id="header-title">
          <Link to={"/events"}>
            <h1>React Events</h1>
          </Link>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
