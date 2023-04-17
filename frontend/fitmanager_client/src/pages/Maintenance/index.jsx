import Header from "../../components/Header";
import Logout from "../../components/Logout";
import CrudMaintenance from "../../components/CrudMaintenance";
import UpdateMaintenance from "../../components/UpdateMaintenance";
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

export const Maintenance = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});
  const [opcao, setOpcao] = useState();

  useEffect(() => {
    lerManutencoes();
  }, []);

  const lerManutencoes = () => {
    const token = Cookies.get("auth_token");
    
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const decodedPayload = JSON.parse(atob(base64));

    const id = decodedPayload.id;
    const url = "/manutencao/read/" + id;


    axiosInstance
      .get(url)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setData(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemove = (id) => {
    const newArray = data.filter((item) => item.id !== id);
    setData(newArray);
    const url = "/manutencao/delete/" + id;

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
        <Box maxW={1450} w="100%" h="100vh" py={10} px={2}>
          <Button
            colorScheme="red"
            onClick={() => [setOpcao("novo"), setDataEdit({}), onOpen()]}
          >
            NOVA MANUTENÇÃO
          </Button>

          <Box overflowY="auto" height="100%">
            <Table mt="9">
              <Thead>
                <Tr color="black">
                  <Th maxW={300} fontSize="16px">
                    ID
                  </Th>
                  <Th maxW={300} fontSize="16px">
                    ACADEMIA ID
                  </Th>
                  <Th maxW={300} fontSize="16px">
                    TELEFONE EMPRESA
                  </Th>
                  <Th maxW={300} fontSize="16px">
                    EQUIPAMENTO
                  </Th>
                  <Th maxW={300} fontSize="16px">
                    DATA CONSERTO
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map(
                  (
                    { id, academiaId, phoneEmpresa, equipamento, dataConserto },
                    index
                  ) => (
                    <Tr
                      key={index}
                      cursor="pointer "
                      _hover={{ bg: "gray.100" }}
                      color="black"
                    >
                      <Td maxW={300} fontSize="sm">
                        {id}
                      </Td>
                      <Td maxW={300} fontSize="sm">
                        {academiaId}
                      </Td>
                      <Td maxW={300} fontSize="md">
                        {phoneEmpresa}
                      </Td>
                      <Td maxW={300} fontSize="md">
                        {equipamento}
                      </Td>
                      <Td maxW={300} fontSize="sm">
                        {dataConserto}
                      </Td>
                      <Td>
                        <EditIcon
                          fontSize={20}
                          onClick={() => [
                            setOpcao("atualizar"),
                            setDataEdit({
                              id,
                              academiaId,
                              phoneEmpresa,
                              equipamento,
                              dataConserto,
                              index,
                            }),
                            onOpen(),
                          ]}
                        />

                        <DeleteIcon
                          fontSize={20}
                          onClick={() => handleRemove(id)}
                        />
                      </Td>
                    </Tr>
                  )
                )}
              </Tbody>
            </Table>
          </Box>
        </Box>
        {isOpen && opcao === "novo" && (
          <CrudMaintenance
            isOpen={isOpen}
            onClose={onClose}
            data={data}
            setData={setData}
            dataEdit={dataEdit}
            setDataEdit={setDataEdit}
          />
        )}
        {isOpen && opcao === "atualizar" && (
          <UpdateMaintenance
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
