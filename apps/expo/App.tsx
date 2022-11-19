import DrawerNavigation from 'app/components/DrawerNavigation'
import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'

export default function App() {
  return (
    <Provider>
      <DrawerNavigation />
    </Provider>
  )
}
