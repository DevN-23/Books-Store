import { State, Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';
import { CounterState, initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increment, state => {
    return {
      ...state,
      counter: state.counter + 1
    }
  }),
  on(decrement, state => {
    return {
      ...state,
      counter: state.counter - 1
    }
  }),
  on(reset, state => {
    return {
      ...state,
      counter: 0
    }
  })
);
export function counterReducer(state = initialState, action: Action) {
  return _counterReducer(state, action);
}