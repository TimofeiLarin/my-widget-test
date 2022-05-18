import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import IArticle from '../../models/IArticle';

const fetchArticles = createAsyncThunk(
  'articles/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IArticle[]>(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить статьи.');
    }
  }
);

export default fetchArticles;