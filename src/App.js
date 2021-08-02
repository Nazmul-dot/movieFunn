import './App.css';
import Header from './components/header/Header';
import MainNav from './components/MainNav';
import { makeStyles } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom';
import Tanding from './pages/tanding/Tanding';
import Movie from './pages/movie/Movie';
import Tv from './pages/tv/Tv';
import Search from './pages/search/Search';
const useStyle = makeStyles((theme) => ({
  app: {
    marginTop: 53,
    [theme.breakpoints.up('md')]: {
      marginTop: 70
    },
    minHeight: '100vh',
    backgroundColor: '#39445a',
  }
}))
function App() {
  const classes = useStyle()
  return (
    <>
      <Header />
      <div className={classes.app}>
        <Switch>
          <Route exact path='/'>
            <Tanding />
          </Route>
          <Route exact path='/movie'>
            <Movie />
          </Route>
          <Route exact path='/tv'>
            <Tv />
          </Route>
          <Route exact path='/search'>
            <Search />
          </Route>
        </Switch>
      </div>
      <MainNav />
    </>
  );
}

export default App;
