
export default class MovieShopService {

  moviesBase = 'https://swapi.dev/api/films/'

  figurineBase = 'https://swapi.dev/api/people/'


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

  transformFigurine = (figurine) => {
    return {
      id: this._extractId(figurine),
      name: figurine.name,
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