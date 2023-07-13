import { Stack } from "expo-router";
import { ContainerWithDefaultSpaces } from "@/components";

export default function Layout() {
	return (
		<ContainerWithDefaultSpaces verticalSpacing horizontalSpacing>
			<Stack
				screenOptions={{ contentStyle: { backgroundColor: "transparent" } }}
			/>
		</ContainerWithDefaultSpaces>
	);
}
