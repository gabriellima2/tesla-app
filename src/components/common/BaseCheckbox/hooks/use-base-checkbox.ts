import { useEffect, useState } from "react";

export type UseBaseCheckboxParams = {
	initialValue?: boolean;
	onChange?: (value: boolean) => void;
};

export type UseBaseCheckboxReturn = {
	isChecked: boolean;
	handleChange?: () => void;
};

export function useBaseCheckbox(
	params: UseBaseCheckboxParams
): UseBaseCheckboxReturn {
	const { initialValue, onChange } = params;
	const [isChecked, setIsChecked] = useState(!!initialValue);

	const handleChange = () => setIsChecked((prevState) => !prevState);

	useEffect(() => {
		if (!onChange) return;
		onChange(isChecked);
	}, [isChecked]);

	return {
		isChecked,
		handleChange,
	};
}
