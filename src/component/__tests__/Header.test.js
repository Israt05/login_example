import { render, screen } from '@testing-library/react';
import App from '../../App';
import Header from '../Header'

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Example Header/i);
  expect(linkElement).toBeInTheDocument();
});
