import BmiForm from "../app/components/BmiForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300">
      <section className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4 drop-shadow-lg">
          Bienvenido a tu Calculadora de IMC
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-2">
          Calcula tu Índice de Masa Corporal (IMC) fácilmente. Ingresa tu peso y
          altura para conocer tu estado nutricional y recibir recomendaciones
          saludables.
        </p>
        <div className="flex justify-center mt-4">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full shadow">
            ¡Empieza ahora!
          </span>
        </div>
      </section>
      <BmiForm />
      <footer className="mt-10 text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Calculadora IMC. Todos los derechos
        reservados.
      </footer>
    </main>
  );
}
