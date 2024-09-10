import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer d-flex justify-content-between">
      <div className=" text-white ps-4 d-flex align-items-center">
        Your Notes
      </div>
      <div className=" text-white pe-3 d-flex align-items-center">X</div>
    </div>
  );
};

export default Header;
