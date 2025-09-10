export default function Header() {

  return (
    <>
        <header>
            <nav>
                <div className="nav__header">
                    <div className="nav__logo">
                        <a href="#" className="logo">BusTraveller</a>
                    </div>
                    <div className="nav__menu__btn" id="menu-btn">
                        <i className="ri-menu-line"></i>
                    </div>
                </div>
                <ul className="nav__links" id="nav-links">
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#">ABOUT</a>
                    </li>
                    <li>
                        <a href="#">TOUR</a>
                    </li>
                    <li>
                        <a href="#">PACKAGE</a>
                    </li>
                    <li>
                        <a href="#">CONTACT</a>
                    </li>
                    <li>
                        <a href="#">BOOK TRIP</a>
                    </li>
                </ul>
                <div className="nav__btns">
                    <button className="btn">BOOK TRIP</button>
                </div>
            </nav>
        </header>

    </>
  );
}
