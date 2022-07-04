/* eslint-disable no-console */
/**
 * Contains some utils for testing.
 */

import { isObject, noop } from 'lodash';

import { PUBLIC_CONFIG } from '../src/config/public';
import { logger } from '../src/utils/logger';

export interface UseRouterParams {
  route?: string;
  pathname?: string;
  query?: Record<string, string>;
  asPath?: string;
  push?: jest.Mock<unknown>;
  prefetch?: jest.Mock<unknown>;
}

/**
 * Returns all the object subpaths as an array.
 * For example: ["root", "root.subobject", "root.subobject"]
 * @param possibleObject Object to get the subpaths from.
 * @param actualPath Actual  path of the object.
 * @returns
 */
export const getObjectPathsAsArray = (possibleObject: unknown, actualPath = ''): string[] => {
  if (!isObject(possibleObject)) {
    return [];
  }
  const object = possibleObject as Record<string, unknown>;
  const paths: string[] = [];
  Object.keys(object).forEach((key) => {
    const thisPath = actualPath === '' ? key : `${actualPath}.${key}`;
    paths.push(thisPath);
    const nestedPaths = getObjectPathsAsArray(object[key], thisPath);
    paths.push(...nestedPaths);
  });
  return paths;
};

/**
 * Returns the URL with the domain (/url -> https://www..../url).
 * @param urlWithoutBase Adds to the path the server.
 */
export const getURLWithBase = (urlWithoutBase: string): string =>
  `${PUBLIC_CONFIG.BASE_URL}${urlWithoutBase}`;

/**
 * Mocks the usage of next router.
 * @param props Props that useRouter requires.
 */
export const mockNextUseRouter = (props: UseRouterParams): void => {
  // eslint-disable-next-line global-require
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');
  useRouter.mockImplementation(() => props);
};

/**
 * Mocks the window location.
 */
export const mockWindowLocation = (): void => {
  const originalWindowLocation = window.location;
  delete (window as any).location as unknown;
  window.location = Object.defineProperties({} as any, {
    ...Object.getOwnPropertyDescriptors(originalWindowLocation),
    assign: {
      configurable: true,
      value: jest.fn(),
    },
  });
};

/**
 * Prevents the setImmeadiate error.
 * @param props Props that useRouter requires.
 */
export const preventSetImmediateError = (): void => {
  global.setImmediate =
    global.setImmediate ||
    ((fn: () => unknown, ...args: unknown[]) => global.setTimeout(fn, 0, ...args));
};

/**
 * Silences the logger.
 */
export const silenceLogger = (): void => {
  logger.setActive(false);
  console.log = noop;
  console.debug = noop;
  console.info = noop;
  console.table = noop;
  console.warn = noop;
};
