export interface ListState {
  list: { id: string; value: string }[]
  addListItem: (value: string) => void
  editListItem: (id: string, value: string) => void
  deleteListItem: (id: string) => void
}
