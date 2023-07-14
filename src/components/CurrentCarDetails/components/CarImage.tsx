import { Dimensions } from "react-native";
import styled from "styled-components/native";

type CarImageProps = {
	src: ReturnType<NodeRequire> | string;
	alt?: string;
};

export const CarImage = (props: CarImageProps) => {
	const { src, alt } = props;
	return (
		<Container
			source={typeof src === "string" ? { uri: src } : src}
			alt={alt}
		/>
	);
};

const { width } = Dimensions.get("screen");

const Container = styled.Image`
	width: ${width}px;
	height: 300px;
	object-fit: contain;
	position: absolute;
	top: 80px;
	right: -20%;
`;
