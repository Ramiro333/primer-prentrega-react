# Clean Soles - Tienda de Zapatillas de Alta Gama

## Descripción

Clean Soles es una aplicación web creada con **React** que permite a los usuarios explorar y comprar zapatillas de alta gama. El proyecto utiliza varios conceptos de React, como **navegación entre rutas**, **contextos**, **hooks**, y está estructurado en componentes reutilizables.

## Características

- **Navegación**: Se puede navegar entre diferentes secciones del sitio usando **React Router**.
- **Componentes reutilizables**: La interfaz está compuesta por múltiples componentes modulares, lo que facilita su mantenimiento y extensión.
- **Rutas dinámicas**: Las páginas individuales de productos y categorías se crean mediante rutas dinámicas.
- **Context API**: Se usa para manejar el estado global de productos, carrito de compras, y más.
- **Hooks**: Se utilizan **useState**, **useEffect**, **useContext** y otros hooks para la gestión eficiente del estado y efectos secundarios.

## Tecnologías Utilizadas

- **React**:
- **Firebase/Firestore**

##Ultimas consideraciones
Si bien he seguido clase a clase lo que hemos hecho en clase, consideraria que esto mismo fue la plantilla para poder crear mi proyecto, agregandole mi propia forma de usar la logica en la estructura y personalizando los componentes y las rutas segun mis preferencias para mi proyecto
He utilizado un contexto para los productos, esto fue porque cuando el profe sufirio la actividad de traer los productos de la base de datos y utilizarlos, esta fue una gran idea que se me ocurrio para que funcionase, esto me eprmite acceder a la informacion de los productos en cualquier componenete, cuestion que me sirvio para el carrousel
existe una linea de codigo (Checkout.jsx linea 48) en donde he utilizado una funcion para actualizar el stock. Bien, esto lo he tenido que hacer debido a que, al realizar la compra y volver al producto, el stock de este no se actualizaria, solo en caso de recargar la pagina pero ya sabemos que esto no es lo que queremos hacer en una SPA, pero usando esta funcion, al terminar la compra, usa el updatedoc para poner el nuevo stock y asi actualizarlo en tiempo real. Si bien soy consciente que hay una forma de que firebase actualice en tiempo real los datos al ser cambiado, me ha costado implementarlo por falta de tiempi, aun asi, he logrado que el codigo se comporte como estoy buscando.
Existe el contexto de ThemeProvidero que he deicido no quitarlo del codigo por mas de que ahora mismo no tenga utilidad porque deseo implementarlo en el futuro del proyecto(quiza al momento de corregir este proyecto ya este implementado)
el carrusel lo implemnete mas que nada para practicar mas el uso de js , css, html en el mismo documento, componentes, rutas, APIs(aunque esta no es la mas linda de todas...) etc. el mismo antes de mapear los productos, contiene un metodo slice para solo mostrar los primeros productos en el array, porque si tengo 90 preoductos no quiero q se muestren los 90
sin mas que añadir, resaltar al profesor que de los 3 cursos que llevo en coder, ha sido el mejor en la forma de explicar y expresar su gran conocimiento y la facilidad con la que me hizo entender los temas, definitivamente sus clases van a ser objeto de ser vistas nuevamente para seguir aprendiendo. al igual que el trabajo de los tutores que han sido atentos y atinados con los tiempos, comentarios y correciones, un gusto haber trabajaod con ustedes esta oportunidad
pd: porfavor no se fijen en la estetica!! soy malisimo diseñando
[![Fijate en la logica!](https://github.com/Ramiro333/primer-prentrega-react/blob/main/src/assets/img/fijate-en-el-codigo.jpeg?raw=true "Fijate en la logica!")](https://github.com/Ramiro333/primer-prentrega-react/blob/main/src/assets/img/fijate-en-el-codigo.jpeg?raw=true "Fijate en la logica!")

