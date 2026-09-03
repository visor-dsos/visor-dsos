# Visor Integrado DSOS

Portal web estático para centralizar los reportes Power BI de DSOS.

## Archivos

- `index.html`: estructura y funcionamiento del visor. Normalmente no necesitas modificarlo.
- `styles.css`: diseño visual. Normalmente no necesitas modificarlo.
- `config.js`: nombres, descripciones, estados y enlaces de los reportes. **Este es el archivo que normalmente editarás.**
- `README.md`: estas instrucciones.

## Cómo activar un reporte pendiente

Abre `config.js`.

Busca el reporte. Por ejemplo:

```javascript
{
  id: "intervenciones",
  nombre: "Mapa de Intervenciones MERESE",
  url: "",
  activo: false
}
```

Reemplaza únicamente:

```javascript
url: "",
activo: false
```

por:

```javascript
url: "https://app.powerbi.com/view?r=TU_NUEVO_ENLACE",
activo: true
```

Después guarda el cambio mediante **Commit changes**.

GitHub Pages volverá a publicar automáticamente el visor.

## Publicar por primera vez con GitHub Pages

1. Sube `index.html`, `styles.css`, `config.js` y `README.md` al repositorio.
2. Ve a **Settings**.
3. En el menú izquierdo, entra a **Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. En **Branch**, selecciona `main`.
6. En la carpeta, selecciona `/ (root)`.
7. Pulsa **Save**.
8. Espera aproximadamente 1–3 minutos y vuelve a **Settings > Pages** para ver la URL publicada.

Si el usuario de GitHub es `visor-dsos` y el repositorio también se llama `visor-dsos`, la dirección esperada será:

`https://visor-dsos.github.io/visor-dsos/`
