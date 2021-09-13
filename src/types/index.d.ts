export type Children = React.ReactNode;

export type WithChildren<T = any> = T & { children?: Children };
