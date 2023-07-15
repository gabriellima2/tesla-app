import { useTheme } from "styled-components/native";

import type { UseBaseCheckboxReturn } from "./use-base-checkbox";
import type { GradientColor, GradientType } from "@/@types/gradient";

export type UseGradientColorParams = Pick<
	UseBaseCheckboxReturn,
	"isChecked"
> & {
	hasInvertedColor?: boolean;
};

export type UseGradientColorReturn = GradientColor;

export function useGradientColor(
	params: UseGradientColorParams
): UseGradientColorReturn {
	const { hasInvertedColor, isChecked } = params;
	const { colors } = useTheme();

	const gradient: GradientType = isChecked ? "brand" : "disabled";
	const color: GradientColor =
		hasInvertedColor && isChecked
			? [colors.gradients[gradient].to, colors.gradients[gradient].from]
			: [colors.gradients[gradient].from, colors.gradients[gradient].to];

	return color;
}
