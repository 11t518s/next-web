import { createElement } from "react";

const withGlobalComponents = (Component: () => JSX.Element) => {
  return <>{createElement(Component)}</>;
};

withGlobalComponents.displayName = "withGlobalComponents";

export default withGlobalComponents;
