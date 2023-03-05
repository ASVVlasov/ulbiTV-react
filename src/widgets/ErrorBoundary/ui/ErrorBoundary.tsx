import { Component, type ErrorInfo, type ReactNode } from 'react';

import { PageError } from 'shared/ui/PageError/PageError';

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  static getDerivedStateFromError(_error: Error): IErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <PageError />;
    }

    return this.props.children;
  }
}
