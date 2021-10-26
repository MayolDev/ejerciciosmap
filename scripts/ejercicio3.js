

const mapa = new Map([
    ["Cádiz" , 29303],
    ["Jerez", 12032],
    ["Chiclana", 22392],
    ["Madrid", 928392],
    ["Barcelona" , 982388]
    
  ]);


  const MasHabitantes = () => {
    let masHabitantes = -1;
    let ciudad = "";
    mapa.forEach((key, value) => {

      if(key> masHabitantes){
        masHabitantes = key;
        ciudad = value;
      } 

    })
    return ciudad;
  }


  const MenosHabitantes = () => {
    let masHabitantes = Number.MAX_VALUE;
    let ciudad = "";
    mapa.forEach((key, value) => {

      if(key< masHabitantes){
        masHabitantes = key;
        ciudad = value;
      } 

    })
    return ciudad;
  }




  let numeroCiudades = mapa.size;
  const h1NumeroCiudades = document.querySelector(".numero-ciudades");
  let h1NumeroCiudadesText = document.createTextNode("Numero de ciudades: "+ numeroCiudades)
  h1NumeroCiudades.appendChild(h1NumeroCiudadesText);


  
  h1NumeroCiudades.value = numeroCiudades;
  
  
  const ul = document.querySelector("#lista-mapas")

  mapa.forEach((key, value) => {
    const li = document.createElement("li");
    const liText = document.createTextNode("Ciudad : " + value + "; Habitantes: " + key)
    li.id = value;
    li.appendChild(liText)
    ul.appendChild(li);
  })

  
  const insertarCiudad = document.querySelector('#ciudad');
  const insertarHabitantes = document.querySelector('#habitantes')
  const enviar = document.querySelector('#enviar')

  const deleteCiudad = document.querySelector("#delete-ciudad")
  const eliminar = document.querySelector("#eliminar")

  const buscarMasHabitantes = document.querySelector("#buscar-mas-habitantes")
  const buscarMenosHabitantes = document.querySelector("#buscar-menos-habitantes")




  enviar.addEventListener("click", (e) => {

    if(insertarCiudad.value == "" || insertarHabitantes.value == ""  || mapa.has(insertarCiudad.value) ){

      alert("No has escrito nada o esa ciudad ya existe..")

    }else {
      const li = document.createElement("li");
      li.id = insertarCiudad.value;
      const liText = document.createTextNode("Ciudad : " + insertarCiudad.value + "; Habitantes: " + insertarHabitantes.value)
      li.appendChild(liText)
      ul.appendChild(li);
      mapa.set(insertarCiudad.value , Number(insertarHabitantes.value))
      for (const [clave, valor] of mapa) {
        console.log(clave, valor);
      }
      numeroCiudades++;
      h1NumeroCiudades.innerHTML = "Numero de ciudades: " + numeroCiudades
      insertarCiudad.value = "";
      insertarHabitantes.value= "";

    }

    

  })

  eliminar.addEventListener("click", (e) => {
    if(mapa.has(deleteCiudad.value)){
      console.log(deleteCiudad.value);
      const liremove = document.querySelector('#' + deleteCiudad.value);
      console.log(liremove)
      liremove.remove();
      mapa.delete(deleteCiudad.value)
      for (const [clave, valor] of mapa) {
        console.log(clave, valor);
      }
      numeroCiudades--;
      h1NumeroCiudades.innerHTML = "Numero de ciudades: " + numeroCiudades
  
      deleteCiudad.value = "";

    }else {
      alert("Esa ciudad no existe en nuestra base de datos")
      deleteCiudad.value = "";

    }
 
  })

  buscarMasHabitantes.addEventListener("click", (e) => {

    const ciudadMasHabitantes = MasHabitantes();

    const liMax = document.querySelector("#" +ciudadMasHabitantes);

    liMax.style.color = "red"

  })

  buscarMenosHabitantes.addEventListener("click", (e) => {

    const ciudadMenosHabitantes = MenosHabitantes();

    const liMax = document.querySelector("#" +ciudadMenosHabitantes);

    liMax.style.color = "green"

  })
