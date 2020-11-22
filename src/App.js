import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/alertState';
function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Alert alert={{ text: 'Test Alert', type: 'danger' }} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile/:name" component={Profile} />

          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>


  );
}

export default App;   
