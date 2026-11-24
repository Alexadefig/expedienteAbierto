export type Dificultad = "baja" | "media" | "alta";

export interface Caso {
  id: string;
  codigo: string;
  titulo: string;
  descripcion: string;
  victima: string;
  ubicacion: string;
  dificultad: Dificultad;
  sospechosos: string[];
}
