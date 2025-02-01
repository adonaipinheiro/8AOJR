import axios from "axios";

export const moviesInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWNiOWUyZTU2NzZlNjgyMTBjZTMzOWRjOWZmYjVmZSIsIm5iZiI6MTY1NzU4OTM0NS4yNDYsInN1YiI6IjYyY2NjZTYxZjQ4ZTBkMDA0ZTY5MTliYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._P22wSVUQd5RZnHz0tSC2HgtTyo06BOZOTISkCJGRS8'
  }
})
