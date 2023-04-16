import Header from "../../components/Header";
import Logout from "../../components/Logout";
import Crud from "../../components/Crud";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import "../../styles/style.css";

export const Customers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = localStorage.getItem("cad_cliente")
      ? JSON.parse(localStorage.getItem("cad_cliente"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (email) => {
    const newArray = data.filter((item) => item.email !== email);

    setData(newArray);

    localStorage.setItem("cad_cliente", JSON.stringify(newArray));
  };

  return (
    <div id="main-div">
      <Header />
      <Logout />
      <Flex
        className="white-flex"
        maxH={600}
        h="100vh"
        align="center"
        justify="center"
        fontSize="20px"
      >
        <Box maxW={1100} w="100%" h="100vh" py={10} px={2}>
          <Button colorScheme="red" onClick={() => [setDataEdit({}), onOpen()]}>
            NOVO CADASTRO
          </Button>

          <Box overflowY="auto" height="100%">
            <Table mt="9">
              <Thead>
                <Tr>
                  <Th maxW={300} fontSize="16px">
                    CPF
                  </Th>
                  <Th maxW={300} fontSize="16px">
                    EMAIL
                  </Th>
                  <Th maxW={300} fontSize="16px">
                    PHONE
                  </Th>
                  <Th maxW={300} fontSize="16px">
                    ACADEMIA
                  </Th>
                  <Th maxW={300} fontSize="16px">
                    NOME
                  </Th>
                  <Th maxW={300} fontSize="16px">
                    SENHA
                  </Th>
                  <Th maxW={300} fontSize="16px">
                    PLANO
                  </Th>
                  <Th maxW={300} fontSize="16px">
                    PROFESSOR
                  </Th>
                  <Th maxW={300} fontSize="16px">
                    DATA NASCIMENTO
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map(
                  (
                    {
                      cpf,
                      email,
                      phone,
                      academia,
                      name,
                      password,
                      plano,
                      professor,
                      dataNascimento,
                    },
                    index
                  ) => (
                    <Tr
                      key={index}
                      cursor="pointer "
                      _hover={{ bg: "gray.100" }}
                    >
                      <Td maxW={300}>{cpf}</Td>
                      <Td maxW={300}>{email}</Td>
                      <Td maxW={300}>{phone}</Td>
                      <Td maxW={300}>{academia}</Td>
                      <Td maxW={300}>{name}</Td>
                      <Td maxW={300}>{password}</Td>
                      <Td maxW={300}>{plano}</Td>
                      <Td maxW={300}>{professor}</Td>
                      <Td maxW={300}>{dataNascimento}</Td>

                      <EditIcon
                        fontSize={20}
                        onClick={() => [
                          setDataEdit({
                            cpf,
                            email,
                            phone,
                            academia,
                            name,
                            password,
                            plano,
                            professor,
                            dataNascimento,
                            index,
                          }),
                          onOpen(),
                        ]}
                      />

                      <Td p={0}>
                        <DeleteIcon
                          fontSize={20}
                          onClick={() => handleRemove(email)}
                        />
                      </Td>
                    </Tr>
                  )
                )}
              </Tbody>
            </Table>
          </Box>
        </Box>
        {isOpen && (
          <Crud
            isOpen={isOpen}
            onClose={onClose}
            data={data}
            setData={setData}
            dataEdit={dataEdit}
            setDataEdit={setDataEdit}
          />
        )}
      </Flex>
    </div>
  );
};
