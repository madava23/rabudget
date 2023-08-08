// rrd imports
import { Form, NavLink } from "react-router-dom";

// library
import { TrashIcon } from "@heroicons/react/24/solid";

// assets
import home from "../assets/home.svg";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={home} alt="" height={20} />
        <span>iKaonty</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!confirm("Hamafa ny mpampiasa sy angona rehetra?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Hamafa ny mpampiasa</span>
            <TrashIcon width={15} />
          </button>
        </Form>
      )}
    </nav>
  );
};
export default Nav;
