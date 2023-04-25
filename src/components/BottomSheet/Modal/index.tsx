import React, { MouseEvent } from "react";

import { Box, styled } from "@mui/material";

import ModalHeader from "@components/BottomSheet/ModalHeader";

const ModalBox = styled(Box)(({ theme }) => ({
	width: "100%",
	height: `${theme.bottomSheetHeight}px`,
	backgroundColor: "#fff",
	background: " #FFFFFF",
	border: "none",
	borderRadius: "16px 16px 0px 0px",
	position: "absolute",
	bottom: 0,
	left: 0,
	transform: `translateY(${theme.bottomSheetBasicTranslateY}px)`,
	transition: theme.transitions.create(["transform"], {
		duration: theme.transitions.duration.standard,
	}),
	boxSizing: "border-box",
}));

interface MatrixType {
	initialMatrix: {
		heightOffset: number;
		mouseY: number;
	};
	moveMatrix: {
		direction: "none" | "down" | "up";
	};
	mouseClicked: boolean;
}

interface MUIModalProps {
	minHeight: number;
	maxHeight: number;
	basicHeight?: number;
}

const MUIModal: React.FC<MUIModalProps> = (props: MUIModalProps) => {
	const { minHeight, maxHeight } = props;
	const sheetRef = React.useRef<HTMLDivElement>(null);
	const metrix = React.useRef<MatrixType>({
		initialMatrix: {
			heightOffset: 0,
			mouseY: -1,
		},
		moveMatrix: {
			direction: "none",
		},
		mouseClicked: false,
	});
	function handleMouseDown(event: MouseEvent): void {
		event.stopPropagation();
		const { initialMatrix } = metrix.current;
		const parentElement = event.currentTarget.parentElement as HTMLElement;
		const parentAbsoluteOffset = parentElement.getBoundingClientRect().y;
		const AbsoluteOffset = event.currentTarget.getBoundingClientRect().y;
		initialMatrix.heightOffset = AbsoluteOffset - parentAbsoluteOffset - 10;
		initialMatrix.mouseY = event.clientY;
		metrix.current.mouseClicked = true;
	}
	function handleMouseMove(event: MouseEvent): void {
		event.stopPropagation();
		if (!metrix.current.mouseClicked) {
			return;
		}
		const {
			initialMatrix: { mouseY, heightOffset },
			moveMatrix,
		} = metrix.current;
		const diff = event.clientY - mouseY;
		let nextOffset = heightOffset + diff;
		if (maxHeight <= nextOffset) {
			nextOffset = maxHeight;
		}
		if (minHeight >= nextOffset) {
			nextOffset = minHeight;
		}
		diff >= 0
			? (moveMatrix.direction = "down")
			: (moveMatrix.direction = "up");
		sheetRef.current!.style.setProperty(
			"transform",
			`translateY(${nextOffset}px)`
		);
	}

	function handleMouseUp(): void {
		const {
			moveMatrix: { direction },
		} = metrix.current;
		console.log(`direction : ${direction}`);
		if (direction == "up") {
			sheetRef.current!.style.setProperty("transform", `translateY(0)`);
		} else if (direction == "down") {
			sheetRef.current!.style.setProperty(
				"transform",
				`translateY(${maxHeight}px)`
			);
		}

		metrix.current = {
			initialMatrix: {
				heightOffset: 0,
				mouseY: -1,
			},
			moveMatrix: {
				direction: "none",
			},
			mouseClicked: false,
		};
	}

	function handleMouseOut(): void {
		const {
			moveMatrix: { direction },
		} = metrix.current;
		console.log(`direction : ${direction}`);
		if (direction == "up") {
			sheetRef.current!.style.setProperty("transform", `translateY(0)`);
		} else if (direction == "down") {
			sheetRef.current!.style.setProperty(
				"transform",
				`translateY(${maxHeight}px)`
			);
		}

		metrix.current = {
			initialMatrix: {
				heightOffset: 0,
				mouseY: -1,
			},
			moveMatrix: {
				direction: "none",
			},
			mouseClicked: false,
		};
	}
	return (
		<ModalBox
			ref={sheetRef}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onMouseOut={handleMouseOut}
		>
			<ModalHeader />
		</ModalBox>
	);
};

export default MUIModal;
