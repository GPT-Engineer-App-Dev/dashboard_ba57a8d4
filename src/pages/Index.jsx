import { Box, Flex, Text, Button, VStack, HStack, Grid, GridItem, Image } from "@chakra-ui/react";
import { FaUserCircle, FaChartPie, FaClipboardList, FaCog } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" h="100vh">
      <Flex bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
          Dashboard
        </Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaUserCircle />} variant="ghost">
            Profile
          </Button>
          <Button leftIcon={<FaCog />} variant="ghost">
            Settings
          </Button>
        </HStack>
      </Flex>
      <Flex flex={1} p={4}>
        <VStack w="250px" h="full" mr={4} spacing={4}>
          <Button w="full" leftIcon={<FaChartPie />} justifyContent="flex-start">
            Overview
          </Button>
          <Button w="full" leftIcon={<FaClipboardList />} justifyContent="flex-start">
            Reports
          </Button>
          <Button w="full" leftIcon={<FaCog />} justifyContent="flex-start">
            Settings
          </Button>
        </VStack>
        <Box flex={1} bg="gray.100" p={4}>
          <Text mb={4} fontSize="2xl" fontWeight="bold">
            Welcome to Your Dashboard
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem w="100%" h="200px" bg="white" boxShadow="md" borderRadius="md" p={4}>
              <Text fontSize="lg" fontWeight="bold">
                Sales
              </Text>
              <Text fontSize="3xl" fontWeight="bold">
                $15,430
              </Text>
            </GridItem>
            <GridItem w="100%" h="200px" bg="white" boxShadow="md" borderRadius="md" p={4}>
              <Text fontSize="lg" fontWeight="bold">
                Visits
              </Text>
              <Text fontSize="3xl" fontWeight="bold">
                8,293
              </Text>
            </GridItem>
            <GridItem w="100%" h="200px" bg="white" boxShadow="md" borderRadius="md" p={4}>
              <Text fontSize="lg" fontWeight="bold">
                Performance
              </Text>
              <Text fontSize="3xl" fontWeight="bold">
                +5.4%
              </Text>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Index;
