import type { Preview } from "@storybook/react";
import {pretendard} from "../src/shared/pretendard";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: (Story) => {
    return <div className={pretendard.className}><Story/></div>
  }
};

export default preview;
