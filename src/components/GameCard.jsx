import { Card, CardBody, Heading, Image, Text, HStack } from '@chakra-ui/react'
import React from 'react'

const GameCard = ({ game }) => {
    const platformNames = game.platforms.map(({ platform }) => platform.name);

  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image} />
      <CardBody>
      <Heading fontSize='2xl'>{game.name}</Heading>
      <HStack justifyContent='space-between' marginBottom={3}>
          {/* Display platform names */}
          <Text fontSize='sm'>{platformNames.join(', ')}</Text>
          {/* Add any additional content for HStack if needed */}
        </HStack>
        
      </CardBody>
    </Card>
  )
}

export default GameCard