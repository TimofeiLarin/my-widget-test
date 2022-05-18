import React, { FC, FormEvent, useState } from 'react';
import uniqid from 'uniqid';

import useAppDispatch from '../../hooks/useAppDispatch';
import { articlesSlice } from '../../store/slice/articlesSlice';

const Form: FC = () => {
  const [nameArticle, setNameArticle] = useState('');
  const [descriptionArticle, setDescriptionArticle] = useState('');

  const dispatch = useAppDispatch();

  const createArticle = (): void => {
    dispatch(
      articlesSlice.actions.addArticle({
        id: Number(uniqid()),
        title: nameArticle,
        body: descriptionArticle,
      })
    );
  };
  return (
    <div className="form">
      <label>
        Заголовок
        <input
          className="form__input"
          type="text"
          placeholder="Укажите заголовок для статьи"
          value={nameArticle}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setNameArticle(e.currentTarget.value)
          }
        />
      </label>
      <label>
        Описание
        <textarea
          className="form__textarea"
          placeholder="Укажите описание"
          value={descriptionArticle}
          onChange={(e: FormEvent<HTMLTextAreaElement>) =>
            setDescriptionArticle(e.currentTarget.value)
          }
        />
        <button className="button button__create" onClick={createArticle}>
          Создать
        </button>
      </label>
    </div>
  );
};

export default Form;
