const root = document.getElementById('app') as HTMLElement;
interface State {
  innerText?: string;
  text: string
  description: string
  comments?: string[]
}
type Property = keyof State;

export { root };
export type { State, Property };