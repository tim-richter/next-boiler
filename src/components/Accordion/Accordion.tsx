import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as styles from './Accordion.css';

const AccordionTrigger = React.forwardRef<any, any>(
  ({ children, ...props }, forwardedRef) => (
    <AccordionPrimitive.Header className={styles.header}>
      <AccordionPrimitive.Trigger
        {...props}
        ref={forwardedRef}
        className={styles.trigger}
      >
        {children}
        <FiChevronDown aria-hidden className={styles.chevron} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ),
);

const AccordionContent = React.forwardRef<any, any>(
  ({ children, ...props }, forwardedRef) => (
    <AccordionPrimitive.Content
      {...props}
      ref={forwardedRef}
      className={styles.content}
    >
      <div className={styles.contentText}>{children}</div>
    </AccordionPrimitive.Content>
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
}: AccordionProps) => {
  if (data.length === 0) return null;

  return (
    <AccordionPrimitive.Accordion
      type={type}
      defaultValue={defaultValue}
      className={styles.accordion}
    >
      {data.map((item) => (
        <AccordionPrimitive.Item
          value={item.value}
          key={item.value}
          className={styles.item}
        >
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Accordion>
  );
};

export default Accordion;
