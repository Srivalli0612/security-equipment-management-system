export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar navbar-dark bg-primary shadow-sm">

      <div className="container-fluid">

        <button
          className="btn btn-outline-light me-3"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        <span
    className="navbar-brand fw-bold mb-0"
    style={{
        letterSpacing: "0.5px",
        fontSize: "1.3rem"
    }}
>
          HPCL Security Equipment Management System
        </span>

      </div>

    </nav>
  );
}