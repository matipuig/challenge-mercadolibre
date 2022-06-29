/**
 * Contains the different types necessary to use React with typescript.
 */
import React, { PropsWithChildren, ReactElement as Element } from 'react';

export type ComponentChildren = React.ReactNode;
export type ReactElement = Element;
export type FunctionalComponent<P = unknown> = (props: P) => ReactElement | null;
export type FunctionalComponentWithChildren<P = unknown> = FunctionalComponent<
  PropsWithChildren<P>
>;
