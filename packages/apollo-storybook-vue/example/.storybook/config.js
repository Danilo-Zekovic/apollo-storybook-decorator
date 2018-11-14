import Vue from 'vue';
import { configure, addDecorator } from '@storybook/vue'; // eslint-disable
import apolloStorybookDecorator from '../../src';
import typeDefs from '../schema/typeDefinitions';
import mocks from '../schema/mocks';

addDecorator(
  apolloStorybookDecorator({
    typeDefs,
    mocks,
    Vue,
  })
);

function loadStories() {
  require('../stories/index.js'); // eslint-disable
}

configure(loadStories, module);
