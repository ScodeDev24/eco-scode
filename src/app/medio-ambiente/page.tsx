import Accordion from "@/components/Accordion/Accordion";

interface DataItem {
  topic: string;
  description: string[];
}

const carbonFootprintData: DataItem[] = [
  {
    topic: "Compensar tu huella de carbono",
    description: [
      "Planta árboles o apoya proyectos de reforestación para compensar tu huella de carbono.",
      "Contribuye a programas de compensación de carbono que invierten en energía renovable o captura de carbono.",
      "Calcula tu huella de carbono y utiliza servicios que te permitan compensarla fácilmente a través de donaciones o acciones.",
    ],
  },
  {
    topic: "Ahorrar energía en casa",
    description: [
      "Apaga las luces y desconecta los electrodomésticos cuando no los estés utilizando.",
      "Cambia a bombillas LED de bajo consumo, que consumen hasta un 75% menos energía.",
      "Usa electrodomésticos eficientes con etiqueta energética A+ o superior.",
    ],
  },
  {
    topic: "Reducir el uso del coche",
    description: [
      "Camina o usa la bicicleta para trayectos cortos, lo que no solo reduce emisiones sino también mejora tu salud.",
      "Comparte coche con compañeros de trabajo o vecinos para reducir el número de vehículos en circulación.",
      "Utiliza el transporte público siempre que sea posible para disminuir tu huella de carbono diaria.",
    ],
  },
  {
    topic: "Consumir menos plástico y reciclar",
    description: [
      "Evita los plásticos de un solo uso y lleva tus propias bolsas y botellas reutilizables.",
      "Compra productos a granel o con el menor embalaje posible para reducir residuos.",
      "Recicla correctamente todos los materiales: papel, vidrio, plásticos y metales, para reducir la cantidad de desechos que acaban en vertederos.",
    ],
  },
  {
    topic: "Adoptar una dieta más sostenible",
    description: [
      "Consume más frutas, verduras y cereales, y reduce el consumo de carne, especialmente la carne roja.",
      "Opta por productos locales y de temporada, que no requieren transporte de largas distancias.",
      "Planifica tus comidas para evitar el desperdicio de alimentos, que también contribuye a las emisiones.",
    ],
  },
  {
    topic: "Ahorra agua y energía en el hogar",
    description: [
      "Cierra el grifo mientras te cepillas los dientes o lavas los platos para no malgastar agua.",
      "Toma duchas más cortas para reducir el uso de agua caliente, lo que también ahorra energía.",
      "Instala aireadores en los grifos para reducir el caudal de agua sin perder presión.",
    ],
  },
];

export default function MedioAmbiente() {
  return (
    <section>
      <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-slate-50 font-semibold mt-10">Reduce tu huella de carbono</h1>
      <Accordion generalData={carbonFootprintData} isList={true}/>
    </section>
  );
}
