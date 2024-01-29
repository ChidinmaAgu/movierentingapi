class Renting {
    constructor(title, genre, stock) {
     this.title = title;
     this.genre = genre;
     this.stock = stock;
    }
 
   
     rentMovie() {
       if(this.stock > 0) {
         this.stock--;
         console.log(`you have rented "${this.title}" Nwanne enjoy!`);
       } else {
         console.log(`${this.title} is out of stock`);
       };
     }
 
     
      returnMovie() {
        this.stock++;
        console.log(`Succesfully returned ${this.title}`);
      }
 
      
 }
 
   
   class  Rent {
     constructor() {
       this.movies = [];
     }
 
     
      newMovie(title, genre, stock) {
       const movie = new Renting(title, genre, stock);
       this.movies.push(movie);
      }
 
     
       rentFilm(title) {
         const movie = this.searchMovie(title);
 
         if(movie){
           movie.rentMovie();
         }else {
           console.log(`Movie: ${title}, not found sorry inugo!!`);
         }
       }
 
      
        returnFilm(title) {
          const movie = this.searchMovie(title);
 
          if (movie) {
           movie.returnMovie();
           console.log(`Succesfully Returned. confirm `);
          } else {
             console.log(`Movie ${title} not found`);
          }
        }
 
       
         searchMovie(title) {
          return this.movies.find((item) => item.title === title);
         }
 
        
           listFilm() {
             console.log(`Available Movies:`);
 
             this.movies.forEach((value) => {
               console.log(`${value.title}, ${value.genre}, Stock : ${value.stock}`);
             });
 
           }
  }
 
  
      const rental = new Rent();
 
      rental.newMovie("Fate", "Action", 7);
      rental.newMovie("3-idiots", "Comedy", 10);
      rental.newMovie("The-Witcher", "Action", 12);
     //rent and return the movies.
       rental.rentFilm("Fate");
       rental.rentFilm("3-idiots");
       rental.rentFilm("The-Witcher");
       //return a movie.
       rental.returnFilm("Fate");
       
        //List of all available movies 
          rental.listFilm();
 
 