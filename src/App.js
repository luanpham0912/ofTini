import './App.css';
import {Route, Router} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import home from './Main/home';
import menu from './menu/menu';
import bake from './bake/bake';
import flower from './flower/flower';
import message from './message/message';
import Roll from './roll/Roll';
import End from './end/End';



export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
        <Route exact path='/' component={home} />
        <Route exact path='/menu' component={menu} />
        <Route exact path='/bake' component={bake} />
        <Route exact path='/flower' component={flower} />
        <Route exact path='/message' component={message} />
        <Route exact path='/roll' component={Roll} />
        <Route exact path='/end' component={End} />






    </Router>
  )
}

export default App;
