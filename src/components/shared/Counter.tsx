import { createSignal } from "solid-js";

export const Counter = () => {
    const [ counter, setCounter] = createSignal(10);

    
    return (
        <>
            <h1 class="text-4xl">Counter</h1>
            <h3 class="text-xl pb-2">Value: { counter() }</h3>
            <button 
                class="bg-pink-400 p-2 mr-2 rounded"
                onClick={() => setCounter((prev) => prev +1)}
            >+1</button>
            <button 
                class="bg-pink-400 p-2 mr-2 rounded"
                onClick={() => setCounter((prev) => prev -1)}
            >-1</button>
        </>
    );
}