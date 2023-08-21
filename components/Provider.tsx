"use client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {children}
      <Toaster position="bottom-right"/>
    </Provider>
  );
};

export default ReduxProvider;
