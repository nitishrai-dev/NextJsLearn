import {create} from 'zustand';

export const useCounterStore = create((set)=>({
    count:0, // state yes it is state
    increase: () => set((state)=>({count: state.count+1})),
    decrease: () => set((state)=>({count: state.count-1})), 
    reset: () => set(({count: 0})),
}))