
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Row from './Components/Row';
import requests from './Components/requests';



function App() {
  return (
    <div className="App">

     <Navbar />
     <Banner />
     <Row title="Netflix Originals"
     fetchUrl={requests.fetchNetflixOriginals}isLargeRow={true}
     />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horrer Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

     
    </div>
  );
}

export default App;
