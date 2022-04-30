import { renderHook } from '@testing-library/react-hooks';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import useAxios from './useAxios';

const server = setupServer(
  rest.get('/', (_, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'Rick Sanchez'
        },
        {
          id: 2,
          name: 'Morty Smith'
        }
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should load list of characters correctly', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAxios());

  expect(result.current[0]).toBeTruthy();
  expect(result.current[2]).toEqual(null);

  await waitForNextUpdate();

  expect(result.current[0]).toBeFalsy();
  expect(result.current[2]).toEqual([
    {
      id: 1,
      name: 'Rick Sanchez'
    },
    {
      id: 2,
      name: 'Morty Smith'
    }
  ]);
});
