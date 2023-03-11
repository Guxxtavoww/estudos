import React from 'react';

interface iErrorBoundaryProps {
  children: React.ReactNode;
  fallback: string | JSX.Element;
}

class ErrorBoundary extends React.Component<iErrorBoundaryProps> {
  state: Readonly<{ hasError: boolean }> = { hasError: false };

  static getDerivedStateFromError(_error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log({
      error: {
        error,
        errorInfo,
      },
    });
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
