import ReactDOM from 'react-dom/client';
import ErrorBoundary from './ErrorBoundary';

import App from './App.jsx';
import './index.css';
import './components/Components.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <App/>
  </ErrorBoundary>
);
