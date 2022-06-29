import { mock } from 'app/types/mock'
import { View, H1 } from 'dripsy'
import Item from './item'

const List = ({ title, itens }: mock) => {
  return (
    <View sx={{ paddingX: 3 }}>
      <H1 sx={{ fontWeight: 'bold', fontSize: 25, color: '#464646' }}>
        {title}
      </H1>
      {itens.map((item, index) => {
        return <Item key={index} {...item} />
      })}
    </View>
  )
}

export default List
