# Notas temporales

- Los resultados del backend son muchos, y en su mayoría no son útiles para el presente challenge. Listé todos los tipos que recibí pero puse "unknown" en los que me generaban duda.
- Es difícil obtener el breadcrumb de las categorías a partir de las APIs sugeridas. Agregué consumir la api /categories/:id para obtener el breadcrumb desde ahí.
- El ítem en específico no tiene las categorías para el breadcrumb. Agregué la propiedad "categories" al objeto que devuelve la API para cumplir con ese requerimiento.
- Generar el breadcrumb a partir de la categoría disponible con más resultados genera inconsistencias en la interfaz desde la perspectiva del usuario. Por ejemplo, buscando "moja", la categoría devuelta para el breadcrumb es "Ropa y accesorios", pero el primer resultado es una cerveza. Lo ideal sería, como ocurre en la página de MeLi, poner los posibles filtros en algún lugar, pero no asumiendo en un breadcrumb que el filtro con más resultados es el que debería ir.
- Agregue como wrapping el formato { success, payload, error } para la API REST para facilitar el manejo en el frontend.
