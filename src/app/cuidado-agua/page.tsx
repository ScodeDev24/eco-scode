import Accordion from '@/components/Accordion/Accordion';
interface DataItem {
  topic: string;
  description: string[];
}


const generalData: DataItem[] = [
  {
    topic: "Instalar dispositivos ahorradores de agua",
    description: [
      "Coloca aireadores en los grifos y duchas de bajo flujo.",
      "Estos dispositivos pueden reducir el consumo de agua hasta en un 50%, sin sacrificar la presión.",
      "Instala inodoros de doble descarga, que usan menos agua en cada descarga según la necesidad.",
    ],
  },
  {
    topic: "Optimizar el uso de lavadoras",
    description: [
      "Cargar completamente la lavadora y el lavavajillas antes de usarlos.",
      'Usar los ciclos "eco" o "eficientes" reduce el consumo de agua sin comprometer la limpieza.',
      "Si tienes que lavar poca ropa, utiliza un ciclo corto o ajusta el nivel de agua manualmente.",
    ],
  },
  {
    topic: "Reducir el tiempo en la ducha",
    description: [
      "Tomar duchas de 5 minutos o menos puede ahorrar hasta 20 litros de agua por cada ducha.",
      "Considera usar un temporizador para controlarlo.",
    ],
  },
  {
    topic: "Cerrar el grifo mientras no lo uses",
    description: [
      "Cuando te cepilles los dientes, te afeites o laves los platos a mano, cierra el grifo mientras no uses el agua.",
      "Esto puede ahorrar hasta 6 litros de agua por minuto.",
    ],
  },
  {
    topic: "Recoger agua de lluvia",
    description: [
      "Instala un sistema de captación de agua de lluvia para usarla en tareas como regar el jardín o lavar el coche.",
      "Esto reduce la necesidad de usar agua potable para estas actividades.",
    ],
  },
  {
    topic: "Usar cubos de agua en lugar de mangueras",
    description: [
      "Para lavar el coche, utiliza un balde en lugar de una manguera.",
      "Las mangueras pueden desperdiciar hasta 300 litros de agua en un solo lavado.",
      "Usa un cubo de agua para limpiar suelos en lugar de dejar correr el agua constantemente.",
    ],
  },
  {
    topic: "Cubre las ollas cuando cocines",
    description: [
      "Cubre las ollas cuando cocines para evitar que el agua se evapore rápidamente.",
      "Si sobra agua después de hervir verduras o pasta, úsala para regar las plantas, ya que contiene nutrientes.",
    ],
  },
  {
    topic: "Recolectar agua de lluvia con herramientas simples",
    description: [
      "Coloca cubos o recipientes fuera de la casa durante la lluvia para recolectar agua.",
      "Esta agua puede usarse para regar plantas, lavar pisos o incluso lavar ropa en momentos de necesidad.",
    ],
  },
  {
    topic: "Reparar fugas con métodos caseros",
    description: [
      "Si hay una fuga y no puedes permitirte un fontanero de inmediato, usa cintas aislantes o adhesivos temporales para evitar el desperdicio de agua.",
      "Las fugas pueden ser pequeñas pero causar grandes pérdidas con el tiempo.",
    ],
  },
];
export default function CuidadoAgua() {
  return (
    <section>
    <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold mt-10">Cuida el Agua</h1>
    <Accordion generalData={generalData} isList={false}/>
    </section>
  )
}