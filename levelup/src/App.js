import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [loaded, setLoaded] = useState(false);
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({top:0, behavior: 'smooth'})
  }, [])

  useEffect(() => {
    (async() => {
      await dispatch(sessionActions.authenticate()).then(() => setLoaded(true))
    })();
  }, [dispatch, loaded]);

  if (!user) {
    return (
      <BrowserRouter>
        <h1>Not loaded</h1>
      </BrowserRouter>
    )
  }


  return loaded && (
    <BrowserRouter>
      <h1>Loaded</h1>
    </BrowserRouter>
  );
}

export default App;
