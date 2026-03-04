import * as React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsFromServer, setGoodsFromServer] = React.useState<Good[]>();

  const loadAllGoods = () => {
    getAll().then(setGoodsFromServer);
  };

  const loadFiveGoods = () => {
    get5First().then(setGoodsFromServer);
  };

  const handleLoadRed = () => {
    getRedGoods().then(setGoodsFromServer);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          loadAllGoods();
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          loadFiveGoods();
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          handleLoadRed();
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsFromServer || []} />
    </div>
  );
};
