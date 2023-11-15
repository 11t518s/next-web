import { createElement, ReactNode } from "react";
import Toast from "~/globalComponents/Components/Toasts";

const withGlobalComponents = (Component: ReactNode) => {
  console.log("aaaaaaaa");
  return (
    <>
      {Component}
      <div>
        <Toast.Portal />
      </div>
    </>
  );
};

withGlobalComponents.displayName = "withGlobalComponents";

export default withGlobalComponents;
