import type { FavoritePokemon } from '@interfaces/favorite-pokemons'
import { createSignal, For } from 'solid-js';
import { FavoritePokemonCard } from './FavoritePokemonCard';

const getLocalStoragePokemons = () => {
    const FavoritePokemons = JSON.parse(
        localStorage.getItem("favorites") ??"[]"
    )
    return FavoritePokemons;
}

export const FavoritePokemons = () => {
    const [pokemons, setPokemons]= createSignal<FavoritePokemon[]>(getLocalStoragePokemons());

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">
        <For  each={pokemons()}>
            {(pokemon) => <FavoritePokemonCard pokemon={pokemon}/>}

        </For>
        </div>
    )
}
