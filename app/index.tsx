import { Stack } from "expo-router";
import styled, { css } from "styled-components/native";

import {
	ContainerWithDefaultSpaces,
	CurrentCarDetails,
	CurrentCar,
} from "@/components";

export default function Page() {
	return (
		<>
			<Stack.Screen options={{ title: "" }} />
			<ContainerWithDefaultSpaces>
				<Content>
					<CurrentCar model="Cybertruck" />
					<CurrentCarDetails
						batteryValue="297"
						image={{ src: require("../public/assets/car.png") }}
					/>
				</Content>
				<Footer></Footer>
			</ContainerWithDefaultSpaces>
		</>
	);
}

const Content = styled.View`
	${({ theme }) => css`
		flex: 1;
		gap: ${theme.spaces[8]};
		justify-content: space-between;
	`}
`;

const Footer = styled.View`
	flex: 1;
`;
