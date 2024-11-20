import Icons from "component/Icons";
import Images from "component/Images";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Icons.Logo />
          </div>
          <div className="user">
            <img src={Images.user} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
