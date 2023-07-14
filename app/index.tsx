import { Stack } from "expo-router";
import { ContainerWithDefaultSpaces, Typography } from "@/components";

export default function Page() {
	return (
		<>
			<Stack.Screen options={{ title: "" }} />
			<ContainerWithDefaultSpaces>
				<Typography.Title>Hello</Typography.Title>
			</ContainerWithDefaultSpaces>
		</>
	);
}
