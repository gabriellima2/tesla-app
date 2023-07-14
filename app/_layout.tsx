import "react-native-gesture-handler";
import { Text } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import styled, { ThemeProvider } from "styled-components/native";
import {
	useFonts,
	Lato_400Regular,
	Lato_700Bold,
	Lato_900Black,
} from "@expo-google-fonts/lato";
import { Jost_200ExtraLight, Jost_300Light } from "@expo-google-fonts/jost";

import { BackgroundGradient } from "@/components";
import { theme } from "@/styles/theme";

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		Lato_400Regular,
		Lato_700Bold,
		Lato_900Black,
		Jost_300Light,
		Jost_200ExtraLight,
	});

	return (
		<ThemeProvider theme={theme}>
			<StatusBar style="light" />
			<SafeContainer>
				<BackgroundGradient>
					{!fontsLoaded ? (
						<Text>Carregando...</Text>
					) : (
						<Stack
							screenOptions={{
								headerShadowVisible: false,
								headerTitleStyle: {
									color: theme.colors.text.primary,
									fontFamily: theme.fontFamily.main.bold,
									fontSize: 28,
								},
								headerStyle: { backgroundColor: "transparent" },
								contentStyle: { backgroundColor: "transparent" },
							}}
						/>
					)}
				</BackgroundGradient>
			</SafeContainer>
		</ThemeProvider>
	);
}

const SafeContainer = styled.SafeAreaView`
	flex: 1;
`;
