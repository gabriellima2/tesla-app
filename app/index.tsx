import { Stack } from "expo-router";
import { ContainerWithDefaultSpaces, CurrentCar } from "@/components";

export default function Page() {
	return (
		<>
			<Stack.Screen options={{ title: "" }} />
			<ContainerWithDefaultSpaces>
				<CurrentCar model="Cybertruck" />
			</ContainerWithDefaultSpaces>
		</>
	);
}
