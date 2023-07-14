import styled, { css } from "styled-components/native";

export const Subtitle = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.text.primary};
		font-size: ${theme.fontSizes.medium};
		font-family: ${theme.fontFamily.main.bold};
	`}
`;
