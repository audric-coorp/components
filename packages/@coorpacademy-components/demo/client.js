import get from 'lodash/fp/get';
import {createHistory, useBasename} from 'history';
import * as treant from '@coorpacademy/treantjs-core';
import * as Virtualdom from '@coorpacademy/treantjs-engine-virtual-dom';
import * as React from '@coorpacademy/treantjs-engine-react';
import * as Snabbdom from '@coorpacademy/treantjs-engine-snabbdom';
import createTranslate from '@coorpacademy/translate';
import en from '../locales/en/global';
import fr from '../locales/fr/global';
import createApp from './app';
import {components, fixtures} from './components';
import skin from './assets/skin';

let _createApp = createApp;
let _components = components;
let _fixtures = fixtures;

const locales = {en, fr};
const translate = createTranslate(locales.fr);

const history = useBasename(createHistory)({
  basename: `/${window.engine}`
});

const options = {
  history,
  skin,
  translate
};

const engines = {
  Virtualdom,
  React,
  Snabbdom
};

const engine = get(window.engine, engines);
const update = engine.render(document.getElementById('app'));

let App = _createApp(treant, options);
update(App({
  components: _components,
  fixtures: _fixtures,
  location: history.getCurrentLocation()
}));

history.listen(location => {
  update(App({
    components: _components,
    fixtures: _fixtures,
    location
  }));
});

if (module.hot) {
  module.hot.accept('./app.js', () => {
    _createApp = require('./app').default;
    App = _createApp(treant, options);
    update(App({
      components: _components,
      fixtures: _fixtures,
      location: history.getCurrentLocation()
    }));
  });
  module.hot.accept('./components.js', () => {
    _components = require('./components').components;
    _fixtures = require('./components').fixtures;
    update(App({
      components: _components,
      fixtures: _fixtures,
      location: history.getCurrentLocation()
    }));
  });
}
