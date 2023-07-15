import { Stack } from "expo-router";
import styled, { css } from "styled-components/native";

import {
	ContainerWithDefaultSpaces,
	CurrentCarDetails,
	ACStatusPreview,
	CurrentCar,
	CarLockControl,
} from "@/components";

export default function Page() {
	return (
		<>
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
		</>
	);
}

const Container = styled(ContainerWithDefaultSpaces)`
	flex: 1;
	justify-content: space-between;
`;

const Content = styled.View`
	${({ theme }) => css`
		flex: 1;
		gap: ${theme.spaces[8]};
		justify-content: space-between;
	`}
`;

const Footer = styled.View`
	${({ theme }) => css`
		align-items: center;
		gap: ${theme.spaces[10]};
	`}
`;
