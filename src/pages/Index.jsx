import React from "react";
import { Box, VStack, HStack, Heading, Text, Button, Select, Image, useColorModeValue } from "@chakra-ui/react";
import { FaCar, FaMapMarkerAlt, FaUserCircle, FaArrowRight } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <VStack spacing={0} align="stretch">
      {/* Header */}
      <Box bg={bgColor} px={4} py={3} shadow="sm">
        <HStack justifyContent="space-between">
          <HStack spacing={2}>
            <FaUserCircle size="24px" />
            <VStack align="start" spacing={0}>
              <Heading size="sm">Hello, User</Heading>
              <Text fontSize="xs">Where to?</Text>
            </VStack>
          </HStack>
          <FaMapMarkerAlt />
        </HStack>
      </Box>

      {/* Map Placeholder */}
      <Box flex="1" bg="blue.200" position="relative">
        <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
          Map Placeholder
        </Text>
        <Image src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXB8ZW58MHx8fHwxNzA5MjcwMzc1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Map" objectFit="cover" width="100%" height="100%" />
      </Box>

      {/* Ride Options */}
      <Box bg={bgColor} p={4}>
        <Heading size="md" mb={2}>
          Choose a ride
        </Heading>
        <Select placeholder="Select car type" icon={<FaCar />}>
          <option value="economy">Economy</option>
          <option value="premium">Premium</option>
          <option value="extraSeats">Extra Seats</option>
        </Select>
      </Box>

      {/* Request Ride Button */}
      <Box p={4}>
        <Button colorScheme="blue" size="lg" leftIcon={<FaArrowRight />} w="full">
          Request Ride
        </Button>
      </Box>
    </VStack>
  );
};

export default Index;
