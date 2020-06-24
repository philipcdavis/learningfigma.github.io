import React from 'react'
import styled from 'styled-components'
import { color } from './Tile'
import { Text, Box, Heading, Flex } from 'rebass/styled-components'
import { BtnRainbow } from './Button'
import { colorChange } from './Utils'
import PurchasePoint from './PurchasePoint'

const PurchaseCard = function(props) {
  return (
    <Card px={[3,4,"100px"]} py={[4,5]}>
      <Box width={[1]} css={{maxWidth: "580px"}} mb={[3,5]} mx="auto">
        <Heading color="white" textAlign="center" mb={2} fontSize={[4,5]}>No Subscription Pricing</Heading>
        <Text color="white" textAlign="center" fontSize={[17, 19]} mb={4} mt={3}>
          Pay once and you'll get all future updates. If you're not satisfied with the course, let me know within 7 days and I'll refund you.
        </Text>
      </Box>
      <Flex flexWrap="wrap">
        <Box width={[1,"500px"]} mx="auto" pt={2}>
          <PurchasePoint>One Time Payment</PurchasePoint>
          <PurchasePoint>Source Files Included</PurchasePoint>
          <PurchasePoint>Download or Stream HD Videos</PurchasePoint>
        </Box>
        <Box textAlign="center" mx="auto" width={[1,"250px"]}>
          <Strikethrough mt={0} fontSize={[3,4]} color={color.gray1}>$100</Strikethrough>
          <Heading lineHeight={1} mb={3} fontSize={[6,7]} color="white">$49</Heading>
          <BtnRainbow href="https://gumroad.com/l/reactfordesign" target="_blank">Get Access Now</BtnRainbow>
        </Box>
      </Flex>
    </Card>
  )
};

const Card = styled(Box)`
  border-radius: 12px;
  border: 2px solid white;
  animation: ${colorChange("border-color", 0.3)} 10s infinite alternate;
  max-width: 50em;
  margin: 0 auto;
`;

const Strikethrough = styled(Heading)`
  position: relative;
  display: inline-block;
  &:before {
        border-bottom: 3px solid white;
        position: absolute;
        content: "";
        width: 100%;
        height: 50%;
    }
`;

export default PurchaseCard;
