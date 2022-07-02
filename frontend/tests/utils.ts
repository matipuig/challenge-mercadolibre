/**
 * Contains some utils for testing.
 */

import { isObject } from 'lodash';

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
