import React from 'react';
import { render } from '@testing-library/react';
import HomePageList from './homePageList';
import "@testing-library/jest-dom/extend-expect";

test('renders list', () => {
  const { getByText } = render(<HomePageList />);
  const linkElement = getByText("Enter artist");
  expect(linkElement).toBeInTheDocument();
});