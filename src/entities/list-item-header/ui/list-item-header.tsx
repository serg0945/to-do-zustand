import { useState, type FC } from 'react'
import ConfirmIcon from '@/shared/assets/confirm.svg'
import { useListStore } from '@/entities/list/model'
import './style.css'

export const ListItemHeader: FC = () => {
  const addListItem = useListStore((state) => state.addListItem)
  const [value, setValue] = useState('')
  return (
    <div className="list-item-header">
      <input
        placeholder="Введите текст"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button
        onClick={() => {
          addListItem(value)
          setValue('')
        }}
      >
        <img src={ConfirmIcon} />
      </button>
    </div>
  )
}
