import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import Core from '@test-nx/core/lib/core'
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    {/*<App />*/}
    <Core/>
  </StrictMode>
);
