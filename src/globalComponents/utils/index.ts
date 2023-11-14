import React, {
  createContext,
  createElement,
  createRef,
  ReactNode,
} from "react";
import { GlobalComponentContextProvider } from "../provider";
import { GlobalComponentContextType } from "../types";

export const createPortal = <T>(
  Component: React.FC<T>,
  displayName: string,
) => {
  const context = createContext<GlobalComponentContextType<T>>({} as any);

  const internalRef = createRef<GlobalComponentContextType<T>>();

  const show = (props: T, hidePrevComponentImmediate?: boolean) => {
    if (!internalRef.current) {
      return console.warn("global-components should be used with context");
    }

    internalRef.current.show(props, hidePrevComponentImmediate);
  };

  const hide = async () => {
    if (!internalRef.current) {
      return console.warn("global-components should be used with context");
    }

    await internalRef.current.hide();
  };

  return {
    show,
    hide,
    Portal: ({ children }: { children?: React.ReactNode }) =>
      createElement(
        context.Provider,
        { value: { show, hide } },
        createElement(
          GlobalComponentContextProvider,
          { Component, internalRef } as any,
          children,
        ),
      ),
  };
};
