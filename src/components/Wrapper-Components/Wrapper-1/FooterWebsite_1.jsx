import { Link } from "react-router-dom";

const FooterWebsite = () => {
  return (
    <div className="footer">
      {/* <div className="footer__right">
        <ul className="footer__right--links">
          <li>
            <Link to="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <a>Settings</a>
            </Link>
          </li>
        </ul>
      </div> */}

      <div className="footer__text">
        <h3 className="footer__text--copyright">
          All Rights Reserved &copy; 2022 The Newton Sixth Form School
        </h3>
        {/* <br /> */}
        <h3 className="footer__text--credit">
          Made With ❤️ by
          <Link
            to="/Developers"
            className="footer__text--credit--developers"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <u>Developers</u>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default FooterWebsite;
