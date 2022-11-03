// archivo que nos sirve para hacer las consultas a la ap jsonsv

// const URL = "http://localhost:3004/productos";
const URL = process.env.REACT_APP_API_CAFE;
console.log(URL)
const URLuser = "http://localhost:3004/usuarios";

// tipo de peticiones
// peticion GET trae todos los productos
// peticion POST, crear producto, login
// peticion DELETE, peticion para borrar
// peticion PUT, peticon que pide modificar un producto

export const consultarApi = async () => {
  try {
    // fetch para peticiones
    // await para esperar
    const respuesta = await fetch(URL);
    // .json extrae datos en la propieda de la respuesta
    const listaProductos = await respuesta.json();
    console.log(respuesta);
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

// peticion POST
export const crearProductoAPI = async (producto) => {
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
    console.log(respuesta)
    return respuesta;
    
  } catch (error) {
    console.log(error);
  }
};

// peticion delete

export const borrarProductoAPI = async (id) => {
  try {
    // fetch para peticiones
    // await para esperar
    const respuesta = await fetch(URL + "/" + id, {
      method: "DELETE",
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProductoApi = async (id) => {
  try {
    // fetch para peticiones
    // await para esperar
    const respuesta = await fetch(URL + "/" + id);
    // .json extrae datos en la propieda de la respuesta
    const productoBuscado = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };

    // console.log(respuesta)
    return productoBuscado;
  } catch (error) {
    console.log(error);
  }
};



export const consultarApiUsuario = async (usuario) => {
  console.log(usuario)
  try {
    
    // fetch para peticiones
    // await para esperar
    const respuesta = await fetch(URLuser);
    // .json extrae datos en la propieda de la respuesta
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email )
    console.log(respuesta);

    if(usuarioBuscado){
      console.log('email encontrado')
      //verificar el password
      if(usuarioBuscado.password === usuario.password ){
        console.log('pass encontrada')
        return usuarioBuscado
      }
    }else{
      console.log('el mail no existe')
      return
    }
  } catch (error) {
    console.log(error);
  }
};
// export const login = async (usuario) =>{
//   try{
//     //verificar si el usuario existe
//     const respuesta = await fetch(URL_USER);
//     const listaUsuarios = await respuesta.json();
//     //buscar cual usuario tiene mi mail
//     const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email )
//     if(usuarioBuscado){
//       console.log('email encontrado')
//       //verificar el password
//       if(usuarioBuscado.password === usuario.password ){
//         return usuarioBuscado
//       }
//     }else{
//       console.log('el mail no existe')
//       return
//     }
//   }catch(error){
//     console.log('errores en el login')
//     return
//   }
// }


export const crearUsuarioAPI = async (usuarios) => {
  try {
    // fetch para peticiones
    // await para esperar
    const respuesta = await fetch(URLuser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarios),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
export const editarProductoApi = async (id, datosActualizados) => {
  try {
    // fetch para peticiones
    // await para esperar
    const respuesta = await fetch(URL + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
