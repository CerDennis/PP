import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const App: React.FC = () => {
	return (
		<ErrorBoundary fallback={<div>Something went wrong</div>}>
			<p>startup</p>
		</ErrorBoundary>
	);
};

export default App;
