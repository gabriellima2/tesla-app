import "styled-components/native";
import type { Theme } from "@/styles/theme";

declare module "styled-components/native" {
	export interface DefaultTheme extends Theme {}
}
