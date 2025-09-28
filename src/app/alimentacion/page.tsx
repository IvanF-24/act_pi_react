export default function AlimentacionPage() {
  return (
    <main className="main">
      <section className="welcome">
        <h1 className="title">🍎 Planes de Alimentación</h1>
        <p className="description">
          La alimentación es un pilar fundamental para alcanzar tus objetivos de salud. 
          Ya sea que quieras <strong>bajar de peso</strong> o <strong>aumentar masa muscular</strong>, 
          aquí encontrarás recomendaciones básicas para orientarte.
        </p>
      </section>

      {/* Alimentación para bajar de peso */}
      <section className="card">
        <h2 className="subtitle">🥗 Alimentación para Bajar de Peso</h2>
        <ul className="list">
          <li>✔️ Prioriza vegetales frescos y ricos en fibra.</li>
          <li>✔️ Reduce el consumo de azúcares y harinas refinadas.</li>
          <li>✔️ Prefiere proteínas magras como pollo, pescado o legumbres.</li>
          <li>✔️ Mantente hidratado: al menos 8 vasos de agua al día.</li>
          <li>✔️ Controla las porciones y evita comer en exceso.</li>
        </ul>
      </section>

      {/* Alimentación para ganar masa muscular */}
      <section className="card">
        <h2 className="subtitle">🍗 Alimentación para Aumentar Masa Muscular</h2>
        <ul className="list">
          <li>💪 Incrementa la ingesta de proteínas (huevos, carnes magras, lácteos).</li>
          <li>💪 Añade carbohidratos complejos como arroz integral, avena y papas.</li>
          <li>💪 Incluye grasas saludables: aguacate, frutos secos, aceite de oliva.</li>
          <li>💪 Realiza varias comidas pequeñas durante el día.</li>
          <li>💪 Combina siempre tu alimentación con entrenamiento de fuerza.</li>
        </ul>
      </section>

      <footer className="footer">
        © 2025 Calculadora IMC. Todos los derechos reservados.
      </footer>
    </main>
  );
}
