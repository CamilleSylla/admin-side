import './App.css';
import Main from './components/Main.js/Main';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Pages/login/Login';
import CommandesPages from './components/Pages/Commandes/Commandes';
import Inventaire from './components/Pages/Inventaires/Inventaire';
import Nav from './components/Navigation/Nav';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import { ArticlesProvider } from './context/ArticlesContext';

function App() {
  return (
    <ArticlesProvider>
    <div className="App">
      <div className="mainContainer">
            <Nav/>
            <Route render={({ location }) => (
            <Switch location={location}>
              <Route exact path='/' render={ () => (<Login/>)}/>
              <Route path='/dashboard' render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={Dashboard} exact />
                  <Route path={`${url}/commandes`} component={CommandesPages} />
                  <Route path={`${url}/inventaire`} component={Inventaire} />
                </>
              )} />
            </Switch>
      )} />
        </div>
    </div>
    </ArticlesProvider>
  );
}

export default App;
