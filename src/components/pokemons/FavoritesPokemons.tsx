import type { FavoritePokemon } from '@interfaces/favorite-pokemons'
import { createSignal, For } from 'solid-js';

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
            {
                (pokemons) =>
                <h1>{ pokemons.name }</h1>
            }

        </For>
        </div>
    )
}
