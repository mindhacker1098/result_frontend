import React, { useState } from "react";
import {
  ChakraProvider,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Flex,
} from "@chakra-ui/react";

const UploadExcel = () => {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please choose a file.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    fetch("https://result-itgg.onrender.com/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        toast({
          title: "Success",
          description: data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        toast({
          title: "Error",
          description: "Error uploading file.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const DeleteFile = () => {
 

 

    fetch("https://result-itgg.onrender.com/deleteall")
      .then((data) => {
        toast({
          title: "Success",
          description: "All files deleted",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        toast({
          title: "Error",
          description: "Error Deleting file.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <ChakraProvider>
      <Flex
        justifyContent={"center"}
        h={"85vh"}
        w={"100%"}
        alignItems={"center"}
      >
        <Flex p={4} flexDir={"column"}>
          <Heading as="h1" mb={4}>
            Upload Excel File
          </Heading>
          <FormControl>
            <FormLabel htmlFor="excelFile">Choose an Excel file:</FormLabel>
            <Input
              type="file"
              id="excelFile"
              name="file"
              accept=".xlsx"
              onChange={handleFileChange}
            />
          </FormControl>
          <Button mt={4} colorScheme="teal" onClick={uploadFile}>
            Upload
          </Button>
          <Button mt={4} colorScheme="teal" onClick={DeleteFile}>
            Delete ALL
          </Button>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default UploadExcel;
