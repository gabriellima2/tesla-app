import styled, { css } from "styled-components/native";

export const Small = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.text.secondary};
		font-size: ${theme.fontSizes.sm};
		font-family: ${theme.fontFamily.main.regular};
	`}
`;
