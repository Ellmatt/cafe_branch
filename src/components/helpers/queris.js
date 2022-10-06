// archivo que nos sirve para hacer las consultas a la ap jsonsv

const URL = "http://localhost:3004/productos";

export const  consultarApi = async () => {
  try {
    // fetch para peticiones
    // await para esperar
    const respuesta = await fetch(URL)
    // .json extrae datos en la propieda de la respuesta
    const listaProductos= await respuesta.json()
    // console.log(respuesta)
    return listaProductos;
   
  } catch (error) {
    console.log(error);
  }
};
