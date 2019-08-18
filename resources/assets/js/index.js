require('materialize-css').AutoInit();

// Plasma
import Plasma from '@plasma-js/plasma';
import { Register } from '@plasma-js/plasma';

import Form from './components/defaultForm';

const register = new Register();
register.addComponent('form1', Form);

window.addEventListener('load', () => {
  const root = document.getElementById('app');
  const app = new Plasma(root, register);
});