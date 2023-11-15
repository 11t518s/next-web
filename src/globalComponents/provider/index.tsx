import {
  createContext,
  useCallback,
  useContext,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  GlobalComponentContextProviderProps,
  GlobalComponentContextType,
} from "../types";
import Toast from "~/globalComponents/Components/Toasts";

export const GlobalComponentContext =
  createContext<GlobalComponentContextType | null>(null);

const GlobalComponentContextProvider = <T extends any>({
  Component,
  internalRef,
}: GlobalComponentContextProviderProps<T>) => {
  const [props, setProps] = useState<T | null>(null);
  console.log("aaaaaaaa");

  const hideComponent = useCallback(async () => {
    setProps(null);
  }, []);

  const context = useMemo(
    () => ({
      show: async (p: T, hidePrevComponentImmediate = false) => {
        await hideComponent();
        setProps(p);
      },
      hide: () => hideComponent(),
    }),
    [],
  );

  useImperativeHandle(internalRef, () => context, []);

  if (!props) return null;

  return (
    <GlobalComponentContext.Provider value={context}>
      <Toast.Portal />

      <Component {...props} />
    </GlobalComponentContext.Provider>
  );
};

export { GlobalComponentContextProvider };
