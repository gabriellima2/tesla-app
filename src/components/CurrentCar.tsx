import styled, { css } from "styled-components/native";
import { Typography } from "./common";

type CurrentCarProps = {
	model: string;
};

export const CurrentCar = (props: CurrentCarProps) => {
	const { model } = props;
	return (
		<Container>
			<Brand>Tesla</Brand>
			<Typography.Title>{model}</Typography.Title>
		</Container>
	);
};

const Container = styled.View`
	align-items: center;
`;

const Brand = styled(Typography.Subtitle)`
	${({ theme }) => css`
		color: ${theme.colors.text.secondary};
	`}
`;
