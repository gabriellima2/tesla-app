import { Stack } from "expo-router";
import styled, { css } from "styled-components/native";
import Animated, { FadeIn } from "react-native-reanimated";

import {
	ContainerWithDefaultSpaces,
	CurrentCarDetails,
	ACStatusPreview,
	CurrentCar,
	CarLockControl,
} from "@/components";

export default function Page() {
	return (
		<Animated.View
			entering={FadeIn.duration(200).delay(100)}
			exiting={FadeIn.duration(200)}
			style={{ flex: 1 }}
		>
			<Stack.Screen options={{ title: "" }} />
			<Container bottomSpacing>
				<Content>
					<CurrentCar model="Cybertruck" />
					<CurrentCarDetails
						batteryValue="297"
						image={{ src: require("../public/assets/car.png") }}
					/>
				</Content>
				<Footer>
					<ACStatusPreview />
					<CarLockControl />
				</Footer>
			</Container>
		</Animated.View>
	);
}

const Container = styled(ContainerWithDefaultSpaces)`
	${({ theme }) => css`
		flex: 1;
		gap: ${theme.spaces[4]};
		justify-content: space-between;
	`}
`;

const Content = styled.View`
	${({ theme }) => css`
		flex: 1;
		gap: ${theme.spaces[4]};
		justify-content: space-between;
	`}
`;

const Footer = styled.View`
	${({ theme }) => css`
		align-items: center;
		gap: ${theme.spaces[6]};
	`}
`;
