import { PressableProps } from "react-native";
import styled, { useTheme } from "styled-components/native";

import { useBaseCheckbox, type UseBaseCheckboxParams } from "./hooks";
import { Background } from "./components";

type IconParams = { color: string; isChecked: boolean; size: number };

type BaseCheckboxProps = UseBaseCheckboxParams &
	PressableProps & {
		Icon: (params: IconParams) => JSX.Element;
	};

export const BaseCheckbox = (props: BaseCheckboxProps) => {
	const { initialValue, onChange, disabled, Icon, ...rest } = props;
	const { colors } = useTheme();
	const { isChecked, handleChange } = useBaseCheckbox({
		initialValue,
		onChange,
	});
	return (
		<Container
			{...rest}
			disabled={disabled}
			accessibilityRole="checkbox"
			accessibilityState={{ disabled: !!disabled, checked: isChecked }}
			onPress={handleChange}
		>
			<Stroke hasInvertedColor isChecked={isChecked}>
				<Stroke hasInvertedColor isChecked={isChecked}>
					<Background isChecked={isChecked}>
						<Icon
							size={24}
							isChecked={isChecked}
							color={isChecked ? colors.utils.highlight : colors.text.secondary}
						/>
					</Background>
				</Stroke>
			</Stroke>
		</Container>
	);
};

type ContainerProps = { isChecked?: boolean };

const Container = styled.Pressable<ContainerProps>`
	width: 90px;
	height: 90px;
	border-radius: 1000px;
`;

const Stroke = styled(Background)`
	padding: 2.2px;
`;
