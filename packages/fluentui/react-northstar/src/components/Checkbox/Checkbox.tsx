import { Accessibility, checkboxBehavior, CheckboxBehaviorProps } from '@fluentui/accessibility';
import {
  getElementType,
  useUnhandledProps,
  useAccessibility,
  useStateManager,
  useStyles,
  useTelemetry,
} from '@fluentui/react-bindings';
import * as customPropTypes from '@fluentui/react-proptypes';
import { createCheckboxManager } from '@fluentui/state';
import * as _ from 'lodash';
import * as PropTypes from 'prop-types';
import * as React from 'react';
// @ts-ignore
import { ThemeContext } from 'react-fela';

import { createShorthandFactory, ChildrenComponentProps, commonPropTypes, UIComponentProps } from '../../utils';
import {
  ComponentEventHandler,
  WithAsProp,
  ShorthandValue,
  withSafeTypeForAs,
  ProviderContextPrepared,
  FluentComponentStaticProps,
} from '../../types';
import Box, { BoxProps } from '../Box/Box';
import Text, { TextProps } from '../Text/Text';
import { SupportedIntrinsicInputProps } from '../../utils/htmlPropsUtils';

export interface CheckboxSlotClassNames {
  label: string;
  indicator: string;
}

export interface CheckboxProps extends UIComponentProps, ChildrenComponentProps {
  /** Accessibility behavior if overridden by the user. */
  accessibility?: Accessibility<CheckboxBehaviorProps>;

  /** A checkbox can be checked by default. */
  defaultChecked?: SupportedIntrinsicInputProps['defaultChecked'];

  /** A checkbox's checked state can be controlled. */
  checked?: SupportedIntrinsicInputProps['checked'];

  /** A checkbox can appear disabled and be unable to change states. */
  disabled?: SupportedIntrinsicInputProps['disabled'];

  /** A checkbox's indicator icon can be customized. */
  indicator?: ShorthandValue<BoxProps>;

  /** A checkbox can render a label next to its indicator. */
  label?: ShorthandValue<TextProps>;

  /** A checkbox's label can be rendered in different positions. */
  labelPosition?: 'start' | 'end';

  /**
   * Called after a checkbox's checked state is changed.
   * @param event - React's original SyntheticEvent.
   * @param data - All props.
   */
  onChange?: ComponentEventHandler<CheckboxProps>;

  /**
   * Called after a checkbox is clicked.
   * @param event - React's original SyntheticEvent.
   * @param data - All props.
   */
  onClick?: ComponentEventHandler<CheckboxProps>;

  /** A checkbox can be formatted to show an "on or off" choice. */
  toggle?: boolean;
}

export type CheckboxStylesProps = Pick<CheckboxProps, 'checked' | 'disabled' | 'labelPosition' | 'toggle'>;

const Checkbox: React.FC<WithAsProp<CheckboxProps>> &
  FluentComponentStaticProps<CheckboxProps> & {
    slotClassNames: CheckboxSlotClassNames;
  } = props => {
  const context: ProviderContextPrepared = React.useContext(ThemeContext);
  const { setStart, setEnd } = useTelemetry(Checkbox.displayName, context.telemetry);
  setStart();

  const {
    checked,
    className,
    defaultChecked,
    design,
    disabled,
    label,
    labelPosition,
    indicator,
    styles,
    toggle,
    variables,
  } = props;

  const { state, actions } = useStateManager(createCheckboxManager, {
    mapPropsToInitialState: () => ({ checked: defaultChecked }),
    mapPropsToState: () => ({ checked }),
  });
  const getA11Props = useAccessibility(props.accessibility, {
    debugName: Checkbox.displayName,
    mapPropsToBehavior: () => ({
      checked: state.checked,
      disabled,
    }),
    actionHandlers: {
      performClick: (e: React.KeyboardEvent) => {
        e.preventDefault();
        handleClick(e);
      },
    },
    rtl: context.rtl,
  });
  const { classes, styles: resolvedStyles } = useStyles<CheckboxStylesProps>(Checkbox.displayName, {
    className: Checkbox.deprecated_className,
    mapPropsToStyles: () => ({
      checked: state.checked,
      disabled,
      labelPosition,
      toggle,
    }),
    mapPropsToInlineStyles: () => ({
      className,
      design,
      styles,
      variables,
    }),
    rtl: context.rtl,
  });

  const ElementType = getElementType(props);
  const unhandledProps = useUnhandledProps(Checkbox.handledProps, props);

  const handleChange = (e: React.ChangeEvent) => {
    if (!disabled) {
      // Checkbox component doesn't present any `input` component in markup, however all of our
      // components should handle events transparently.
      const checked = !state.checked;

      actions.toggle(checked);
      _.invoke(props, 'onChange', e, { ...props, checked });
    }
  };

  const handleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (!disabled) {
      const checked = !state.checked;
      actions.toggle(checked);

      _.invoke(props, 'onClick', e, { ...props, checked });
      _.invoke(props, 'onChange', e, { ...props, checked });
    }
  };

  const labelElement = Text.create(label, {
    defaultProps: () =>
      getA11Props('label', {
        styles: resolvedStyles.label,
        className: Checkbox.slotClassNames.label,
      }),
  });

  const element = (
    <ElementType
      {...getA11Props('root', {
        className: classes.root,
        onClick: handleClick,
        onChange: handleChange,
        ...unhandledProps,
      })}
    >
      {labelPosition === 'start' && labelElement}
      {Box.create(indicator, {
        defaultProps: () =>
          getA11Props('indicator', {
            className: Checkbox.slotClassNames.indicator,
            styles: toggle ? resolvedStyles.toggle : resolvedStyles.checkbox,
          }),
      })}
      {labelPosition === 'end' && labelElement}
    </ElementType>
  );
  setEnd();

  return element;
};

Checkbox.displayName = 'Checkbox';
Checkbox.deprecated_className = 'ui-checkbox';

Checkbox.defaultProps = {
  accessibility: checkboxBehavior,
  indicator: {},
  labelPosition: 'end',
};
Checkbox.propTypes = {
  ...commonPropTypes.createCommon({
    content: false,
  }),
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  indicator: customPropTypes.shorthandAllowingChildren,
  label: customPropTypes.itemShorthand,
  labelPosition: PropTypes.oneOf(['start', 'end']),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  toggle: PropTypes.bool,
};
Checkbox.handledProps = Object.keys(Checkbox.propTypes) as any;

Checkbox.slotClassNames = {
  label: `${Checkbox.deprecated_className}__label`,
  indicator: `${Checkbox.deprecated_className}__indicator`,
};

Checkbox.create = createShorthandFactory({
  Component: Checkbox,
  mappedProp: 'label',
});

/**
 * A Checkbox allows a user to make a choice between two mutually exclusive options.
 *
 * @accessibility
 * Implements [ARIA Checkbox](https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox) design pattern.
 */
export default withSafeTypeForAs<typeof Checkbox, CheckboxProps>(Checkbox);