## API Report File for "@fluentui/react-menu"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ComponentProps } from '@fluentui/react-utils';
import { ObjectShorthandProps } from '@fluentui/react-utils';
import * as React from 'react';
import { ShorthandProps } from '@fluentui/react-utils';

// @public
export const MenuDivider: React.ForwardRefExoticComponent<import("@fluentui/react-utils").ComponentProps & React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;

// @public (undocumented)
export type MenuDividerProps = ComponentProps & React.HTMLAttributes<HTMLElement>;

// @public (undocumented)
export interface MenuDividerState extends MenuDividerProps {
    // (undocumented)
    ref: React.MutableRefObject<HTMLElement>;
}

// @public
export const MenuGroup: React.ForwardRefExoticComponent<import("@fluentui/react-utils").ComponentProps & React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;

// @public
export const MenuGroupHeader: React.ForwardRefExoticComponent<import("@fluentui/react-utils").ComponentProps & React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;

// @public (undocumented)
export type MenuGroupHeaderProps = ComponentProps & React.HTMLAttributes<HTMLElement>;

// @public (undocumented)
export interface MenuGroupHeaderState extends MenuGroupHeaderProps {
    // (undocumented)
    ref: React.MutableRefObject<HTMLElement>;
}

// @public (undocumented)
export type MenuGroupProps = ComponentProps & React.HTMLAttributes<HTMLElement>;

// @public
export const menuGroupShorthandProps: string[];

// @public (undocumented)
export interface MenuGroupState extends MenuGroupProps {
    headerId: string;
    // (undocumented)
    ref: React.MutableRefObject<HTMLElement>;
}

// @public
export const MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLElement>>;

// @public
export const MenuItemCheckbox: React.ForwardRefExoticComponent<MenuItemCheckboxProps & React.RefAttributes<HTMLElement>>;

// Warning: (ae-forgotten-export) The symbol "MenuItemSelectableProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export interface MenuItemCheckboxProps extends ComponentProps, React.HTMLAttributes<HTMLElement>, MenuItemProps, MenuItemSelectableProps {
    checkmark?: ShorthandProps<HTMLElement>;
    icon?: ShorthandProps<HTMLElement>;
}

// @public
export const menuItemCheckboxShorthandProps: string[];

// Warning: (ae-forgotten-export) The symbol "MenuItemSelectableState" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export interface MenuItemCheckboxState extends MenuItemCheckboxProps, MenuItemState, MenuItemSelectableState {
    checkmark: ObjectShorthandProps<HTMLElement>;
    icon?: ObjectShorthandProps<HTMLElement>;
    // (undocumented)
    ref: React.MutableRefObject<HTMLElement>;
}

// @public (undocumented)
export interface MenuItemProps extends ComponentProps, React.HTMLAttributes<HTMLElement> {
    icon?: ShorthandProps<HTMLElement>;
}

// @public
export const MenuItemRadio: React.ForwardRefExoticComponent<MenuItemRadioProps & React.RefAttributes<HTMLElement>>;

// @public (undocumented)
export interface MenuItemRadioProps extends ComponentProps, React.HTMLAttributes<HTMLElement>, MenuItemSelectableProps {
    // (undocumented)
    checkmark?: ShorthandProps<HTMLElement>;
    // (undocumented)
    icon?: ShorthandProps<HTMLElement>;
}

// @public
export const menuItemRadioShorthandProps: string[];

// @public (undocumented)
export interface MenuItemRadioState extends MenuItemRadioProps, MenuItemSelectableState {
    checkmark: ObjectShorthandProps<HTMLElement>;
    icon?: ObjectShorthandProps<HTMLElement>;
    // (undocumented)
    ref: React.MutableRefObject<HTMLElement>;
}

// @public
export const menuItemShorthandProps: string[];

// @public (undocumented)
export interface MenuItemState extends MenuItemProps {
    icon?: ObjectShorthandProps<HTMLSpanElement>;
    ref: React.MutableRefObject<HTMLElement>;
}

// @public
export const MenuList: React.ForwardRefExoticComponent<MenuListProps & React.RefAttributes<HTMLElement>>;

// @public (undocumented)
export interface MenuListProps extends ComponentProps, React.HTMLAttributes<HTMLElement> {
    checkedValues?: Record<string, string[]>;
    onCheckedValueChange?: (e: React.MouseEvent | React.KeyboardEvent, name: string, checkedItems: string[]) => void;
}

// @public (undocumented)
export interface MenuListState extends MenuListProps {
    ref: React.MutableRefObject<HTMLElement>;
}

// @public
export const renderMenuDivider: (state: MenuDividerState) => JSX.Element;

// @public
export const renderMenuGroup: (state: MenuGroupState) => JSX.Element;

// @public
export const renderMenuGroupHeader: (state: MenuGroupHeaderState) => JSX.Element;

// @public
export const renderMenuItem: (state: MenuItemState) => JSX.Element;

// @public
export const renderMenuItemCheckbox: (state: MenuItemCheckboxState) => JSX.Element;

// @public
export const renderMenuItemRadio: (state: MenuItemRadioState) => JSX.Element;

// @public
export const renderMenuList: (state: MenuListState) => JSX.Element;

// @public
export const useIconStyles: (selectors: MenuItemState) => string;

// @public
export const useMenuDivider: (props: MenuDividerProps, ref: React.Ref<HTMLElement>, defaultProps?: MenuDividerProps | undefined) => MenuDividerState;

// @public (undocumented)
export const useMenuDividerStyles: (state: MenuDividerState) => MenuDividerState;

// @public
export const useMenuGroup: (props: MenuGroupProps, ref: React.Ref<HTMLElement>, defaultProps?: MenuGroupProps | undefined) => MenuGroupState;

// @public
export const useMenuGroupHeader: (props: MenuGroupHeaderProps, ref: React.Ref<HTMLElement>, defaultProps?: MenuGroupHeaderProps | undefined) => MenuGroupHeaderState;

// @public (undocumented)
export const useMenuGroupHeaderStyles: (state: MenuGroupHeaderState) => MenuGroupHeaderState;

// @public
export const useMenuItem: (props: MenuItemProps, ref: React.Ref<HTMLElement>, defaultProps?: MenuItemProps | undefined) => MenuItemState;

// @public
export const useMenuItemCheckbox: (props: MenuItemCheckboxProps, ref: React.Ref<HTMLElement>, defaultProps?: MenuItemCheckboxProps | undefined) => MenuItemCheckboxState;

// @public
export const useMenuItemRadio: (props: MenuItemRadioProps, ref: React.Ref<HTMLElement>, defaultProps?: MenuItemRadioProps | undefined) => MenuItemRadioState;

// @public
export const useMenuItemStyles: (state: MenuItemState) => void;

// @public
export const useMenuList: (props: MenuListProps, ref: React.Ref<HTMLElement>, defaultProps?: MenuListProps | undefined) => MenuListState;

// @public
export const useRootStyles: (selectors: MenuItemState) => string;


// (No @packageDocumentation comment for this package)

```