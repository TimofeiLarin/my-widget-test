import { FC, memo } from 'react';

import useAppDispatch from '../../hooks/useAppDispatch';

import IArticle from '../../models/IArticle';
import { articlesSlice } from '../../store/slice/articlesSlice';
import SvgSelector from '../helper/SvgSelector';

const ArticleCard: FC<IArticle> = memo(({ id, title, body }) => {
  const dispatch = useAppDispatch();

  const deleteArticle = () => {
    dispatch(articlesSlice.actions.deleteArticle(id));
  };

  return (
    <div className="articleCard">
      <h2 className="articleCard__name">{title}</h2>
      <p className="articleCard__description">{body}</p>
      <div className="articleCard__buttons">
        <button className="button button__card">
          <SvgSelector name="pencil" />
        </button>
        <button className="button button__card" onClick={deleteArticle} >
          <SvgSelector name="delete" />
        </button>
      </div>
    </div>
  );
});

export default ArticleCard;
