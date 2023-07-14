import styled, { css } from "styled-components/native";
import { Platform, NativeModules } from "react-native";

import type { Modifiers } from "@/@types/modifiers";

type ContainerWithDefaultSpacesProps = {
	horizontalSpacing?: boolean;
	verticalSpacing?: boolean;
	topSpacing?: boolean;
	bottomSpacing?: boolean;
	leftSpacing?: boolean;
	rightSpacing?: boolean;
};

const STATUSBAR_HEIGHT =
	Platform.OS === "ios" ? 28 : NativeModules.StatusBarManager.HEIGHT + 28;

const modifiers: Modifiers<keyof ContainerWithDefaultSpacesProps> = {
	horizontalSpacing: (theme) => css`
		padding-left: ${theme.spaces[7]};
		padding-right: ${theme.spaces[7]};
	`,
	verticalSpacing: (theme) => css`
		padding-top: ${STATUSBAR_HEIGHT}px;
		padding-bottom: ${theme.spaces[7]};
	`,
	topSpacing: () => css`
		padding-top: ${STATUSBAR_HEIGHT}px;
	`,
	bottomSpacing: (theme) => css`
		padding-bottom: ${theme.spaces[7]};
	`,
	leftSpacing: (theme) => css`
		padding-left: ${theme.spaces[7]};
	`,
	rightSpacing: (theme) => css`
		padding-right: ${theme.spaces[7]};
	`,
};

export const ContainerWithDefaultSpaces = styled.View<ContainerWithDefaultSpacesProps>`
	${({
		theme,
		horizontalSpacing = true,
		verticalSpacing = true,
		topSpacing,
		bottomSpacing,
		leftSpacing,
		rightSpacing,
	}) => css`
		flex: 1;
		${horizontalSpacing && modifiers.horizontalSpacing(theme)};
		${verticalSpacing && modifiers.verticalSpacing(theme)};
		${topSpacing && modifiers.topSpacing(theme)};
		${bottomSpacing && modifiers.bottomSpacing(theme)};
		${leftSpacing && modifiers.leftSpacing(theme)};
		${rightSpacing && modifiers.rightSpacing(theme)};
	`}
`;
