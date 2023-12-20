'use client';
import { ReactNode, useEffect, useState } from 'react';
import '../globals.css';

type BoatData = {
	id: number;
	name: string;
	size: string;
};
const boatData: BoatData[] = [
	{ id: 1, name: 'boat1', size: 'L' },
	{ id: 2, name: 'boat2', size: 'S' },
	{ id: 3, name: 'boat3', size: 'XL' },
	{ id: 4, name: 'boat4', size: 'S' },
	{ id: 5, name: 'boat5', size: 'L' },
	{ id: 6, name: 'boat6', size: 'L' },
	{ id: 7, name: 'boat7', size: 'XS' },
	{ id: 8, name: 'boat8', size: 'L' },
	{ id: 9, name: 'boat9', size: 'L' },
	{ id: 10, name: 'boat10', size: 'L' },
];

const TestComponent = () => {
	const [search, setSearch] = useState<string>('');
	const [data, setData] = useState<BoatData[]>(boatData);
	const [filteredData, setFilteredData] = useState<BoatData[]>(boatData);
	useEffect(() => {
		setData(boatData);
	}, []);

	useEffect(() => {
		const filteredDataTemp: BoatData[] = data.filter((item) => {
			return item.name.toLowerCase().includes(search.toLowerCase());
		});
		setFilteredData(filteredDataTemp);
	}, [search]);

	const generateHeaders = (): ReactNode[] => {
		const res = [];
		for (const key of Object.keys(data[0])) {
			res.push(<th key={key}>{key}</th>);
		}
		return res;
	};

	const generateRows = (): ReactNode[] => {
		const res = [];
		if (filteredData) {
			for (const item of filteredData) {
				res.push(
					<tr key={item.id}>
						<td>{item.id}</td>
						<td>{item.name}</td>
						<td>{item.size}</td>
					</tr>
				);
			}
		}
		return res;
	};

	return (
		<div className="container">
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			></input>
			<table>
				<thead>
					<tr>{data && generateHeaders()}</tr>
				</thead>
				<tbody>{data && generateRows()}</tbody>
			</table>
		</div>
	);
};

export default TestComponent;
