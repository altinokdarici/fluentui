import { Button } from '@fluentui/react-northstar';

const config: ScreenerTestsConfig = {
  steps: [builder => builder.click(`.${Button.deprecated_className}`).snapshot('RTL: Shows popup')],
};

export default config;