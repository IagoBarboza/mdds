import React from 'react';
import { Preview } from '@storybook/react';
import { MddsProvider } from '../src/MddsProvider';

const preview: Preview = {
  decorators: [
    (Story) => (
      <MddsProvider>
        <Story />
      </MddsProvider>
    ),
  ],
};

export default preview;
