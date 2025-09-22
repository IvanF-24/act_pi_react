export default function HomePage() {
  return (
    <main className="main">
      <div className="welcome">
        <h1 className="title">Bienvenido a tu Calculadora de IMC</h1>
        <p className="description">
          El objetivo de esta página es ayudarte a conocer tu estado nutricional de
          manera rápida y sencilla mediante el cálculo del{" "}
          <span style={{ fontWeight: "bold", color: "#1d4ed8" }}>
            Índice de Masa Corporal (IMC)
          </span>.
          Solo necesitas ingresar tu peso y altura para obtener tu resultado.
        </p>
      </div>

      {/* Objetivos */}
      <section className="section">
        <h2 className="section-title">🎯 ¿Cuál es el objetivo de la Calculadora de IMC?</h2>
        <ul>
          <li>📏 Ingresar tu peso y altura de manera sencilla.</li>
          <li>⚖️ Calcular automáticamente tu IMC.</li>
          <li>📊 Clasificar tu estado (bajo peso, normal, sobrepeso u obesidad).</li>
          <li>💡 Brindar recomendaciones básicas para tu bienestar.</li>
        </ul>
      </section>

      {/* Beneficios */}
      <section className="section secondary">
        <h2 className="section-title">✅ Beneficios</h2>
        <p>
          Nuestra herramienta es fácil de usar y te brinda resultados inmediatos.
          Conocer tu IMC puede orientarte hacia mejores decisiones sobre tu alimentación
          y estilo de vida saludable.
        </p>
      </section>

      {/* Botón */}
      <a href="/calculadora" className="button">
        ¡Empieza a calcular tu IMC!
      </a>

      <footer className="footer">
        © 2025 Calculadora IMC. Todos los derechos reservados.
      </footer>
    </main>
  );
}
