export class ContextAction {
  // e.g. label === "Выкинуть", handler === () => {dispatch(removeItem(item));mp.trigger()}
  constructor(public label: string, public handler: () => any) {}
}