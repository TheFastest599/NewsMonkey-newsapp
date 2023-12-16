import './App.css';

// React class based component
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0);
  const pageSize = 12;

  const apiKey = process.env.REACT_APP_NEWS_API3; // Place your api key from https://newsapi.org

  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <LoadingBar color="#0dcaf0" height={3} progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="home"
                pageSize={pageSize}
                country={'in'}
                category={'general'}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country={'in'}
                category={'business'}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country={'in'}
                category={'entertainment'}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country={'in'}
                category={'general'}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country={'in'}
                category={'health'}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country={'in'}
                category={'science'}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country={'in'}
                category={'sports'}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country={'in'}
                category={'technology'}
              ></News>
            }
          ></Route>
          <Route exact path="/about" element={<About></About>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
