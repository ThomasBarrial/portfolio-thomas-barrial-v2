import { createContext } from 'react';

interface IIsLoaderContext {
  isLoader: boolean;
  toggleIsLoader?: () => void;
}

const defaultState = {
  isLoader: false,
};

const IsLoaderContext = createContext<IIsLoaderContext>(defaultState);

export default IsLoaderContext;
