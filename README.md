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

## Ultimas consideraciones

Si bien he seguido clase a clase lo que hemos hecho, consideraría que esto fue la plantilla para crear mi proyecto, agregándole mi propia forma de aplicar la lógica en la estructura y personalizando los componentes y las rutas según mis preferencias.

He utilizado un contexto para los productos porque, cuando el profesor sugirió la actividad de traer los productos de la base de datos y utilizarlos, se me ocurrió que sería una gran idea implementarlo. Esto me permite acceder a la información de los productos en cualquier componente, lo cual me fue muy útil para el carrusel.

Existe una línea de código (Checkout.jsx, línea 48) donde utilicé una función para actualizar el stock. Esto lo hice porque, al realizar la compra y volver al producto, el stock no se actualizaba, solo lo hacía si recargaba la página. Sabemos que esto no es lo que queremos en una SPA. Sin embargo, usando esta función, al terminar la compra, utilizo updateDoc para establecer el nuevo stock y así actualizarlo en tiempo real. Aunque soy consciente de que Firebase tiene una forma de actualizar los datos en tiempo real al ser modificados, me ha costado implementarlo por falta de tiempo. Aun así, logré que el código se comporte como lo estaba buscando.

Existe el contexto de ThemeProvider, que decidí no quitar del código aunque actualmente no tenga utilidad, porque planeo implementarlo en el futuro del proyecto (quizás al momento de corregir este proyecto ya esté implementado).

El carrusel lo implementé principalmente para practicar más el uso de JavaScript, CSS y HTML en el mismo documento, componentes, rutas, APIs (aunque esta no es la más linda de todas...). Antes de mapear los productos, contiene un método slice para mostrar solo los primeros productos del array, porque si tengo 90 productos no quiero que se muestren todos.

Aun me quedan algunos filtros y detalles que mejorar que lo voy a estar haciendo en estos dias, mas entrego hoy 11/09 para tener margen para mejorar y no entregar en la fecha limite, aun asi considero que hasta este commit, la aplicacion satisface los criterios de evaluacion.

Sin más que añadir, quiero resaltar que de los 3 cursos que llevo en Coder, este ha sido el mejor en cuanto a la forma de explicar y transmitir el conocimiento. La facilidad con la que el profesor hizo que entendiera los temas es admirable, y sin duda volveré a ver las clases para seguir aprendiendo. También quiero destacar el trabajo de los tutores, que han sido atentos y acertados en los tiempos, comentarios y correcciones. Ha sido un placer trabajar con ustedes.

P.D.: ¡Por favor, no se fijen en la estética! Soy malísimo diseñando.
[![Fijate en la logica!](https://github.com/Ramiro333/primer-prentrega-react/blob/main/src/assets/img/fijate-en-el-codigo.jpeg?raw=true "Fijate en la logica!")](https://github.com/Ramiro333/primer-prentrega-react/blob/main/src/assets/img/fijate-en-el-codigo.jpeg?raw=true "Fijate en la logica!")

