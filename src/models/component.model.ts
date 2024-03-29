export type BaseProps = {
  className?: string;
  class?: string; // Fallback className
  classList?: string; // Fallback class
  children?: Children;
};

export type BaseState = {
  loaded: boolean;
};

export type Children = any; // TODO

export type CSS = Partial<CSSStyleDeclaration> & {
  [key: string]: Partial<CSSStyleDeclaration> | string;
};
