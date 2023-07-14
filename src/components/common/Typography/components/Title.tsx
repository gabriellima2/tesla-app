import styled, { css } from "styled-components/native";

export const Title = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.text.primary};
		font-size: ${theme.fontSizes.xl};
		font-family: ${theme.fontFamily.main.black};
	`}
`;
