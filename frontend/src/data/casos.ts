import type { Caso } from "../types/caso";

export const casos: Caso[] = [
  {
    id: "eb04e27c489e40b59a82eff7",
    codigo: "EXP-0087",
    titulo: "El Caso Niebla",
    descripcion: "Una noche de lluvia, el anticuario Julián Arce aparece muerto en el almacén de su tienda. La puerta principal estaba cerrada y tres personas aseguran no haber estado allí.",
    victima: "Julián Arce",
    ubicacion: "Anticuarios Arce, calle de la Seda 14",
    dificultad: "media",
    sospechosos: ["Mateo Vega", "Inés Roldán", "Álvaro Cruz", "Clara Montes"],
  },
  {
    id: "2a4d7fa80c654ad2b47bfb0d",
    codigo: "EXP-0088",
    titulo: "El Último Telegrama",
    descripcion: "La archivera Elena Vidal desaparece tras enviar un telegrama urgente desde la vieja estación. En la sala de clasificación aparece una mancha de tinta y un mensaje incompleto.",
    victima: "Elena Vidal (desaparecida)",
    ubicacion: "Estación Central, archivo histórico",
    dificultad: "media",
    sospechosos: ["Raúl Soria", "Marta Leal", "Iván Pardo", "Nora Gil"],
  },
  {
    id: "cffafaa650424e33a0e1b98c",
    codigo: "EXP-0089",
    titulo: "Las Doce Campanadas",
    descripcion: "Durante una recepción privada, el relojero Tomás Beltrán cae desplomado en su taller. El reloj principal se detuvo a las 23:00, pero varios testimonios no encajan.",
    victima: "Tomás Beltrán",
    ubicacion: "Relojería Beltrán, plaza del Mercado 3",
    dificultad: "alta",
    sospechosos: ["Vera Salas", "Bruno Esteve", "Lidia Ferrer", "Óscar Vidal"],
  },
];
