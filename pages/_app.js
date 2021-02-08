import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import Header from "components/Header";
import { ThemeProvider } from "@emotion/react";

const theme = {
  breakpoints: ["360px", "780px", "1024px", "1280px", "1600px"],
  colors: {
    primary: "#ff0000",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
