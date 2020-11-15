import './App.css';
import Main from './components/Main.js/Main';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Pages/login/Login';
import CommandesPages from './components/Pages/Commandes/Commandes';
import Inventaire from './components/Pages/Inventaires/Inventaire';
import Nav from './components/Navigation/Nav';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import { ArticlesProvider } from './context/ArticlesContext';
import { CommandesProvider } from './context/CommandesContext';
import Mail from './components/Pages/Mails/Mail';
import { MailProvider } from './context/MailContext';

function App() {
  return (
    <CommandesProvider>
      <ArticlesProvider>
        <MailProvider>
        <div className="App">
          <div className="mainContainer">
            <Nav />
            <Route render={({ location }) => (
              <Switch location={location}>
                <Route exact path='/' render={() => (<Login />)} />
                <Route path='/dashboard' render={({ match: { url } }) => (
                  <>
                    <Route path={`${url}/`} component={Dashboard} exact />
                    <Route path={`${url}/commandes`} component={CommandesPages} />
                    <Route path={`${url}/mail`} component={Mail} />
                    <Route path={`${url}/inventaire`} component={Inventaire} />
                  </>
                )} />
              </Switch>
            )} />
          </div>
        </div>
        </MailProvider>
      </ArticlesProvider>
    </CommandesProvider>
  );
}

export default App;
