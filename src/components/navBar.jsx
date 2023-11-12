import { Text, Image, Flex, HStack, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import cutmlogo from "./cutm.png";

const NavBar = () => {
  const navigate = useNavigate();
  const handleNavi = () => {
    navigate("/signin");
  };
  return (
    <>
      <Flex
        align="center"
        justifyContent={"space-around"}
        paddingX={4}
        paddingY={2}
        borderBottom="1px solid #E2E8F0"
        bg="#C5E7FC"
        boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      >
        <a
          href="https://cutm.ac.in"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Image
            alt="Logo"
            width={100}
            height={45}
            src={cutmlogo}
            marginLeft={"10px"}
          />
        </a>
        <Spacer />
        <Text fontSize="13px" fontWeight="bold" marginRight={"15px"}>
          <a
            href="https://courseware.cutm.ac.in/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Cutm Courseware
          </a>
        </Text>
        <Text fontSize="13px" fontWeight="bold" marginRight={"15px"}>
          <a
            href="https://cutm.ac.in"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Cutm erp
          </a>
        </Text>
        <Text fontSize="13px" fontWeight="bold" marginRight={"15px"}>
          <a
            href="https://www.linkedin.com/in/shakti-prasad-nahak-b5274a218/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            About us
          </a>
        </Text>
        <HStack
          justifyContent={"flex-end"}
          backgroundColor={"#28DBF7"}
          borderRadius={"100px"}
          w={"112px"}
          h={"30px"}
          marginRight={"15px"}
          onClick={handleNavi}
        >
          <Text fontWeight="bold" marginRight={"6px"}>
            Log in
          </Text>
          <Flex
            borderRadius={"50%"}
            h={"20px"}
            w={"20px"}
            backgroundColor={"white"}
            justifyContent={"center"}
            alignItems={"center"}
            marginRight={"5px"}
          >
            <BsFillPersonFill backgroundColor="white" />
          </Flex>
        </HStack>
      </Flex>
    </>
  );
};
export default NavBar;
