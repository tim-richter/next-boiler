import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {
  AccordionContentProps,
  AccordionTriggerProps,
} from '@radix-ui/react-accordion';
import { FiChevronDown } from 'react-icons/fi';
import * as styles from './Accordion.css';

/* eslint-disable react/jsx-props-no-spreading */

const AccordionTrigger = ({ children, ...props }: AccordionTriggerProps) => (
  <AccordionPrimitive.Header className={styles.header}>
    <AccordionPrimitive.Trigger {...props} className={styles.trigger}>
      {children}
      <FiChevronDown aria-hidden className={styles.chevron} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

const AccordionContent = ({ children, ...props }: AccordionContentProps) => (
  <AccordionPrimitive.Content {...props} className={styles.content}>
    <div className={styles.contentText}>{children}</div>
  </AccordionPrimitive.Content>
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

const Accordion = ({ data, defaultValue, type = 'single' }: AccordionProps) => {
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
