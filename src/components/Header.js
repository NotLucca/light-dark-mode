const Header = (props) => {
  return (
    <div className={props.darkMode ? "header dark" : "header"}>
      <h1>React Tutorials </h1>
      <label className="switch">
        <input type="checkbox"></input>
        <span 
          className="slider"
          onClick={props.toggleDarkmode}
        ></span>
      </label>
    </div>
  );
};
export default Header;
