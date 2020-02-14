1. Para inicializar el proyecto, es necesario instalar todas las dependencias solicitadas en el package.json. Se puede utilizar npm o yarn. (Comando: sudo npm install | sudo yarn install)

2. Una vez todas hayan sido instaladas, dirigirse al archivo gulpfile.babel.js y mirar todas las tareas que se pueden ejecutar mediante GULP JS.

3. Todas las tareas deben ejecutarse desde la terminal. La más importante es la tarea 'default', que se encarga de levantar un servidor para visualizar todos los cambios en los insumos (scss, js). (Comando: gulp default)

4. Todos los archivos fuente (scss, es6), están dentro de la carpeta 'src', a medida que se vayan haciendo cambios (y se tenga corriendo la tarea 'default gulp'), se generarán los mismos archivos pero ya transformados (css, js) en la carpeta 'public'.

5. El archivo 'src/scss/styles.scss' recoge todos los demás estilos y es el que finalmente se muestra en 'public/css/styles.css'.

6. Todos los archivos js (src/js) están desarrollados en ES6, es necesario usar babelJS para compilarlos y hacerlos leíbles por el navegador. Para hacerlo, existe una tarea en el archivo 'gulpfile.babel.js' llamada 'js'. Importante percatarse que exista el archivo .babelrc. (Comando: gulp js)

7. Finalmente hay una tarea que se encarga de minificar y compilar el HTML y los javascript externos. (Comando: gulp dist).
