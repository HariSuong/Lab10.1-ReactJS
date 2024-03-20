import { memo, useMemo } from 'react'
import classes from './DemoList.module.css'

const DemoList = ({ items, title }) => {
  const sortItems = useMemo(() => {
    console.log('Items sorted')
    return items.sort((a, b) => a - b)
  }, [items])
  console.log('DemoList RUNNING')

  return (
    <div className={classes.list}>
      <h2>{title}</h2>
      <ul>
        {sortItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default memo(DemoList)
