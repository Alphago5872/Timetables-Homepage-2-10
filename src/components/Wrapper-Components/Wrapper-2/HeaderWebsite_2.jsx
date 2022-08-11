import { Link } from "react-router-dom";

const HeaderWebsite_2 = () => {
  return (
    <div>
      <div>
        <Link to='/'>
          <box-icon name="home" type="solid" color="#ffffff"></box-icon>
        </Link>
        <h1>Home</h1>
      </div>
      <div>
        <box-icon name="sun" type="solid" color="#ffffff"></box-icon>
        <box-icon name="cog" type="solid" color="#ffffff"></box-icon>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
      </div>
    </div>
  );
};

export default HeaderWebsite_2;
