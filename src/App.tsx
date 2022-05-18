import React, { useEffect } from 'react';

import Header from './components/simple/Header';
import Form from './components/smart/Form';
import useAppDispatch from './hooks/useAppDispatch';
import useAppSelector from './hooks/useAppSelector';
import fetchArticles from './store/action/fetchArticles';

import './styles/app.scss';

function App() {
  const dispatch = useAppDispatch();
  const { articles, isLoading, error } = useAppSelector(
    (state) => state.articlesReducer
  );

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Form />
        {isLoading && <h1>Loading...</h1>}
        {error && error}
        {JSON.stringify(articles)}
      </div>
    </div>
  );
}

export default App;
