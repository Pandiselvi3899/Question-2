import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';

const CORRECTIONS = {
  'realy': 'really',
  'wierd': 'weird',
  'Iyaloo': 'Nyoxa',
  'Fanual': 'Oly-Bix'

};

ReactDOM.render(<App corrections={CORRECTIONS} />, document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
     defineCustomElements(window);
});
