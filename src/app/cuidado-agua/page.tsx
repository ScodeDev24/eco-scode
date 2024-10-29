import ExpandableText from '@/components/Expandable/ExpandableText';
import Link from 'next/link';

export default function CuidadoAgua() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cuidado del Agua</h1>
      <ExpandableText text='Instalar dispositivos ahorradores de agua.- Coloca aireadores en los grifos y duchas de bajo flujo. Estos dispositivos pueden reducir el consumo de agua hasta en un 50%, sin sacrificar la presión.
      Instala inodoros de doble descarga, que usan menos agua en cada descarga según la necesidad.' limit={41} />

      <ExpandableText text='Optimizar el uso de lavadoras.- Cargar completamente la lavadora y el lavavajillas antes de usarlos. Usar los ciclos "eco" o "eficientes" reduce el consumo de agua sin comprometer la limpieza.
    Si tienes que lavar poca ropa, utiliza un ciclo corto o ajusta el nivel de agua manualmente.' limit={41} />

      <ExpandableText text=' Reducir el tiempo en la ducha.- Tomar duchas de 5 minutos o menos puede ahorrar hasta 20 litros de agua por cada ducha. Considera usar un temporizador para controlarlo.' limit={41} />

      <ExpandableText text=' Cerrar el grifo mientras no lo uses.- Cuando te cepilles los dientes, te afeites o laves los platos a mano, cierra el grifo mientras no uses el agua. Esto puede ahorrar hasta 6 litros de agua por minuto.' limit={41} />

      <ExpandableText text='Recoger agua de lluvia.- Instala un sistema de captación de agua de lluvia para usarla en tareas como regar el jardín o lavar el coche. Esto reduce la necesidad de usar agua potable para estas actividades.' limit={41} />

      <ExpandableText text='Usar cubos de agua en lugar de mangueras.-Para lavar el coche, utiliza un balde en lugar de una manguera. Las mangueras pueden desperdiciar hasta 300 litros de agua en un solo lavado.
    Usa un cubo de agua para limpiar suelos en lugar de dejar correr el agua constantemente.' limit={41} />

      <ExpandableText text='Cubre las ollas cuando cocines.- Cubre las ollas cuando cocines para evitar que el agua se evapore rápidamente. Si sobra agua después de hervir verduras o pasta, úsala para regar las plantas, ya que contiene nutrientes.' limit={41} />

      <ExpandableText text='Recolectar agua de lluvia con herramientas simples.- Coloca cubos o recipientes fuera de la casa durante la lluvia para recolectar agua. Esta agua puede usarse para regar plantas, lavar pisos o incluso lavar ropa en momentos de necesidad.' limit={41} />

      <ExpandableText text='Reparar fugas con métodos caseros.- Si hay una fuga y no puedes permitirte un fontanero de inmediato, usa cintas aislantes o adhesivos temporales para evitar el desperdicio de agua mientras ahorras para una reparación completa. Las fugas pueden ser pequeñas pero causar grandes pérdidas con el tiempo.' limit={41} />
    </div>
  );
}