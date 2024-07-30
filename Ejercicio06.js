const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];
  
  function swap(array, index_1, index_2) {
    [array[index_1], array[index_2]] = [array[index_2], array[index_1]];
    return array;
  }
  
  console.log(swap(fantasticFour, 2, 3)); 
  