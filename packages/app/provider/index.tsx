import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import { NativeBaseProvider } from 'native-base'
import Footer from 'app/components/footer'
import DrawerNavigation from 'app/components/DrawerNavigation'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <NativeBaseProvider>
        {/* <DrawerNavigation /> */}
        <Dripsy>
          {children}
        </Dripsy>
      </NativeBaseProvider>
    </NavigationProvider>
  )
}
