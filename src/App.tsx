import { useContext } from "react";
import { PokemonContext } from "./context";
import * as S from "./styles";

function App() {
	const {
		pokemon,
		loading,
		sortByName,
		sortByType,
		sortByHp,
		sortByAttack,
		sortBySpAttack,
		sortByDefense,
		sortBySpDefense,
		sortBySpeed,
		sortByTotal,
	} = useContext(PokemonContext);

	return (
		<S.Container>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<>
					<S.Table>
						<S.TableHeader>
							<S.TableRow>
								<S.TableHeadProperty>
									<S.Heading>Name</S.Heading>
									<S.Button onClick={sortByName}>↓</S.Button>
								</S.TableHeadProperty>
								<S.TableHeadProperty>
									<S.Heading>Type</S.Heading>
									<S.Button onClick={sortByType}>↓</S.Button>
								</S.TableHeadProperty>
								<S.TableHeadProperty>
									<S.Heading>HP</S.Heading>
									<S.Button onClick={sortByHp}>↓</S.Button>
								</S.TableHeadProperty>
								<S.TableHeadProperty>
									<S.Heading>Attack</S.Heading>
									<S.Button onClick={sortByAttack}>
										↓
									</S.Button>
								</S.TableHeadProperty>
								<S.TableHeadProperty>
									<S.Heading>Defense</S.Heading>
									<S.Button onClick={sortByDefense}>
										↓
									</S.Button>
								</S.TableHeadProperty>
								<S.TableHeadProperty>
									<S.Heading>Sp. Attack</S.Heading>
									<S.Button onClick={sortBySpAttack}>
										↓
									</S.Button>
								</S.TableHeadProperty>
								<S.TableHeadProperty>
									<S.Heading>Sp. Defense</S.Heading>
									<S.Button onClick={sortBySpDefense}>
										↓
									</S.Button>
								</S.TableHeadProperty>
								<S.TableHeadProperty>
									<S.Heading>Speed</S.Heading>
									<S.Button onClick={sortBySpeed}>↓</S.Button>
								</S.TableHeadProperty>
								<S.TableHeadProperty>
									<S.Heading>Total</S.Heading>
									<S.Button onClick={sortByTotal}>↓</S.Button>
								</S.TableHeadProperty>
							</S.TableRow>
						</S.TableHeader>
						<S.TableBody>
							{pokemon.map((poke: any, index: number) => (
								<S.TableRow key={index}>
									<S.TableData>{poke.name}</S.TableData>
									<S.TableData>{poke.type}</S.TableData>
									<S.TableData>{poke.hp}</S.TableData>
									<S.TableData>{poke.attack}</S.TableData>
									<S.TableData>{poke.defense}</S.TableData>
									<S.TableData>{poke.spAttack}</S.TableData>
									<S.TableData>{poke.spDefense}</S.TableData>
									<S.TableData>{poke.speed}</S.TableData>
									<S.TableData>{poke.total}</S.TableData>
								</S.TableRow>
							))}
						</S.TableBody>
					</S.Table>
				</>
			)}
		</S.Container>
	);
}

export default App;
