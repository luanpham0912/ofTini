import './App.css';
import { Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import home from './Main/home';
import Menu from './menu/menu';
import bake from './bake/bake';
import flower from './flower/flower';
import message from './message/message';
import Roll from './roll/Roll';
import End from './end/End';
import React, { Suspense, useEffect, useState } from 'react';
import Home from './Main/home';
import Bake from './bake/bake';
// const OtherComponent = React.lazy(() => import('./menu/menu'));


export const history = createBrowserHistory()
function App() {
  const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
      
        setPlaying(!playing);

    }

    useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
      [playing]
    );

    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      console.log("trong đây nè")
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));

      };
    }, []);

    return [playing, toggle];
  };
  const [playing, toggle] = useAudio('./img/1212.mp3');
  return (
    <Router history={history}>
      <Route exact path='/' render={(propsRoute) => {
        return <>

          <Home toggle={toggle} />
        </>
      }} />
      <Route exact path='/menu' render={(propsRoute) => {
        return <>
              <Menu/>
        </>
      }} />
      <Route exact path='/bake' render={(propsRoute) => {
        return <>

          <Bake toggle={toggle} playing={playing}/>
        </>
      }} />
      <Route exact path='/flower' component={flower} />
      <Route exact path='/message' component={message} />
      <Route exact path='/roll' component={Roll} />
      <Route exact path='/end' component={End} />






    </Router>
  )
}

export default App;
