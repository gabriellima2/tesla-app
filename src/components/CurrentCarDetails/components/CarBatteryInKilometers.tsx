import styled, { css } from "styled-components/native";
import { Typography } from "@/components/common";

type CarBatteryInKilometersProps = {
	value: string;
};

export const CarBatteryInKilometers = (props: CarBatteryInKilometersProps) => {
	const { value } = props;
	return (
		<Container>
			<Kilometers>{value}</Kilometers>
			<Abbreviation>KM</Abbreviation>
		</Container>
	);
};

const Container = styled.View`
	${({ theme }) => css`
		align-items: flex-start;
		flex-direction: row;
		gap: ${theme.spaces[3]};
	`}
`;

const Kilometers = styled(Typography.Title)`
	${({ theme }) => css`
		font-family: ${theme.fontFamily.secondary.extralight};
		font-size: 160px;
	`}
`;

const Abbreviation = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.utils.highlight};
		font-size: ${theme.fontSizes.medium};
		font-family: ${theme.fontFamily.secondary.light};
		text-transform: lowercase;
		margin-top: ${theme.spaces[9]};
	`}
`;
