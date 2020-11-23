  // Fase 1
  let name = "MIRKO";
  let arrNom = name.split("");

   for (let i = 0; i < arrNom.length; i++) {
      console.log(arrNom[i]);
  }

  // Fase 2
  let myNombre = "M1RKO";
  let myNombreArray = myNombre.split("");
  console.log(myNombreArray);
  
  console.log(`Partim del nom ${myNombre}`);
  const vocales = ["A", "E", "I", "O", "U"];
  const consonantes = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
  const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  for (let char of myNombreArray) {
      if (vocales.includes(char)) {
          console.log(`He trobat la VOCAL: ${char}`);
      } else if (consonantes.includes(char)) {
          console.log(`He trobat la CONSONANT: ${char}`);
      } else if (numeros.includes(char)) {
          console.log(`Els noms de persones no contenen el número: ${char}`);
      } else {
          console.log(`Character not recognized: ${char}`);
      } 
  };

  // Fase 3
  let miNombre = "MIRKO";
  let miNombreArray = miNombre.split("");
  let myMap = new Map();
  
  for (let char of miNombreArray) {
      let count = myMap.get(char);
      count = (count != null) ? (myMap.get(char) + 1) : 1;
      myMap.set(char, count); 
  }
  for (let [key, value] of myMap.entries() ) {
    console.log(key, value);
  };

  // Fase 4
  function JS_fase4() {
    const nombreArray = ["M", "I", "R", "K", "O"];
    const apellidoArray = ["Z", "E", "D", "D", "E"]
    let nombreCompleto = [];

    let i;
    const SPACE = " ";

    for (i = 0; i < nombreArray.length; i++) {
        nombreCompleto.push(nombreArray[i])
    }

    nombreCompleto.push(SPACE);


    for (i = 0; i < apellidoArray.length; i++) {
        nombreCompleto.push(apellidoArray[i])
    }

    console.log(nombreCompleto);
}

JS_fase4();

