
export default class MovieShopService {

  imageBase = 'https://starwars-visualguide.com/assets/img/films/';

  //get Request from server
  getRequest = async () => {
    const resolve = await fetch('https://swapi.dev/api/films/');

    if (!resolve.ok) {
      throw new Error(`fetch request failed,
          for more info read ${resolve.status}`)
    }
    return await resolve.json();
  };


  getAllMovies = async () => {
    const resolve = await this.getRequest();
    return await resolve.results.map(this.transformMovies);
  };

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

  getMoviePoster = ({ id }) => {
    return `${this.imageBase}${id}.jpg`
  }

};



 // movies = fetch(this._movieBase)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))



// getmovies() {
  //   return [];
  // }