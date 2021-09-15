import React from 'react';
import { styled, keyframes } from '@stitches/react';
import { violet, mauve } from '@radix-ui/colors';
import { FiChevronDown } from 'react-icons/fi';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
  borderRadius: 6,
  width: '100%',
  maxWidth: 800,
  backgroundColor: '$gray6',
  bs: 'bla',
});

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 2px ${mauve.mauve12}`,
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  margin: 0,
  display: 'flex',
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  padding: '16px 20px',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '$1',
  lineHeight: 1,
  color: violet.violet11,
  backgroundColor: 'white',
  boxShadow: `0 1px 0 ${mauve.mauve6}`,
  '&:hover': { backgroundColor: mauve.mauve2 },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  fontSize: 15,
  color: mauve.mauve11,
  backgroundColor: mauve.mauve2,

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled('div', {
  padding: '15px 20px',
});

const StyledChevron = styled(FiChevronDown, {
  color: violet.violet10,
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});

const AccordionTrigger = React.forwardRef<any, any>(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  ),
);

const AccordionContent = React.forwardRef<any, any>(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  ),
);

export interface AccordionProps {
  data: {
    value: string;
    trigger: string;
    content: string;
  }[];
  type?: 'single';
  defaultValue: string;
}

export const Accordion = ({
  data,
  defaultValue,
  type = 'single',
}: AccordionProps) => (
  <StyledAccordion type={type} defaultValue={defaultValue}>
    {data.map((item) => (
      <StyledItem value={item.value} key={item.value}>
        <AccordionTrigger>{item.trigger}</AccordionTrigger>
        <AccordionContent>{item.content}</AccordionContent>
      </StyledItem>
    ))}
  </StyledAccordion>
);

export default Accordion;
