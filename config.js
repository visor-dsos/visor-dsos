const CONFIG = {
  tituloPortal: "Visor Integrado DSOS",
  entidad: "SUNASS – Dirección de Sostenibilidad de los Servicios de Agua Potable y Saneamiento",

  grupos: [
    {
      id: "seguimiento",
      nombre: "Seguimiento y Gestión",
      icono: "📊"
    },
    {
      id: "merese",
      nombre: "MERESE",
      icono: "🌱"
    },
    {
      id: "grd",
      nombre: "GRD y ACC",
      icono: "🌧️"
    }
  ],

  reportes: [
    {
      id: "asistencia-poi",
      grupo: "seguimiento",
      nombre: "Asistencia Técnica y Metas POI",
      icono: "🎯",
      url: "https://app.powerbi.com/view?r=eyJrIjoiZjg2N2QwNzEtODA5Ny00N2IzLWFjZmYtMGZkMWJmMTgxZDc2IiwidCI6ImZlM2RmNThlLWY4NjctNGJmMy1iYzZjLTY3NDkwMWIxYWI5OCIsImMiOjR9",
      activo: true
    },
    {
      id: "reservas-merese-grd",
      grupo: "seguimiento",
      nombre: "Seguimiento de las Reservas MERESE y GRD",
      icono: "💰",
      url: "https://app.powerbi.com/view?r=eyJrIjoiMTZkY2JiNmItZjQzMi00ZDY2LWE5MjAtOTU1ZGM5MDU0MDI4IiwidCI6ImZlM2RmNThlLWY4NjctNGJmMy1iYzZjLTY3NDkwMWIxYWI5OCIsImMiOjR9",
      activo: true
    },
    {
      id: "ejecucion-saldo",
      grupo: "seguimiento",
      nombre: "Mapas de Ejecución y Saldo MERESE y GRD",
      icono: "🗺️",
      url: "https://app.powerbi.com/view?r=eyJrIjoiMzBlZGY3NzgtNzQ3NC00ZmNlLWI4YTAtZTljMDRjNjMwNWI0IiwidCI6ImZlM2RmNThlLWY4NjctNGJmMy1iYzZjLTY3NDkwMWIxYWI5OCIsImMiOjR9",
      activo: true
    },
    {
      id: "programacion-pmo",
      grupo: "seguimiento",
      nombre: "Programación del Inicio de AT para la Formulación del PMO",
      icono: "📅",
      url: "https://app.powerbi.com/view?r=eyJrIjoiNDUxZDAyMmItZDMxYy00MGY4LWEyNzEtZWY2ZTZhMWQ3MWE0IiwidCI6ImZlM2RmNThlLWY4NjctNGJmMy1iYzZjLTY3NDkwMWIxYWI5OCIsImMiOjR9&pageName=ReportSection3970b838b58a41675441",
      activo: true
    },

    {
      id: "intervenciones-merese",
      grupo: "merese",
      nombre: "Mapa Geográfico de Intervenciones MERESE",
      icono: "🌱",
      url: "",
      activo: false
    },
    {
      id: "cuencas-brechas",
      grupo: "merese",
      nombre: "Mapa Geográfico de Cuencas y Brechas MERESE",
      icono: "🌍",
      url: "",
      activo: false
    },

    {
      id: "avisos-lluvias",
      grupo: "grd",
      nombre: "Mapa de Avisos de Lluvias",
      icono: "🌧️",
      url: "https://geosunass.sunass.gob.pe/gisportal/apps/dashboards/690569c40b4d4dbe8d43fc827e8bf056",
      activo: true
    },
    {
      id: "quebradas",
      grupo: "grd",
      nombre: "Mapa de Avisos de Posible Activación de Quebradas",
      icono: "⚠️",
      url: "https://geosunass.sunass.gob.pe/gisportal/apps/dashboards/9a71b0071ada4b0facf543e2b7a449df",
      activo: true
    },
    {
      id: "sistemas-regulados",
      grupo: "grd",
      nombre: "Monitoreo de Sistemas Regulados",
      icono: "🏗️",
      url: "https://app.powerbi.com/view?r=eyJrIjoiOGVkNzdhZGEtZGEwNS00ZDllLTgxYTAtMmI5YzY0NmU0ZmEwIiwidCI6ImZlM2RmNThlLWY4NjctNGJmMy1iYzZjLTY3NDkwMWIxYWI5OCIsImMiOjR9&pageName=ReportSectionae4c28b68b7e5fb308ed",
      activo: true
    },
    {
      id: "escenarios-lluvia",
      grupo: "grd",
      nombre: "Escenarios de Lluvia",
      icono: "☔",
      url: "https://app.powerbi.com/view?r=eyJrIjoiYjEzZjA3MzUtOGE3Mi00MjJjLTgwMGQtNzk2ZmI1MjM5ZDkzIiwidCI6ImZlM2RmNThlLWY4NjctNGJmMy1iYzZjLTY3NDkwMWIxYWI5OCIsImMiOjR9",
      activo: true
    },
    {
      id: "emergencia",
      grupo: "grd",
      nombre: "Declaratoria de Estados de Emergencia",
      icono: "🚨",
      url: "https://app.powerbi.com/view?r=eyJrIjoiM2VlMzRkYWUtNmMxMS00ZTA4LWFlNjAtZTBhYTRiNDU5MTYzIiwidCI6ImZlM2RmNThlLWY4NjctNGJmMy1iYzZjLTY3NDkwMWIxYWI5OCIsImMiOjR9",
      activo: true
    },
    {
      id: "fen",
      grupo: "grd",
      nombre: "Fenómeno El Niño (FEN)",
      icono: "🌊",
      url: "https://app.powerbi.com/view?r=eyJrIjoiNGRiZGQ0NTctZmI0Yy00ZTc0LWJlOTEtNzk3YTRkNDdlYmQyIiwidCI6ImZlM2RmNThlLWY4NjctNGJmMy1iYzZjLTY3NDkwMWIxYWI5OCIsImMiOjR9",
      activo: true
    },
    {
      id: "visor-cartografico",
      grupo: "grd",
      nombre: "Visor Cartográfico",
      icono: "🌎",
      url: "https://geosunass.sunass.gob.pe/gisportal/apps/webappviewer/index.html?id=1d6324740a194189991f5ebe4d766143",
      activo: true
    }
  ]
};
