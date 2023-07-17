import { useState } from "react";
import styled, { css } from "styled-components/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Animated, { PinwheelIn } from "react-native-reanimated";

import { BaseCheckbox, Typography } from "./common";

type Action = "close" | "open";

export const CarLockControl = () => {
	const [actionOnTap, setActionOnTap] = useState<Action>("open");
	return (
		<Container>
			<Animated.View entering={PinwheelIn.duration(200).delay(300)}>
				<BaseCheckbox
					initialValue={true}
					onChange={(value) => setActionOnTap(value ? "open" : "close")}
					Icon={({ isChecked, ...params }) => (
						<SimpleLineIcons
							name={isChecked ? "lock" : "lock-open"}
							{...params}
						/>
					)}
				/>
			</Animated.View>

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
