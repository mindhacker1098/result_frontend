import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Input,
  Flex,
  Image,
  HStack,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import ana from "./analitical.png";
import mang from "./magn.png";
import mic from "./mic.png";
import { BiIdCard } from "react-icons/bi";
import { GoEye, GoEyeClosed } from "react-icons/go";

const InputBox = () => {
  const [regno, setRegno] = useState("");
  const navigate = useNavigate();
  const handleNavi = () => {
    navigate("/result", { state: { key: regno } });
  };
  const handleValue = (value) => {
    setRegno(value);
  };

  return (
    <>
      <Flex dir="row" w={"100%"} h={"100vh"}>
        <HStack w={"50%"} h={"100vh"}>
          <Image src={ana} w={"95%"} h={"85vh"}></Image>
        </HStack>

        <VStack h={"100vh"} w={"50%"} marginTop={"5%"}>
          <Image
            src={mang}
            boxSize={"120px"}
            position={"absolute"}
            right={"40%"}
            top={"10%"}
            zIndex={1}
          ></Image>
          <Image
            src={mic}
            boxSize={"120px"}
            position={"absolute"}
            bottom={"3%"}
            zIndex={1}
            right={"0%"}
          ></Image>

          <VStack
            h={"73vh"}
            w={"85%"}
            backgroundColor={"#C5E7FC"}
            spacing={0}
            borderRadius={"10px"}
          >
            <VStack
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              w={"100%"}
              mt={"4%"}
            >
              <Text
                zIndex={2}
                fontSize="65px"
                fontWeight="900"
                fontFamily="Montserrat-Black, Helvetica"
                style={{
                  textShadow: "-5px -5px #28DBF7",
                  background: "transparent",
                  color: "transparent",
                  WebkitTextStroke: "1px black",
                }}
                margin={0}
                marginTop={"15px"}
                ml={"15px"}
              >
                RESULT
              </Text>
            </VStack>
            <VStack
              alignItems={"flex-end"}
              justifyContent={"flex-end"}
              w={"100%"}
              m={0}
            >
              <Text
                fontSize="65px"
                fontWeight="900"
                fontFamily="Montserrat-Black, Helvetica"
                style={{
                  textShadow: "-5px -5px #28DBF7",
                  background: "transparent",
                  color: "transparent",
                  WebkitTextStroke: "1px black",
                }}
                margin={0}
                marginRight={"15px"}
              >
                CHECKER
              </Text>
            </VStack>

            <VStack>
              <VStack alignItems={"flex-start"}>
                <Text fontWeight={"600"}>Registration No</Text>
                <HStack
                  borderRadius={"5px"}
                  boxShadow="0 2px 4px rgba(0, 0, 0, 0.3)"
                  h={"40px"}
                  w={"350px"}
                  backgroundColor="#C5E7FC"
                  justifyContent={"center"}
                >
                  <BiIdCard fontSize={"30px"} />
                  <Input
                    size="md"
                    backgroundColor={"#C5E7FC"}
                    border="none"
                    outline={"none"}
                    fontSize={"20px"}
                    onChange={(e) => handleValue(e.target.value)}
                    value={regno}
                    type="text"
                  />
                </HStack>
              </VStack>

              <VStack marginTop={"30px"}>
                <Button
                  backgroundColor={"#28DBF7"}
                  borderRadius={"8px"}
                  h={"40px"}
                  w={"100px"}
                  border={"none"}
                  boxShadow="0 2px 4px rgba(0, 0, 0, 0.3)"
                  onClick={handleNavi}
                >
                  <Text fontWeight={"bold"} fontSize={"20px"}>
                    Check
                  </Text>
                </Button>
              </VStack>
            </VStack>
          </VStack>
        </VStack>
      </Flex>
    </>
  );
};

export default InputBox;
