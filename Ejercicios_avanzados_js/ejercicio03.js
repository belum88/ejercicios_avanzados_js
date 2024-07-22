const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Santiago",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Laura",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];
  
  function favoriteSounds(userList) {
      const favCount = {};
      for (let user of userList) {
        for (let sound in user["favoritesSounds"]) {
          //Revisando la documentación tenemos el método hasOwnProperty, que nos permite buscar
          //si una key coincide con otra, de esta manera y volviendo a reutilizar la mecánica de usar
          //las keys irrepetibles de un objeto podemos filtrar y hacer un simple contador
          if (!favCount.hasOwnProperty(sound)) {
            favCount[sound] = 1;
          } else {
            favCount[sound]++;
          }
        }
      }
      return favCount;
    }
  
  console.log(favoriteSounds(users));