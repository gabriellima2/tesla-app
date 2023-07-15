import { type ReactNode } from "react";
import { type ViewProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

import { useGradientColor, type UseGradientColorParams } from "../hooks";

type BackgroundProps = Pick<ViewProps, "style"> &
	Pick<UseGradientColorParams, "hasInvertedColor"> & {
		isChecked: boolean;
		children: ReactNode;
	};

export const Background = (props: BackgroundProps) => {
	const { isChecked, hasInvertedColor, children, ...rest } = props;
	const color = useGradientColor({ isChecked, hasInvertedColor });
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
