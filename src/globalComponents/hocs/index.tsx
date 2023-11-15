import { createElement, ReactNode } from "react";
import Toast from "~/globalComponents/Components/Toasts";

const withGlobalComponents = (Component: ReactNode) => {
  return (
    <>
      {Component}
      <Toast.Portal />
    </>
  );
};

withGlobalComponents.displayName = "withGlobalComponents";

export default withGlobalComponents;
