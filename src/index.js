import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

