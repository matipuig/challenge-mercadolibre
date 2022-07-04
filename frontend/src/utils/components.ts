/**
 * Has components utilities.
 */

import { PUBLIC_CONFIG } from '~/config/public';

const { BASE_URL } = PUBLIC_CONFIG;

const getAppSubPath = (): string => {
  const url = new URL(BASE_URL);
  return url.pathname;
};

/**
 * Returns the URL for the content in the public dir.
 * NOTE: Because next doesn't like running in subpaths...
 * @param url URL of the public content.
 */
export const getURLForPublicContent = (url: string): string => {
  const appsubPath = getAppSubPath();
  if (appsubPath.endsWith('/') && url.startsWith('/')) {
    const cleanedUrl = url.replace('/', '');
    return `${appsubPath}${cleanedUrl}`;
  }
  if (!appsubPath.endsWith('/') && !url.startsWith('/')) {
    return `${appsubPath}/${url}`;
  }
  return `${appsubPath}${url}`;
};
