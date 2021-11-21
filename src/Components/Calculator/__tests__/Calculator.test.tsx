import '@testing-library/jest-dom';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from '@testing-library/react';
import Calculator from '../Calculator';
import nock from 'nock';
import App from 'App';
const setup = () => {
  render(<Calculator />);
};

const url = '/calculator/calculate?calculation=';
const host = 'http://localhost:9000';

describe('<Calculator />', () => {
  it('displays the equation when you type', () => {
    setup();
    fireEvent.click(screen.getByRole('button', { name: '4' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    expect(screen.getByText(/4\+/i)).toBeVisible();
  });

  it('displays the result in display and in memory when you enter an equation and press equal', async () => {
    const equation = '4%2B10';
    //mock backend call
    const fetchNock = nock(host)
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
      .get(`${url}${equation}`)
      .reply(200, '14');

    setup();
    fireEvent.click(screen.getByRole('button', { name: '4' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    const resultsDisplay = screen.getByTestId('resultDisplay');
    const memoryContainer = screen.getByTestId('memoryContainer');
    expect(await within(resultsDisplay).findByText('14')).toBeVisible();
    expect(await within(memoryContainer).findByText('14')).toBeVisible();
  });

  //TODO fix error test
  it.skip('returns error toast when incorrect equation typed', async () => {
    const equation = '%2F%2F';
    const errorMessage =
      "Invalid number of operands available for '/' operator";
    const fetchNock = nock(host)
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
      .get(`${url}${equation}`)
      .reply(406, errorMessage);

    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    fireEvent.click(screen.getByRole('button', { name: /÷/i }));
    fireEvent.click(screen.getByRole('button', { name: /÷/i }));

    expect(await screen.findByRole('alert')).toBeVisible();
  });
});
