import Header from "../../components/Header";
import Logout from "../../components/Logout";
import CrudCustomers from "../../components/CrudCustomers";
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

import Cookies from "js-cookie";
import "../../styles/style.css";
import axiosInstance from "../../instances/axiosInstances";

export const Customers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    lerAlunos();
  }, []);

  const lerAlunos = () => {
    const token = Cookies.get("auth_token");
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const decodedPayload = JSON.parse(atob(base64));

    const id = decodedPayload.id;
    const url = "/alunos/read/" + id;

    console.log(id);

    axiosInstance
      .get(url)
      .then((res) => {
        if(res.data){
          console.log(res.data);
          setData(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const handleRemove = (cpf) => {
    const url = "/alunos/delete/" + cpf;

    axiosInstance
      .post(url)
      .then((res) => {
        console.log("Removido com sucesso");
      })
      .catch((err) => {
        console.log(err);
      });
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
        <Box maxW={1350} w="100%" h="100vh" py={10} px={2}>
          <Button colorScheme="red" onClick={() => [setDataEdit({}), onOpen()]}>
            NOVO CADASTRO
          </Button>

          <Box overflowY="auto" height="100%">
            <Table mt="9">
              <Thead>
                <Tr color="black">
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
                      color="black"
                    >
                      <Td maxW={300} fontSize="sm">
                        {cpf}
                      </Td>
                      <Td maxW={300} fontSize="sm">
                        {email}
                      </Td>
                      <Td maxW={300} fontSize="md">
                        {phone}
                      </Td>
                      <Td maxW={300} fontSize="md">
                        {academia}
                      </Td>
                      <Td maxW={300} fontSize="md">
                        {name}
                      </Td>
                      <Td maxW={300} fontSize="sm">
                        {password}
                      </Td>
                      <Td maxW={300} fontSize="md">
                        {plano}
                      </Td>
                      <Td maxW={300} fontSize="md">
                        {professor}
                      </Td>
                      <Td maxW={300} fontSize="md">
                        {dataNascimento}
                      </Td>
                      <Td>
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

                        <DeleteIcon
                          fontSize={20}
                          onClick={() => 
                            handleRemove(cpf)
                          }
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
          <CrudCustomers
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
