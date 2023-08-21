const root = document.getElementById('app') as HTMLElement;

// the state object of the cards (specific todos in the list)
interface State {
  id: string,
  title: string
  description: string
  comments?: string[]
}




type Property = keyof State;

export { root };
export type { State, Property };
