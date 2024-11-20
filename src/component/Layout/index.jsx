import Navbar from "component/Navbar";
import Footer from "component/Footer";
import HomePage from "pages/HomePage";
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <HomePage />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
