import styled, { css } from "styled-components/native";

export const Paragraph = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.text.secondary};
		font-size: ${theme.fontSizes.regular};
		font-family: ${theme.fontFamily.main.regular};
	`}
`;
