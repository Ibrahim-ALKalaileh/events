
import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>Meetups App</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>

          <li>
            <Link to="/favourites">Favourites</Link>
          </li>

          <li>
            <Link to="/newmeetup">New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
