import "react-native-gesture-handler";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
	useFonts,
	Rubik_400Regular,
	Rubik_600SemiBold,
	Rubik_700Bold,
} from "@expo-google-fonts/rubik";

import { TabRoutes } from "@/routes/TabRoutes";
import { theme } from "@/styles/theme";

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		Rubik_400Regular,
		Rubik_600SemiBold,
		Rubik_700Bold,
	});

	return (
		<ThemeProvider theme={theme}>
			<StatusBar style="light" />
			{!fontsLoaded ? <Text>Carregando...</Text> : <TabRoutes />}
		</ThemeProvider>
	);
}
