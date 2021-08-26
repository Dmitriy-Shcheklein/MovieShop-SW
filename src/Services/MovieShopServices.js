
export default class MovieShopService {

  moviesBase = 'https://swapi.dev/api/films/'

  figurineBase = 'https://swapi.dev/api/people/'

  sendOrderInfo = async (outputData) => {

    const url = 'https://httpbin.org/post';

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(outputData),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (!response.ok) {
      throw new Error(`fetch request failed,
          for more info read ${response.status}`)
    }
    const result = await response.json();
    return await result.json;
  }

  //get Request from server
  getRequest = async (url) => {
    const resolve = await fetch(url);

    if (!resolve.ok) {
      throw new Error(`fetch request failed,
          for more info read ${resolve.status}`)
    }
    return await resolve.json();
  };

  getAllMovies = async () => {
    const resolve = await this.getRequest(this.moviesBase);
    return await resolve.results.map(this.transformMovies);
  };

  getAllFigurines = async () => {
    const resolve = await this.getRequest(this.figurineBase);
    return await resolve.results.map(this.transformFigurine);
  }

  //get ID number from URL
  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  //get the object we need
  transformMovies = (movie) => {
    return {
      id: this._extractId(movie),
      title: movie.title,
      releaseDate: movie.release_date,
      director: movie.director,
      episodeNumber: movie.episode_id,
      price: 30,
    }
  }

  // add 100 to id, so that they do not
  //  coincide for different groups of goods
  transformFigurine = (figurine) => {

    return {
      id: Number(this._extractId(figurine)) + 100,
      title: figurine.name,
      height: figurine.height,
      mass: figurine.mass,
      hairColor: figurine.hair_color,
      skinColor: figurine.skin_color,
      EyeColor: figurine.eye_color,
      gender: figurine.gender,
      price: 500,
    }
  }



};


// fetchDataOutput = async (outputData) => {

//   const url = 'https://httpbin.org/post';

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(outputData),
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     });
//     const json = await response.json();
//     console.log('Успех:', JSON.stringify(json));
//   } catch (error) {
//     console.error('Ошибка:', error);
//   }
// }