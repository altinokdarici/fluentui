import { Attachment, AttachmentAction } from '@fluentui/react-northstar';

const selectors = {
  root: `.${Attachment.deprecated_className}`,
  action: `.${AttachmentAction.deprecated_className}`,
};

const getScreenerSteps = (): ScreenerSteps => [
  builder => builder.hover(selectors.root).snapshot('Hovers root'),
  (builder, keys) => builder.keys('body', keys.tab).snapshot('Focuses root'),

  builder => builder.hover(selectors.action).snapshot('Hovers action'),
  (builder, keys) =>
    builder
      .keys('body', keys.tab)
      .keys('body', keys.tab)
      .snapshot('Focuses action'),
];

export default getScreenerSteps;