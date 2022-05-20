import { FC, memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

import IForm from '../../models/IForm';
import { getArticles } from '../../store/selectors/articlesSelector';
import { articlesSlice } from '../../store/slice/articlesSlice';

interface IModalProps {
  id: string | number;
  setActive: (active: boolean) => void;
}

const Modal: FC<IModalProps> = memo(({ id, setActive }) => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => getArticles(state));
  const article = articles.find((item) => item.id === id);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForm>({ mode: 'onChange' });

  const onSubmit = (data: IForm) => {
    const { title, body } = data;
    dispatch(
      articlesSlice.actions.changeArticle({
        id: id,
        title: title,
        body: body,
      })
    );
    setActive(false);
  };

  const onClickClose = useCallback(() => setActive(false), []);

  return (
    <div className="modal" onClick={onClickClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <h2>Заголовок</h2>
            <input
              className="form__input"
              type="text"
              placeholder="Укажите заголовок для статьи"
              {...register('title', {
                required: 'Поле обязательно к заполнению',
              })}
              defaultValue={article?.title}
            />
            {errors?.title && (
              <p className="error">{errors?.title?.message || 'Error!'}</p>
            )}
          </label>
          <label>
            <p>Описание</p>
            <textarea
              className="form__textarea"
              placeholder="Укажите описание"
              {...register('body', {
                required: 'Поле обязательно к заполнению',
              })}
              rows={5}
              defaultValue={article?.body}
            />
            {errors?.body && (
              <p className="error">{errors?.body?.message || 'Error!'}</p>
            )}
          </label>
          <button className="button button__create">Изменить</button>
        </form>
        <button className="button button__cancel" onClick={onClickClose}>
          Отменить
        </button>
      </div>
    </div>
  );
});

export default Modal;
