import { ReactNode, memo } from 'react';
import { ModsType, classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

type PropsType = {
  className?: string,
  children: ReactNode,
  isOpen?: boolean,
  onClose?: () => void,
};

export const Drawer = memo((props: PropsType) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;
  const { theme } = useTheme();

  const mods: ModsType = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme, 'app-drawer'])}>
        <Overlay onClick={onClose} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
