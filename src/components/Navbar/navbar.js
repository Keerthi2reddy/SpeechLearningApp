import './navbar.css';

function NavbarComponent() {
  return (
    <>
    <div>
      <nav className="navbar">
          <a href="/">Home</a>
          <a href="/therapy">Exercise</a>
          <a href="/account">Login</a>
      </nav>
    </div>
    </>
  );
}

export default NavbarComponent;