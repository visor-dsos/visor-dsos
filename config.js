const CONFIG = {
  tituloPortal: "Visor Integrado de Seguimiento DSOS",

  subtituloPortal:
    "Acceso centralizado a los reportes de MERESE, GRD, asistencia técnica, metas POI y gestión territorial.",

  entidad:
    "SUNASS – Dirección de Sostenibilidad de los Servicios",

  reportes: [

    {
      id: "reservas",
      nombre: "Seguimiento y ejecución de reservas MERESE y GRD",
      nombreCorto: "Reservas MERESE y GRD",
      categoria: "Financiero",
      descripcion:
        "Seguimiento del avance y ejecución de reservas MERESE y GRD.",
      icono: "💰",

      url:
        "https://app.powerbi.com/view?r=eyJrIjoiMTZkY2JiNmItZjQzMi00ZDY2LWE5MjAtOTU1ZGM5MDU0MDI4IiwidCI6ImZlM2RmNThlLWY4NjctNGJmMy1iYzZjLTY3NDkwMWIxYWI5OCIsImMiOjR9",

      activo: true
    },

    {
      id: "asistencia",
      nombre: "Seguimiento de Asistencia Técnica y Metas POI",
      nombreCorto: "Asistencia Técnica y POI",
      categoria: "Gestión",
      descripcion:
        "Seguimiento de asistencias técnicas y cumplimiento de metas POI.",
      icono: "🎯",

      url:
        "https://app.powerbi.com/view?r=eyJrIjoiZjg2N2QwNzEtODA5Ny00N2IzLWFjZmYtMGZkMWJmMTgxZDc2IiwidCI6ImZlM2RmNThlLWY4NjctNGJmMy1iYzZjLTY3NDkwMWIxYWI5OCIsImMiOjR9",

      activo: true
    },

    {
      id: "epsmap",
      nombre: "Seguimiento de EPS en mapa geográfico",
      nombreCorto: "EPS en mapa geográfico",
      categoria: "Territorial",
      descripcion:
        "Visualización territorial para el seguimiento geográfico de EPS.",
      icono: "🗺️",

      url:
        "https://app.powerbi.com/view?r=eyJrIjoiMzBlZGY3NzgtNzQ3NC00ZmNlLWI4YTAtZTljMDRjNjMwNWI0IiwidCI6ImZlM2RmNThlLWY4NjctNGJmMy1iYzZjLTY3NDkwMWIxYWI5OCIsImMiOjR9",

      activo: true
    },

    {
      id: "intervenciones",
      nombre: "Mapa de Intervenciones MERESE",
      nombreCorto: "Intervenciones MERESE",
      categoria: "MERESE",
      descripcion:
        "Mapa de intervenciones MERESE. Módulo preparado para incorporar el enlace del reporte.",
      icono: "🌱",

      url: "",

      activo: false
    },

    {
      id: "brecha",
      nombre: "Mapa de Área de Intervención y Brecha MERESE",
      nombreCorto: "Área y Brecha MERESE",
      categoria: "Brechas",
      descripcion:
        "Comparación territorial de áreas de intervención y brechas MERESE.",
      icono: "📍",

      url: "",

      activo: false
    }

  ]
};
