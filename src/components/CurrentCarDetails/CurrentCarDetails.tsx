import styled from "styled-components/native";
import Animated, { SlideInRight } from "react-native-reanimated";

import { CarImage, CarBatteryInKilometers } from "./components";

type CurrentCarDetailsProps = {
	batteryValue: string;
	image: Parameters<typeof CarImage>[0];
};

export const CurrentCarDetails = (props: CurrentCarDetailsProps) => {
	const { batteryValue, image } = props;
	return (
		<Container>
			<CarBatteryInKilometers value={batteryValue} />
			<Animated.View
				entering={SlideInRight.duration(400)}
				exiting={SlideInRight.duration(400)}
			>
				<CarImage {...image} />
			</Animated.View>
		</Container>
	);
};

const Container = styled.View`
	align-items: center;
`;
