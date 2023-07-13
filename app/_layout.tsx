import "react-native-gesture-handler";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import styled, { ThemeProvider } from "styled-components/native";
import {
	useFonts,
	Rubik_400Regular,
	Rubik_600SemiBold,
	Rubik_700Bold,
} from "@expo-google-fonts/rubik";

import { BackgroundGradient } from "@/components";
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
			<SafeContainer>
				<BackgroundGradient>
					{!fontsLoaded ? <Text>Carregando...</Text> : <TabRoutes />}
				</BackgroundGradient>
			</SafeContainer>
		</ThemeProvider>
	);
}

const SafeContainer = styled.SafeAreaView`
	flex: 1;
`;
