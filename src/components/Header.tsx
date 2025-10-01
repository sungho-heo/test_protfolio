export const Header = () => {
  return (
    <header className="Header">
      <div className="Header_Title_Container">
        <h1 className="Header_Title">HSH'Portfolio</h1>
        <nav className="Header_navigation-menu">
          <button className="Header_menu-button" type="button">
            About me
          </button>
          <button className="Header_menu-button" type="button">
            Skills
          </button>
          <button className="Header_menu-button" type="button">
            Archiving
          </button>
          <button className="Header_menu-button" type="button">
            Projects
          </button>
          <button className="Header_menu-button" type="button">
            Study
          </button>
        </nav>
      </div>
    </header>
  );
};
