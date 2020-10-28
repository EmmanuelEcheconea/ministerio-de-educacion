import Contenido from "./Contenido";

export default interface Seccion {
  id: number;
  seccion: string;
  ruta: string;
  contenidos: Array<Contenido>;
  icon: string;
}
