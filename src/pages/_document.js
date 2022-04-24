import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <title>Cory Zauss</title>
        <Head />
        <body>
          <script>
            setInnerHTML={{
              __html: themeInitializerScript,
            }}
          </script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const themeInitializerScript = `(function(){
  ${setInitialColorMode.toString()}
  setInitialColorMode();
})`;

function setInitialColorMode() {
  function getInitialColorMode() {
    const persistedPreferenceMode = window.localStorage.getItem('theme');
    const hasPersistedPreference = typeof persistedPreferenceMode === 'string';

    if (hasPersistedPreference) {
      return persistedPreferenceMode
    }

    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof preference.matches == 'boolean';

    if (hasMediaQueryPreference) {
      return preference.matches ? 'dark' : 'light';
    }
    return "light";
  }

  const currentColorMode = getInitialColorMode();
  const element = document.documentElement;
  element.style.setProperty('--initial-color-mode', currentColorMode);

  if (currentColorMode === 'dark') {
    document.documentElement.setAttribute("data-theme", "dark")
  }
}

export default MyDocument