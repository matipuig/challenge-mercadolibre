/**
 * Contains the list items component.
 */
import { ReactElement } from 'react';

import { Item } from '~/types/services/backend';

import styles from './index.module.scss';
import { ListItemsItem } from './ListItemsItem';

interface ListItemsProps {
  items: Item[];
}

export const ListItems = ({ items }: ListItemsProps): ReactElement => (
  <section className={styles.container}>
    {items.map((item) => (
      <ListItemsItem key={item.id} item={item} />
    ))}
  </section>
);
