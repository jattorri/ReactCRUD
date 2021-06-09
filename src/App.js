
import './App.css';
import Crud from './components/crud';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Crud} ></Route>
        <Route exact path="/crud" component={Crud} ></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
