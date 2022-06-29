import Details from 'app/components/details'
import List from 'app/components/list'
import Top from 'app/components/top'
import { listMock } from 'app/mocks/listmock'
import { ScrollView } from 'dripsy'

const HomeContainer = () => {
  return (
    <ScrollView>
      <Top />
      <Details />
      <List {...listMock} />
    </ScrollView>
  )
}

export default HomeContainer
