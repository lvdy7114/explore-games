import { Card, CardBody, Heading, Image, Text, HStack, Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon, Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
    const platformNames = game.platforms.map(({ platform }) => platform.name);
   

  return (
    <Card className='game-card'>
        <Image src={game.background_image} />
      <CardBody>
      <Heading fontSize='2xl' marginBottom={2}>
      <Link to={'/games/' + game.slug}>{game.name}</Link>
      
      </Heading>
      <Accordion allowMultiple>
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
                                  Rating: {game.rating} </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  )
}

export default GameCard