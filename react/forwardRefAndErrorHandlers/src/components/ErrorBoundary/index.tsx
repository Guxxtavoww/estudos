import React from 'react';

interface iErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: string | JSX.Element;
  onError?: (
    error?: Error,
    errorInfo?: React.ErrorInfo
  ) => void | Promise<void>;
  logError?: boolean;
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
    this.setState({ hasError: true });
    this.props.onError && this.props.onError(error, errorInfo);
    if (this.props.logError) {
      console.error({ errorBoundaryError: { error, errorInfo } });
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
