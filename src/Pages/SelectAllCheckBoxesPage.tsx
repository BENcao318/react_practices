import React, { useState } from 'react'
import { Checkbox } from '../Components/Checkbox'
import { list } from '../Components/list'

export const SelectAllCheckBoxesPage = () => {
  const [listItems, setListItems] = useState(list)

  const handleChecked = (element: any, checkedValue: boolean) => {
    const temp = listItems.map((item) =>
      item.id === element.id ? { ...item, checked: checkedValue } : item
    )
    setListItems(temp)
  }

  const handleSelectAll = (checkedValue: boolean) => {
    const temp = listItems.map((item) => {
      return {
        ...item,
        checked: checkedValue,
      }
    })
    setListItems(temp)
  }

  return (
    <div>
      <a href="/" className="font-bold">
        Home
      </a>
      <Checkbox
        label="Select All"
        checked={
          listItems.filter((el: any) => el?.checked !== true).length < 1
            ? true
            : false
        }
        onChange={(checked: boolean) => handleSelectAll(checked)}
      />
      <form>
        {listItems.map((el: any) => (
          <Checkbox
            label={el.name}
            key={el.id}
            checked={el?.checked}
            onChange={(checked: boolean) => handleChecked(el, checked)}
          />
        ))}
      </form>
    </div>
  )
}
