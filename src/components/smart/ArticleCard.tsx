import { FC, memo, useCallback } from 'react';

import useAppDispatch from '../../hooks/useAppDispatch';
import IArticle from '../../models/IArticle';
import { articlesSlice } from '../../store/slice/articlesSlice';

import edit from '../../assets/img/edit.svg';
import remove from '../../assets/img/remove.svg';

interface IPropsArticle extends IArticle {
  setModalActive: (active: boolean) => void;
  setIdModal: (id: string | number) => void;
}

const ArticleCard: FC<IPropsArticle> = memo(
  ({ id, title, body, setModalActive, setIdModal }) => {
    const dispatch = useAppDispatch();

    const deleteArticle = () => {
      dispatch(articlesSlice.actions.deleteArticle(id));
    };

    const clickOnChange = useCallback(() => {
      setIdModal(id);
      setModalActive(true);
    }, []);

    return (
      <div className="articleCard">
        <h2 className="articleCard__name">{title}</h2>
        <p className="articleCard__description">{body}</p>
        <div className="articleCard__buttons">
          <button className="button button__card" onClick={clickOnChange}>
            <img src={edit} width={20} alt="Edit" />
          </button>
          <button className="button button__card" onClick={deleteArticle}>
            <img src={remove} width={20} alt="Remove" />
          </button>
        </div>
      </div>
    );
  }
);

export default ArticleCard;
