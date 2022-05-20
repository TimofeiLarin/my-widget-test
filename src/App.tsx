/* eslint-disable react-hooks/exhaustive-deps */

import { FC, useEffect, useState } from 'react';

import Header from './components/simple/Header';
import ArticleCard from './components/smart/ArticleCard';
import Form from './components/smart/Form';
import Modal from './components/smart/Modal';
import useAppDispatch from './hooks/useAppDispatch';
import useAppSelector from './hooks/useAppSelector';
import useScrollUp from './hooks/useScrollUp';
import useVisibleScroll from './hooks/useVisibleScroll';
import fetchArticles from './store/action/fetchArticles';
import {
  getArticles,
  getError,
  getIsLoading,
} from './store/selectors/articlesSelector';

import './styles/app.scss';

const App: FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [idModal, setIdModal] = useState<string | number>('');

  const dispatch = useAppDispatch();

  const articles = useAppSelector((state) => getArticles(state));
  const isLoading = useAppSelector((state) => getIsLoading(state));
  const error = useAppSelector((state) => getError(state));

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  const [scrollUp, handleUp] = useScrollUp(1000);
  useVisibleScroll(modalActive);
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Form />
        {isLoading && <h2 className="loading">Loading...</h2>}
        {error && <h2 className="error">{error}</h2>}
        {articles.map(({ id, title, body }) => (
          <ArticleCard
            key={id}
            id={id}
            title={title}
            body={body}
            setModalActive={setModalActive}
            setIdModal={setIdModal}
          />
        ))}
        {modalActive && <Modal id={idModal} setActive={setModalActive} />}
      </div>
      {scrollUp && (
        <button className="button button__up" onClick={handleUp}>
          ВВЕРХ
        </button>
      )}
    </div>
  );
};

export default App;
