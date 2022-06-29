/**
 * Gives all providers to the children.
 */

import { Fragment } from 'react';
import { getItems } from '~/state/hooks/searchResults';
import { ReactElement } from '~/types/react';

export const Test = (): ReactElement => {
  const items = getItems();
  return (
    <Fragment>
      {items.map((e, i) => (
        <div key={i}>{JSON.stringify(e)}</div>
      ))}
    </Fragment>
  );
};

export default Test;
