import './App.css';
import Banner from './COMPONENTS/BANNER/Banner';
import NaveBar from './COMPONENTS/NAV_BAR/NaveBar';
import Rowposter from './COMPONENTS/RowPoster/Rowposter';
import { API_KEY, NOW_PLAYING, POPULAR, UPCOMING }from './COMPONENTS/TmdbGlobels/Tmdb'
function App() {
  return (
    <div className="App">
      <NaveBar/>
      <Banner/>
      <Rowposter title={'Upcoming'} apiurl={UPCOMING+API_KEY} />
      <Rowposter title={'Trending'} apiurl={NOW_PLAYING+API_KEY} isSmall />
      <Rowposter title={'Top rated series'} apiurl={POPULAR+API_KEY} isSmall />



    </div>
  );
}

export default App;
