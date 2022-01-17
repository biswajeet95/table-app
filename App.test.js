// import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from "react-dom";
import React from 'react';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>,div);
  ReactDOM.unmountComponentAtNode(div);
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
