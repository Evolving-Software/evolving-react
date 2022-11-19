import DrawerNavigation from 'app/components/DrawerNavigation'
import Footer from 'app/components/footer'
import { Text, useSx, View, H1, H2, P, Row, A } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

export default function HomeScreen() {
  const sx = useSx()

  return (

    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <H1 sx={{ fontWeight: '800' }}>Welcome to Evolving React.</H1>
      <H2 sx={{ fontWeight: '600' }}>A cross platform React Native Framework for the Evolving Web.</H2>
      <View sx={{ maxWidth: 600 }}>
        <P sx={{ textAlign: 'center' }}>
          Evolving React is a collection of projects from the React, React Native, Rust, and Web communities that are designed to work together to create a cross platform React Native Framework for the Evolving Web.
        </P>
        <P sx={{ textAlign: 'center' }}>
          More features coming soon.
        </P>
      </View>
      <View sx={{ height: 32 }} />
      <Row>
        <TextLink
          href="/user/evolving-solutions"
          textProps={{
            style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
          }}
        >
          Regular Link
        </TextLink>
        <View sx={{ width: 32 }} />
        <MotiLink
          href="/user/evolving-solutions"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          from={{
            scale: 0,
            rotateZ: '0deg',
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text
            selectable={false}
            sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
          >
            Moti Link
          </Text>
        </MotiLink>
      </Row>
    </View>
  )
}
