import { memo } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line constantin-dot-plugin/layer-imports-checker
import { BugButton } from '@/app/providers/ErrorBoundary';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <Page>
      <VStack align="start">
        <HStack justify="between" max>
          {t('mainPageContent')}
          <BugButton />
        </HStack>
      </VStack>
    </Page>
  );
});

export default MainPage;
