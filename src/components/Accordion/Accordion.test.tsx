import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe } from 'jest-axe';
import * as stories from './Accordion.stories';

const { Primary } = composeStories(stories);

describe('Primary State', () => {
  it('renders all accordions', () => {
    render(<Primary />);

    expect(screen.getAllByRole('button').length).toEqual(4);
  });

  it('should not have a11y violations', async () => {
    const { container } = render(<Primary />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});

describe('Edge Cases', () => {
  it('does not render if no image or empty images were given', () => {
    render(<Primary data={[]} defaultValue="default-1" />);

    expect(screen.queryAllByRole('button').length).toEqual(0);
  });
});
