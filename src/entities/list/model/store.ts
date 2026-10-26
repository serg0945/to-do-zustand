import type { ListItemProps } from '@/entities/list-item'
import type { ListState } from '@/entities/list/lib'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const useListStore = create<ListState>()(
  persist(
    immer((set) => ({
      list: [],
      addListItem: (value: string) =>
        set((state) => {
          state.list.push({ id: `${Date.now()}-${Math.random()}`, value })
        }),
      editListItem: (id: string, value: string) => {
        set((state) => {
          const item = state.list.find((item: ListItemProps) => item.id === id)
          if (item) item.value = value
        })
      },
      deleteListItem: (id: string) => {
        set((state) => {
          state.list = state.list.filter(
            (item: ListItemProps) => item.id !== id,
          )
        })
      },
    })),
    { name: 'listStore' },
  ),
)
