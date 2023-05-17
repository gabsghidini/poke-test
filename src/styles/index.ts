import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 97vw;
	height: 97vh;
`;

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	overflow: scroll;
`;

export const TableHeader = styled.thead`
	width: 80%;
`;

export const TableBody = styled.tbody`
	width: 80%;
`;

export const TableRow = styled.tr`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const TableHeadProperty = styled.th`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;

	width: 100%;
	min-width: 5rem;
	height: 2rem;

	padding: 0.25rem;
	background-color: #eee;
	border: 1px solid #ccc;
`;

export const TableData = styled.td`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;

	width: 100%;
	min-width: 5rem;
	height: 2rem;

	padding: 0.25rem;
	border: 1px solid #ccc;

	font-family: "Inter", sans-serif;
	font-size: 0.8rem;

	color: #222;
`;

export const Heading = styled.h2`
	font-family: "Inter", sans-serif;
	font-size: 0.8rem;
	font-weight: 600;
	color: #000;
`;

export const Button = styled.button`
	background-color: #fff;
	color: #ccc;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-weight: 600;
	font-size: 0.8rem;
	transition: all 0.2s ease-in-out;

	width: 1rem;
	height: 1.5rem;

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: #222;
		color: #fff;
	}
`;
