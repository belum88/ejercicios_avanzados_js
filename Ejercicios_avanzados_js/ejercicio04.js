const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];
  
  //1.
  function findArrayIndex(array, text) {
    let index = null;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === text) {
        index = i;
        
        break;
      }
    }
    if (index === null) {
      return null;
    }
    return index;
  }
  
  //2.
  function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index === null) {
      return "No se ha encontrado el índice";
    }
    array.splice(index, 1);
  
    return array;
  }
  
  console.log(
    "Esta es la lista con tu elemento eliminado: \n",
    removeItem(mainCharacters, "Rey")
  );