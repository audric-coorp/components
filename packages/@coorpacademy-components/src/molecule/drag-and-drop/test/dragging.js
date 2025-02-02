import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Overlay} from '../overlay';
import Default from './fixtures/default';

import DragDrop from '..';

browserEnv();

configure({adapter: new Adapter()});

// For further information  about flushPromises
// Important: react-dropzone makes its drag'n'drop callbacks asynchronous to enable promise based getDataTransfer functions.
// In order to properly test this, you may want to utilize a helper function to run all promises like this:
// see : https://github.com/react-dropzone/react-dropzone/tree/v9.0.0
// This test is heavily inspired by this https://github.com/react-dropzone/react-dropzone/blob/v9.0.0/src/index.spec.js#L853

const flushPromises = wrapper =>
  new Promise(resolve =>
    global.setImmediate(() => {
      wrapper.update();
      resolve(wrapper);
    })
  );

const context = {
  skin: {
    common: {
      primary: '#FF7043'
    }
  }
};

test('should show the overlay when a file is dragged', async t => {
  const component = mount(<DragDrop {...Default} />, {context});
  component.simulate('dragEnter');
  const updatedDropzone = await flushPromises(component);
  t.true(updatedDropzone.exists(Overlay));
});
