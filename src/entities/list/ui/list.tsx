import { ListItemHeader } from '@/entities/list-item-header'
import { ListItem, type ListItemProps } from '@/entities/list-item'
import { useListStore } from '@/entities/list'
import type { FC } from 'react'
import './style.css'

export const List: FC = () => {
  const list = useListStore((state) => state.list)
  return (
    <div className="list">
      <div>
        <ListItemHeader />
        {list.map((item: ListItemProps) => (
          <ListItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
