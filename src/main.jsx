import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MobileProvider } from './components/context/mobile.context.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
const main = ReactDOM.createRoot(root);

main.render(
  <StrictMode>
    <BrowserRouter>
      <MobileProvider>
        <App />
      </MobileProvider>
    </BrowserRouter>
  </StrictMode>,
)