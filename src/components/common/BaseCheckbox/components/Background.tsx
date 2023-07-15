import { type ReactNode } from "react";
import { type ViewProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled, { useTheme } from "styled-components/native";

import { theme } from "@/styles/theme";

type BackgroundProps = Pick<ViewProps, "style"> & {
	isChecked: boolean;
	inverted?: boolean;
	children: ReactNode;
};

type GradientType = keyof Pick<
	(typeof theme)["colors"]["gradients"],
	"brand" | "disabled"
>;

export const Background = (props: BackgroundProps) => {
	const { isChecked, inverted, children, ...rest } = props;
	const { colors } = useTheme();

	const gradient: GradientType = isChecked ? "brand" : "disabled";
	const color =
		inverted && isChecked
			? [colors.gradients[gradient].to, colors.gradients[gradient].from]
			: [colors.gradients[gradient].from, colors.gradients[gradient].to];

	return (
		<Container {...rest} colors={color} start={{ x: 0.1, y: 0.2 }}>
			{children}
		</Container>
	);
};

const Container = styled(LinearGradient)`
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	border-radius: 1000px;
`;
