import { Stack } from "expo-router";
import { Text } from "react-native";

export default function Home() {
	return (
		<>
			<Stack.Screen options={{ headerShown: false }} />
			<Text>Hello, World!</Text>
		</>
	);
}
