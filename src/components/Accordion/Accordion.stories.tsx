import React from 'react';
import { Story, Meta } from '@storybook/react';
import Accordion, { AccordionProps } from '@components/Accordion/Accordion';

export default {
  component: Accordion,
  title: 'Components/Accordion',
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: 'value-1',
  data: [
    {
      content: 'Testi Test',
      trigger: 'This is a test',
      value: 'value-1',
    },
    {
      content: 'Testi Test',
      trigger: 'Another test',
      value: 'value-2',
    },
    {
      content: 'Testi Test',
      trigger: 'Another test',
      value: 'value-3',
    },
    {
      content: 'Testi Test',
      trigger: 'Another test',
      value: 'value-4',
    },
  ],
};
