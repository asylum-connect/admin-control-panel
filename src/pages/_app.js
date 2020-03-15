import NextApp from "next/app";
import React from "react";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";

import { ContextAppProvider } from "../components/ContextApp";
import { ContextFormModalProvider } from "../components/ContextFormModal";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";

class App extends NextApp {
  render() {
    const { Component } = this.props;

    return (
      <ThemeProvider>
        <CSSReset />
        <ErrorBoundary>
          <ContextAppProvider>
            <ContextFormModalProvider>
              <Header />
              <Component />
            </ContextFormModalProvider>
          </ContextAppProvider>
        </ErrorBoundary>
      </ThemeProvider>
    );
  }
}

export default App;
