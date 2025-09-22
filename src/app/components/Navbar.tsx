import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="nav-logo">IMC App</h2>
        <ul className="nav-links">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/calculadora">Calculadora</Link>
          </li>
          <li>
            <Link href="/ejercicios">Ejercicios</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
