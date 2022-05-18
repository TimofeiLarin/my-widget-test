import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import uniqid from 'uniqid';

import useAppDispatch from '../../hooks/useAppDispatch';
import IForm from '../../models/IForm';
import { articlesSlice } from '../../store/slice/articlesSlice';

const Form: FC = memo(() => {
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IForm>({ mode: 'onChange' });

  const onSubmit = (data: IForm) => {
    const { title, body } = data;
    dispatch(
      articlesSlice.actions.addArticle({
        id: uniqid(),
        title: title,
        body: body,
      })
    );
    reset();
  };

  return (
    <div className="form">
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
            {...register('body', { required: 'Поле обязательно к заполнению' })}
            rows={5}
          />
          {errors?.body && (
            <p className="error">{errors?.body?.message || 'Error!'}</p>
          )}
        </label>
        <button className="button button__create">Создать</button>
      </form>
    </div>
  );
});

export default Form;
