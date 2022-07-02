/**
 * Contains the unit tests for BreadCrumbs.
 */

import { uniq } from 'lodash';
import { resources, getAvailableLanguages } from '../../src/i18n';
import { getObjectPathsAsArray } from '../utils';

const availableLanguages = Object.keys(resources);
const languagePaths: Record<string, string[]> = {};
availableLanguages.forEach((language) => {
  const thisLanguage = language as keyof typeof resources;
  const languageResources = resources[thisLanguage] as unknown;
  languagePaths[thisLanguage] = getObjectPathsAsArray(languageResources);
});

describe('i18n', () => {
  it('has any language.', () => {
    expect(availableLanguages.length).toBeGreaterThan(0);
  });

  it('can see all availele languages.', () => {
    const resourcesLanguages = Object.keys(resources);
    const i18nAvailableLanguages = getAvailableLanguages();
    expect(resourcesLanguages).toEqual(i18nAvailableLanguages);
  });

  it('has any content.', () => {
    const [firstLanguage] = availableLanguages;
    const contentsCount = languagePaths[firstLanguage].length;
    expect(contentsCount).toBeGreaterThan(0);
  });

  it('has same content count in all languages.', () => {
    const pathsCount = availableLanguages.map((e) => languagePaths[e].length);
    const differentCounts = uniq(pathsCount);
    expect(differentCounts.length).toEqual(1);
  });

  it('has the same paths for all languages.', () => {
    if (availableLanguages.length < 2) {
      expect(1).toEqual(1);
    }
    const [firstLanguage] = availableLanguages;
    const restLanguages = availableLanguages.filter((e) => e !== firstLanguage);
    restLanguages.forEach((secondLanguage) => {
      const descriptor = `${firstLanguage} - ${secondLanguage}`;
      const firstLanguagePaths = languagePaths[firstLanguage].map((e) => `${descriptor}: ${e}`);
      const secondLanguagePaths = languagePaths[secondLanguage].map((e) => `${descriptor}: ${e}`);
      firstLanguagePaths.forEach((path, index) => {
        expect(path).toEqual(secondLanguagePaths[index]);
      });
    });
  });
});
