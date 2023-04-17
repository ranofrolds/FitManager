import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import axiosInstance from "../instances/axiosInstances.jsx";

import Cookies from "js-cookie";

const CrudMaintenance = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [id, setCpf] = useState(dataEdit.id || "");
  const [phoneEmpresa, setPhoneEmpresa] = useState(dataEdit.phoneEmpresa || "");
  const [academiaId, setAcademiaId] = useState(dataEdit.academiaId || "");
  const [equipamento, setEquipamento] = useState(dataEdit.equipamento || "");
  const [dataConserto, setDataConserto] = useState(dataEdit.dataConserto || "");
  
  const handleSave = () => {
    const token = Cookies.get("auth_token");
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const decodedPayload = JSON.parse(atob(base64));

    const id = decodedPayload.id;
    setAcademiaId(id);

    if (!id || !phoneEmpresa || !academiaId || !equipamento || !dataConserto)
      return;

    if (cpfAlreadyExists()) {
      return alert("ID já cadastrado!");
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [
          ...(data ? data : []),
          {
            id,
            phoneEmpresa,
            academiaId,
            equipamento,
            dataConserto,
          },
        ]
      : [...(data ? data : [])];

    setData(newDataArray);

    const url = "/alunos/create";

    axiosInstance
      .post(url, {
        id,
        equipamento,
        dataConserto,
        academiaId,
        phoneEmpresa,
      })
      .then((res) => {
        console.log("Salvo manutenção");
      })
      .catch((err) => {
        console.log(err);
      });

    onClose();
  };

  const cpfAlreadyExists = () => {
    if (dataEdit.id !== id && data?.length) {
      return data.find((item) => item.id === id);
    }

    return false;
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastro de Manutenções</ModalHeader>
          <ModalCloseButton />
          <ModalBody classequipamento="modal-body">
            <FormControl display="flex" flexDir="column" gap={4}>
              <Box>
                <FormLabel>ID</FormLabel>
                <Input
                  type="text"
                  value={id}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Telefone Empresa</FormLabel>
                <Input
                  type="text"
                  value={phoneEmpresa}
                  onChange={(e) => setPhoneEmpresa(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Equipamento</FormLabel>
                <Input
                  type="text"
                  value={equipamento}
                  onChange={(e) => setEquipamento(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Data Conserto</FormLabel>
                <Input
                  type="dataConserto"
                  value={dataConserto}
                  onChange={(e) => setDataConserto(e.target.value)}
                />
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="start">
            <Button colorScheme="green" mr={3} onClick={handleSave}>
              SALVAR
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              CANCELAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CrudMaintenance;
