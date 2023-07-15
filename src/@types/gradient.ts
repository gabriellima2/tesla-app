import { theme } from "@/styles/theme";

export type GradientType = keyof (typeof theme)["colors"]["gradients"];

export type GradientColor = [string, string];
