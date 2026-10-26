import { useState, type FC } from 'react'
import ConfirmIcon from '@/shared/assets/confirm.svg'
import TrashIcon from '@/shared/assets/trash.svg'
import { useListStore } from '@/entities/list'
import type { ListItemProps } from '@/entities/list-item/lib'
import './style.css'

export const ListItem: FC<ListItemProps> = ({ id, value }) => {
  const deleteListItem = useListStore((state) => state.deleteListItem)
  const editListItem = useListStore((state) => state.editListItem)
  const [inputValue, setInputValue] = useState('')
  return (
    <div className="list-item">
      <input
        defaultValue={value}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => editListItem(id, inputValue)}>
        <img src={ConfirmIcon} />
      </button>
      <button onClick={() => deleteListItem(id)}>
        <img src={TrashIcon} />
      </button>
      {}
    </div>
  )
}
