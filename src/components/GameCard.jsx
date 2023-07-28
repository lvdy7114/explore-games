import { Card, CardBody, Heading, Image, Text, HStack, Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon } from '@chakra-ui/react'
import React from 'react'

const GameCard = ({ game }) => {
    const platformNames = game.platforms.map(({ platform }) => platform.name);
   

  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image} />
      <CardBody>
      <Heading fontSize='2xl' marginBottom={2}>{game.name}</Heading>
      <Accordion allowMultiple>
          {/* Accordion Item for Platforms */}
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Text flex="1" textAlign="left">
                  Platforms
                </Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text fontSize="sm">{platformNames.join(', ')}</Text>
            </AccordionPanel>
          </AccordionItem>
          {/* Accordion Item for Ratings */}
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Text flex="1" textAlign="left">
                  Ratings
                </Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text fontSize="sm">Metacritic: {game.metacritic}<br/>
                                  Rating: {game.rating}</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  )
}

export default GameCard