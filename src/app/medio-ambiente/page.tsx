import Link from 'next/link';

export default function MedioAmbiente() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Medio Ambiente</h1>

      {/* Submenú de subsecciones */}
      <nav className="mb-6">
        <ul className="space-y-2">
          <li>
            <Link href="/reciclaje/tipos">
              Tipos de Materiales Reciclables
              </Link>
          </li>
          <li>
            <Link href="/reciclaje/guia">
              Guía de Reciclaje
            </Link>
          </li>
          <li>
            <Link href="/reciclaje/reducir">
              Cómo Reducir el Uso de Plásticos
            </Link>
          </li>
        </ul>
      </nav>

      <p>
        Descubre cómo reciclar correctamente y ayuda al medio ambiente con estos consejos.
      </p>
    </div>
  );
}
