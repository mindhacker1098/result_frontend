import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const Result = () => {
  const location = useLocation();
  const state = location.state;

  const [data, setData] = useState({
    Name: "",
    Regno: "",
    Result: "",
    subjects: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (state) {
      const { key } = state;
      fetchData(key);
    } else {
      console.log("No state object was passed to the route");
    }
  }, [state]);

  const fetchData = async (key) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://result-itgg.onrender.com/result", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reg: key.trim() }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setData({
          Name: responseData.Name,
          Regno: responseData.Regno,
          Result: responseData.Result,
          subjects: responseData.data,
        });
      } else {
        console.error("Failed to fetch data.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="84vh"
        >
          <FaSpinner
            size={40}
            style={{ animation: "spin 1s linear infinite" }}
          ></FaSpinner>
        </Box>
      ) : (
        <Flex h={"82vh"} flexDir={"column"}>
          <VStack>
            <Text>{data.Name}</Text>
            <Text>{data.Regno}</Text>
          </VStack>

          <Flex
            justifyContent={"center"}
            overflowY={"auto"}
            css={{
              "&::-webkit-scrollbar": {
                width: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#D6E2F8",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#D6E2F8",
              },
              "&::-webkit-scrollbar-thumb:active": {
                background: "#D6E2F8",
              },
            }}
          >
            <Table
              variant="simple"
              w={"60%"}
              justifyContent={"center"}
              fontSize={"30px"}
            >
              <Thead>
                <Tr>
                  <Th>Subject Name</Th>
                  <Th>Grade</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.subjects &&
                  data.subjects.map((subject, index) => (
                    <Tr key={index} textAlign={"center"}>
                      <Td w={"50%"}>
                        <Text fontSize={"15px"}>{subject["Subject Name"]}</Text>
                      </Td>
                      <Td w={"50%"}>
                        <Text fontSize={"15px"}>{subject.Grade}</Text>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </Flex>
          <VStack>
            <Text>Result-{data.Result}</Text>
          </VStack>
        </Flex>
      )}
    </>
  );
};

export default Result;
