import styled from "styled-components/native";
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
			<CarImage {...image} />
		</Container>
	);
};

const Container = styled.View`
	align-items: center;
`;
