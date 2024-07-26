const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];
  
  function swap(fantasticFour, index1, index2) {
    if (
      index1 < 0 ||
      index1 >= fantasticFour.length ||
      index2 < 0 ||
      index2 >= fantasticFour.length
    ) {
      return "Los índices están fuera del rango del fantasticFour";
    }
  
    const temp = fantasticFour[index1];
    fantasticFour[index1] = fantasticFour[index2];
    fantasticFour[index2] = temp;
  
    return fantasticFour;
  }
  
  console.log(swap(fantasticFour, 0, 1));