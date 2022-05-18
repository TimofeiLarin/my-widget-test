/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';

import Header from './components/simple/Header';
import ArticleCard from './components/smart/ArticleCard';
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
        {isLoading && <h2 className="loading">Loading...</h2>}
        {error && <h2 className="error">{error}</h2>}
        {articles.map(({ id, title, body }) => (
          <ArticleCard key={id} id={id} title={title} body={body} />
        ))}
      </div>
    </div>
  );
}

export default App;
