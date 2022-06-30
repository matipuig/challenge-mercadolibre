/**
 * This component works as error boundary
 */

import { PropsWithChildren, Component, ReactNode } from 'react';

import { t } from 'i18next';
import { noop } from 'lodash';
import swal from 'sweetalert2';

import { getAvailableI18nTexts } from '~/i18n';

interface ErrorBoundaryState {
  hasError: boolean;
  [k: string]: unknown;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  [k: string]: unknown;
}

const texts = getAvailableI18nTexts();
const { text, title } = texts.components.errorBoundary;

export class ErrorBoundary extends Component {
  constructor(props: PropsWithChildren<unknown>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    noop(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    /* eslint-disable no-console */
    console.log({ error, errorInfo });
  }

  render() {
    const { hasError } = this.state as ErrorBoundaryState;
    const { children } = this.props as ErrorBoundaryProps;
    if (hasError) {
      swal.fire({
        icon: 'error',
        title: t(title),
        text: t(text),
      });
      return children;
    }
    return children;
  }
}

export default ErrorBoundary;
