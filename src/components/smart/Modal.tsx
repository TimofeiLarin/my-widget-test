import { FC } from 'react';
import { useForm } from 'react-hook-form';

import useAppDispatch from '../../hooks/useAppDispatch';

import IArticle from '../../models/IArticle';
import IForm from '../../models/IForm';
import { articlesSlice } from '../../store/slice/articlesSlice';

interface IModalProps {
  setActive: (active: boolean) => void;
  data: IArticle;
}

const Modal: FC<IModalProps> = ({ setActive, data }) => {
  const { id, title, body } = data;

  const dispatch = useAppDispatch();

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

  return (
    <div className="modal" onClick={() => setActive(false)}>
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
              defaultValue={title}
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
              defaultValue={body}
            />
            {errors?.body && (
              <p className="error">{errors?.body?.message || 'Error!'}</p>
            )}
          </label>
          <button className="button button__create">Изменить</button>
        </form>
        <button
          className="button button__cancel"
          onClick={() => setActive(false)}
        >
          Отменить
        </button>
      </div>
    </div>
  );
};

export default Modal;
