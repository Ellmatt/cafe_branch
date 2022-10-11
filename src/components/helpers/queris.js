// archivo que nos sirve para hacer las consultas a la ap jsonsv

const URL = "http://localhost:3004/productos";

// tipo de peticiones
// peticion GET trae todos los productos
// peticion POST, crear producto, login
// peticion DELETE, peticion para borrar
// peticion PUT, peticon

export const consultarApi = async () => {
  try {
    // fetch para peticiones
    // await para esperar
    const respuesta = await fetch(URL);
    // .json extrae datos en la propieda de la respuesta
    const listaProductos = await respuesta.json();
    // console.log(respuesta)
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

// peticion POST
export const crearProductoAPI = async () => {
  try {
    // fetch para peticiones
    // await para esperar
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    // .json extrae datos en la propieda de la respuesta
    const listaProductos = await respuesta.json();
    // console.log(respuesta)
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};
