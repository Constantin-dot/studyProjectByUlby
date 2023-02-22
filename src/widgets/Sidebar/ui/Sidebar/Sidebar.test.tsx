import { fireEvent, screen } from '@testing-library/react';
import componentRender from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from 'widgets/Sidebar';

describe('custom sidebar component', () => {
  test('base component testing', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test on toggle sidebar', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
