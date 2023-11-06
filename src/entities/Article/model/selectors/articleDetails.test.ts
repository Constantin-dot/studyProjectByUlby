import { IStateSchema } from '@/app/providers/StoreProvider';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './articleDetails';

describe('getArticleDetailsData.test', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'subtitle',
    };

    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        data,
      },
    };
    expect(getArticleDetailsData(state as IStateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {},
    };
    expect(getArticleDetailsData(state as IStateSchema)).toEqual(undefined);
  });

  test('should return isLoading', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as IStateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {},
    };
    expect(getArticleDetailsIsLoading(state as IStateSchema)).toEqual(false);
  });

  test('should return error', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(getArticleDetailsError(state as IStateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {},
    };
    expect(getArticleDetailsError(state as IStateSchema)).toEqual(undefined);
  });
});
