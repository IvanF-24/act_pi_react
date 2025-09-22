import BmiForm from "../components/BmiForm";


export default function Home() {
  return (
    <main className="main">
      <section className="welcome">
        <h1 className="title">
          Bienvenido a tu Calculadora de IMC
        </h1>
        <p className="description">
          Calcula tu Índice de Masa Corporal (IMC) fácilmente. Ingresa tu peso y
          altura para conocer tu estado nutricional y recibir recomendaciones
          saludables.
        </p>
        <div className="cta-container">
          <span className="cta">
            ¡Empieza ahora!
          </span>
        </div>
      </section>
      <BmiForm />
      <footer className="footer">
        &copy; {new Date().getFullYear()} Calculadora IMC. Todos los derechos
        reservados.
      </footer>
    </main>
  );
}
