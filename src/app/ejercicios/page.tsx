export default function EjerciciosPage() {
  return (
    <main className="main">
      <section className="welcome">
        <h1 className="title">Rutinas de Ejercicio</h1>
        <p className="description">
          Dependiendo de tu objetivo, aquí encontrarás una guía de ejercicios para ayudarte 
          a <strong>bajar de peso</strong> o <strong>aumentar masa muscular</strong>.
        </p>
      </section>

      {/* Sección bajar de peso */}
      <section className="section">
        <h2 className="section-title">Ejercicios para Bajar de Peso</h2>
        <ul>
          <li>🏃‍♂️ Cardio: trotar, caminar rápido o bicicleta (30–45 min, 4–5 días por semana).</li>
          <li>🧘 Rutinas HIIT: intervalos cortos e intensos con descansos breves.</li>
          <li>🏋️ Circuito con pesas ligeras para activar el metabolismo.</li>
          <li>🚶 Caminar al menos 8.000–10.000 pasos diarios.</li>
        </ul>
      </section>

      {/* Sección aumentar masa */}
      <section className="section secondary">
        <h2 className="section-title">Ejercicios para Aumentar Masa Muscular</h2>
        <ul>
          <li>🏋️‍♀️ Entrenamiento de fuerza: sentadillas, press de banca, peso muerto.</li>
          <li>💪 Series de 8–12 repeticiones con pesas progresivamente más pesadas.</li>
          <li>🥩 Complementar con una dieta alta en proteínas.</li>
          <li>🛌 Descanso adecuado: 7–8 horas de sueño cada noche.</li>
        </ul>
      </section>

      <a href="/" className="button">Volver al inicio</a>

      <footer className="footer">
        © {new Date().getFullYear()} Calculadora IMC - Ejercicios
      </footer>
    </main>
  );
}
