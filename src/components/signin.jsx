import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  InputRightElement,
  InputGroup,
  InputLeftElement,
  FormErrorMessage,
  FormLabel,
  ChakraProvider,
  VStack
} from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { TfiLock } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const navigate = useNavigate();
  const handleNavi=()=>{

navigate("/upload");

  }
  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
    setIsEmailError(false);
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(emailInput)) {
      setIsEmailError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    validateEmail();

    // Check if the email is valid
    if (isEmailError) {
      return;
    }

    // Replace this API endpoint with your actual backend endpoint
    const apiUrl = "https://result-itgg.onrender.com/login";

    const data = {
      email: emailInput,
      password: passwordInput,
      remember: checked,
      role: "User",
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Login successful");
        // Redirect or perform the necessary actions upon successful login
        handleNavi();
      } else {
        console.error("Login failed:", result.message);
        // Handle failed login, show an error message, etc.
        alert("Incorrect User or Password")
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle other errors, network issues, etc.
    }
  };

  const handlePasswordClick = () => setShowPassword(!showPassword);

  return (
    <ChakraProvider>
      <Flex
        backgroundColor="F2F6FD"
        height={"85vh"}
        align={"center"}
        justify={"center"}
        overflow={"hidden"}
      >
        <VStack
          backgroundColor="F2F6FD"
          direction={{ base: "column", md: "row" }}
          align={"center"}
          justify={"center"}
          w={"55%"}
        >
          <Box rounded={"lg"} background="F2F6FD" p={8}>
            <Heading fontSize={"4xl"} paddingBottom={"8"} textAlign={"center"}>
              Sign In
            </Heading>
            <Stack spacing={4}>
              <FormControl
                variant={"another_floating"}
                id="email"
                isInvalid={isEmailError}
              >
                <InputGroup size="md" display={"flex"} gap={"4"}>
                  <InputLeftElement pointerEvents="none">
                   <TfiEmail/>
                  </InputLeftElement>
                  <Input
                    value={emailInput}
                    onChange={handleEmailChange}
                    placeholder="Email"
                    type="email"
                  />
                  <FormLabel
                    color={"gray.500"}
                    display="flex"
                    alignItems={"center"}
                  >
                   
                  </FormLabel>
                </InputGroup>
                {isEmailError && (
                  <FormErrorMessage>
                    Please provide a valid email
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl id="password" variant={"another_floating"}>
                <InputGroup size="md" display={"flex"} gap={"4"}>
                  <InputLeftElement pointerEvents="none">
                    <TfiLock />
                  </InputLeftElement>
                  <InputRightElement>
                    <Button
                      color={"#797979"}
                      size={"xl"}
                      onClick={handlePasswordClick}
                      background={""}
                    >
                      {showPassword ? (
                        <AiOutlineEye />
                      ) : (
                        <AiOutlineEyeInvisible />
                      )}
                    </Button>
                  </InputRightElement>
                  <Input
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                  />
                  <FormLabel
                    color={"gray.500"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    
                  </FormLabel>
                  
                </InputGroup>
              </FormControl>
              <Stack spacing={6} mt={"10px"}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                  >
                    Remember me
                  </Checkbox>
                  <Link color={"#065AD8"} fontWeight={"500"}>
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  bg={"#065AD8"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }}
                  borderRadius={"xl"}
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>
              </Stack>
            </Stack>
          </Box>
        </VStack>
      </Flex>
    </ChakraProvider>
  );
}
