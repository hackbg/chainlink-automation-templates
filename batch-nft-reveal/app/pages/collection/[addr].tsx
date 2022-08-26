import { useRouter } from 'next/router'
import { Section } from '../../components/layout'
import { RevealInfo, Mint, Gallery } from '../../components/collection/Index'
import { Text } from '@chakra-ui/react'

function Collection(): JSX.Element {
  const router = useRouter()
  const addr = router.query.addr as string

  if (addr) {
    return (
      <>
        <Section>
          <Mint contractAddress={addr}></Mint>
        </Section>
        <Section>
          <RevealInfo contractAddress={addr}></RevealInfo>
        </Section>
        <Section>
          <Gallery contractAddress={addr}></Gallery>
        </Section>
      </>
    )
  } else {
    return (
      <>
        <Text>Loading</Text>
      </>
    )
  }
}

export default Collection
