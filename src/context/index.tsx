import { createContext, useState } from "react";
import { data } from "../assets/index.ts";

interface iPokemonContext {
	pokemon: any;
	loading: boolean;
	sortByName: () => void;
	sortByType: () => void;
	sortByHp: () => void;
	sortByAttack: () => void;
	sortByDefense: () => void;
	sortBySpAttack: () => void;
	sortBySpDefense: () => void;
	sortBySpeed: () => void;
	sortByTotal: () => void;
}

interface iChildren {
	children: any;
}

export const PokemonContext = createContext({} as iPokemonContext);

export const PokemonProvider = ({ children }: iChildren) => {
	const [pokemon, setPokemon] = useState(data);
	const [loading, setLoading] = useState(false);

	const sortBy = async (key: string) => {
		setLoading(true);
		const sortedPokemon = await pokemon.sort((a, b) => {
			if (a[key] > b[key]) {
				return 1;
			}
			if (a[key] < b[key]) {
				return -1;
			}

			return 0;
		});

		await setPokemon(sortedPokemon);
		setLoading(false);
	};

	const sortByName = () => {
		sortBy("name");
	};

	const sortByType = () => {
		sortBy("type");
	};

	const sortByHp = () => {
		sortBy("hp");
	};

	const sortByAttack = () => {
		sortBy("attack");
	};

	const sortByDefense = () => {
		sortBy("defense");
	};

	const sortBySpAttack = () => {
		sortBy("spAttack");
	};

	const sortBySpDefense = () => {
		sortBy("spDefense");
	};

	const sortBySpeed = () => {
		sortBy("speed");
	};

	const sortByTotal = () => {
		sortBy("total");
	};

	return (
		<PokemonContext.Provider
			value={{
				pokemon,
				loading,
				sortByName,
				sortByType,
				sortByHp,
				sortByAttack,
				sortByDefense,
				sortBySpAttack,
				sortBySpDefense,
				sortBySpeed,
				sortByTotal,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
};
