import { INCREMENT, DECREMENT } from 'src/types/counter';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
