import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}