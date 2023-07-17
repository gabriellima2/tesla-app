import { useState } from "react";
import styled from "styled-components/native";
import { SimpleLineIcons } from "@expo/vector-icons";

import { BaseCheckbox, Typography } from "./common";
import { css } from "styled-components/native";

type Action = "close" | "open";

export const CarLockControl = () => {
	const [actionOnTap, setActionOnTap] = useState<Action>("open");
	return (
		<Container>
			<BaseCheckbox
				initialValue={true}
				onChange={(value) => setActionOnTap(value ? "open" : "close")}
				Icon={(params) => <SimpleLineIcons name="lock" {...params} />}
			/>
			<Label>Tap to {actionOnTap} the car</Label>
		</Container>
	);
};

const Container = styled.View`
	${({ theme }) => css`
		align-items: center;
		justify-content: space-between;
		gap: ${theme.spaces[4]};
	`}
`;

const Label = styled(Typography.Paragraph)`
	${({ theme }) => css`
		color: ${theme.colors.text.primary};
		font-family: ${theme.fontFamily.main.bold};
	`}
`;
