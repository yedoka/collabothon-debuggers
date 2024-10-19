import logo from "./assets/logo.png";
import "./App.css"
import Widget from "./components/Widget";



const App = () => {
  return (
    <>
    <div className="wrapper">
      <header className="header">
        <nav className="header__nav">
          <a href="#"><img src={logo} alt="logo" className="header__nav__logo" /></a>
          <ul className="header__nav__items">
            <li><a href="#" className="header__nav__item">Bank</a></li>
            <li><a href="#" className="header__nav__item">Business</a></li>
            <li><a href="#" className="header__nav__item">Career</a></li>
            <li><a href="#" className="header__nav__item">Contact</a></li>
          </ul>
          <input type="text" placeholder="Search..." className="header__nav__input" />
        </nav>
      </header>

      <main className="main__feed">
      <Widget />
      </main>
    </div>
    </>


  )
}

export default App