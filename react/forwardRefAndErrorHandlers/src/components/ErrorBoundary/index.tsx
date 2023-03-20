import React from 'react';

interface iErrorBoundaryProps {
  children: React.ReactNode;
<<<<<<< HEAD
  fallback?: string | JSX.Element;
  onError?: (
    error?: Error,
    errorInfo?: React.ErrorInfo
  ) => void | Promise<void>;
  logError?: boolean;
=======
  fallback: string | JSX.Element;
  onError?: (cause?: Error) => void | Promise<void>;
>>>>>>> 8b6809e6273abae6a78eb3775bb0d048333831f9
}

interface iErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  iErrorBoundaryProps,
  iErrorBoundaryState
> {
  constructor(props: iErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.props.onError && this.props.onError(error, errorInfo);
    this.setState({ hasError: true });
    if (this.props.logError) {
      console.log({ errorBoundaryError: { error, errorInfo } });
    }
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallback ?? 'Error';
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
