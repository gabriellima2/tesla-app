import { Stack } from "expo-router";
import { Typography } from "@/components";

export default function Home() {
	return (
		<>
			<Stack.Screen options={{ headerShown: false }} />
			<Typography.Title>Hello, World!</Typography.Title>
		</>
	);
}
