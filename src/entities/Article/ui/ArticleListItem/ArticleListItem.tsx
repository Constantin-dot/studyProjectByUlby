import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonVariantEnum } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import {
  ArticleBlockTypeEnum,
  ArticleListViewVariantEnum,
} from '../../model/consts/consts';
import type {
  IArticle,
  IArticleTextBlock,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { getRouteArticlesDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

type PropsType = {
  className?: string,
  article: IArticle,
  view: ArticleListViewVariantEnum,
  target?: HTMLAttributeAnchorTarget,
}

export const ArticleListItem = memo((props: PropsType) => {
  const {
    className,
    article,
    view,
    target,
  } = props;
  const { t } = useTranslation();
  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} className={cls.icon} />
    </>
  );

  if (view === ArticleListViewVariantEnum.LIST) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockTypeEnum.TEXT) as IArticleTextBlock;

    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar ?? ''} alt="author avatar" />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <AppImage
            fallback={<Skeleton width="100%" height={250} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          {
            textBlock && (
              <ArticleTextBlock block={textBlock} className={cls.textBlock} />
            )
          }
          <div className={cls.footer}>
            <AppLink target={target} to={getRouteArticlesDetails(article.id)}>
              <Button
                variant={ButtonVariantEnum.OUTLINE}
              >
                {t('readForward')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={getRouteArticlesDetails(article.id)}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <AppImage
            fallback={<Skeleton width={200} height={200} />}
            src={article.img}
            className={cls.img}
            alt={article.type.join(', ')}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text title={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
