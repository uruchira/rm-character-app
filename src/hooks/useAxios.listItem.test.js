import { renderHook } from '@testing-library/react-hooks';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import useAxios from './useAxios';

const server = setupServer(
  rest.get('/1', (_, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        name: 'Rick Sanchez'
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should load a character details correctly', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAxios(1));

  expect(result.current[0]).toBeTruthy();
  expect(result.current[2]).toEqual(null);

  await waitForNextUpdate();

  expect(result.current[0]).toBeFalsy();
  expect(result.current[2]).toEqual({
    id: 1,
    name: 'Rick Sanchez'
  });
});
