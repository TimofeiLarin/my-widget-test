import { FC, memo, useState } from 'react';

import useAppDispatch from '../../hooks/useAppDispatch';
import IArticle from '../../models/IArticle';
import { articlesSlice } from '../../store/slice/articlesSlice';
import SvgSelector from '../helper/SvgSelector';

import Modal from './Modal';

const ArticleCard: FC<IArticle> = memo((props) => {
  const { id, title, body } = props;
  const dispatch = useAppDispatch();

  const deleteArticle = () => {
    dispatch(articlesSlice.actions.deleteArticle(id));
  };

  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="articleCard">
      <h2 className="articleCard__name">{title}</h2>
      <p className="articleCard__description">{body}</p>
      <div className="articleCard__buttons">
        <button
          className="button button__card"
          onClick={() => setModalActive(true)}
        >
          <SvgSelector name="pencil" />
        </button>
        <button className="button button__card" onClick={deleteArticle}>
          <SvgSelector name="delete" />
        </button>
      </div>
      {modalActive && (
        <Modal data={props} setActive={setModalActive} />
      )}
    </div>
  );
});

export default ArticleCard;
