import { useState } from "react";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store/store";

function CalendarApp() {

  return (
    <Provider store={store} >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default CalendarApp;
