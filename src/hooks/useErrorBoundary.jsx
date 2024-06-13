import { useState, useEffect } from 'react';

const useErrorBoundary = () => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const handleError = (error, errorInfo) => {
            console.error('ErrorBoundary:', error, errorInfo);
            setHasError(true);
        }

        const errorBoundary = (error) => {
            console.error('Error:', error);
            setHasError(true);
        }

        window.addEventListener('error', handleError);
        window.addEventListener('unhandledrejection', errorBoundary);

        return () => {
            window.removeEventListener('error', handleError);
            window.removeEventListener('unhandledrejection', errorBoundary);
        }
    }
        , []);

    return hasError;
}

export default useErrorBoundary;