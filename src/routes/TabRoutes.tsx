import { Tabs } from "expo-router/tabs";

export const TabRoutes = () => (
	<Tabs
		initialRouteName="(tabs)/(home)"
		sceneContainerStyle={{ backgroundColor: "transparent" }}
	>
		<Tabs.Screen name="(tabs)/(home)" options={{ headerShown: false }} />
	</Tabs>
);
