# Programabits

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Descripción sobre el desarrollo 

Buen día

El desarrollo de esta app buscó no depender de una cuenta Premium para su funcionamiento.

Se debe cambiar el token de Autenticación en el archivo `app/service/spotify.service.ts` Linea 19 , debido a que expira cada 60 minutos.

Mi prueba cumnple con el 90% del diseño solicitado en el mockup recibido debido a:
- Revisando la documentación del API, la función PLAY que ofrece Spotify para reproducir las canciones, necesita de una cuenta Premium para realizar la petición (Tambien se evidencio esto en la página developer.spotify.com, donde se pueden realizar pruebas unitagrias).
- Como se evidencia en el código para la parte de Login, intente realizar las peticiones a un servidor node.js local (el cual desplegue) para solicitar por GET los datos del usuario y así loguearlo, sin completar este proceso con éxito.  (Me guie de la siguiente documentación: https://developer.spotify.com/documentation/web-api/quick-start/) pero encontre una forma de traer los datos del usuario y mostrarlos donde fueron solicitados.
- Debido a la ausencia del proceso de login y no obtener el ID del usuario, la función de "Guardar playlist" se encuentra ausente.

Sin embargo agradezco el recibir esta prueba, ya que me enfrente al API Web de Spotify, un API nuevo para mi.

Quedo al tanto de algún comentario.
