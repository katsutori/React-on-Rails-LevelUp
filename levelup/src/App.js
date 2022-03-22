import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Import States
import * as sessionActions from './store/session';
import { getAllJobs } from './store/jobs';

function App() {
  const [loaded, setLoaded] = useState(false);
  const user = useSelector(state => state.session.user)
  const jobs = useSelector(state => state.jobState.entries)
  const dispatch = useDispatch();
  console.log('helllllllo',jobs)
  useEffect(() => {
    window.scrollTo({top:0, behavior: 'smooth'})
  }, [])

  useEffect(() => {
    (async() => {
      // await dispatch(sessionActions.authenticate()).then(() => setLoaded(true))
      await dispatch(getAllJobs())
    })();
  }, [dispatch, loaded]);

  if (!user) {
    return (
      <BrowserRouter>
        <>
          {jobs.map((job, idx) => (
            <h1 key={idx}>{job.title}</h1>
          ))}
        </>
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
