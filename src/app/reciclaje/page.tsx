import Accordion from '@/components/Accordion/Accordion';

interface DataItem {
  topic: string;
  description: string[];
}


const recyclingData: DataItem[] = [
  {
    topic: "Contenedor Azul (Plásticos)",
    description: [
      "Botellas de plástico (agua, refrescos, etc.)",
      "Envases de plástico (productos de limpieza, shampoo)",
      "Tapas de plástico",
      "Bolsas de plástico limpias",
      "Tetra Paks (envases de leche, jugos)",
      "Bandejas de plástico limpias (de comida)",
      "Vasos y platos plásticos desechables (limpios)",
      "Film transparente y envoltura de plástico",
    ],
  },
  {
    topic: "Contenedor Verde (Orgánicos)",
    description: [
      "Restos de comida (frutas, verduras, carne, huesos)",
      "Cáscaras de huevo",
      "Restos de café y té (filtros y posos)",
      "Cáscaras de frutas y vegetales",
      "Residuos de jardín (hojas, ramas pequeñas)",
      "Papel o cartón sucio (como servilletas usadas)",
      "Alimentos en mal estado",
    ],
  },
  {
    topic: "Contenedor Gris (Papel y Cartón)",
    description: [
      "Periódicos",
      "Revistas",
      "Cajas de cartón (cajas de cereales, zapatos, etc.)",
      "Folletos, catálogos",
      "Papel de oficina",
      "Libros y cuadernos sin espiral",
      "Sobres sin ventanillas de plástico",
      "Papel kraft (papel de bolsas de compras)",
      "Cajas de cartón ondulado",
      "Papel de envolver no plastificado",
    ],
  },
];

export default function Reciclaje() {
  return (
    <section>
      <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-slate-50 font-semibold mb-4 mt-10">
        Aprende a Reciclar
      </h1>
      <Accordion generalData={recyclingData} isList={true} />
    </section>
  );
}
