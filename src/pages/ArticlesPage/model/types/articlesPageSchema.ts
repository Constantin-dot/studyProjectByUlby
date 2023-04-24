import { EntityState } from '@reduxjs/toolkit';
import { ArticleListViewVariantEnum, ArticleSortFieldEnum, IArticle } from 'entities/Article';
import { SortOrderType } from 'shared/types';

export interface IArticlesPageSchema extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;
  view: ArticleListViewVariantEnum;
  order: SortOrderType;
  sort: ArticleSortFieldEnum,
  search: string,
  page: number;
  limit: number;
  hasMore: boolean;
  _inited?: boolean;
}
