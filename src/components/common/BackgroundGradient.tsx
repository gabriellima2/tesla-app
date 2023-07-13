import { type ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import styled, { useTheme } from "styled-components/native";

type BackgroundGradientProps = { children: ReactNode };

export const BackgroundGradient = (props: BackgroundGradientProps) => {
	const { children } = props;
	const { colors } = useTheme();
	return (
		<Container
			colors={[
				colors.gradients.background.from,
				colors.gradients.background.to,
			]}
		>
			{children}
		</Container>
	);
};

const Container = styled(LinearGradient)`
	flex: 1;
`;
