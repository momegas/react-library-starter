import { StyledEngineProvider } from '@mui/material/styles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    // Opt-out of inline rendering
    inlineStories: false,
    iframeHeight: "300px",
  },
  // decorators: [
  //   (Story) => (
  //     <StyledEngineProvider injectFirst>
  //       <Story />
  //     </StyledEngineProvider>
  //   ),
  // ],
}
