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
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

const CrudCustomers = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [cpf, setCpf] = useState(dataEdit.cpf || "");
  const [email, setEmail] = useState(dataEdit.email || "");
  const [phone, setPhone] = useState(dataEdit.phone || "");
  const [academia, setAcademia] = useState(dataEdit.academia || "");
  const [name, setName] = useState(dataEdit.name || "");
  const [password, setPassword] = useState(dataEdit.password || "");
  const [plano, setPlano] = useState(dataEdit.plano || "");
  const [professor, setProfessor] = useState(dataEdit.professor || "");
  const [dataNascimento, setDataNascimento] = useState(
    dataEdit.dataNascimento || ""
  );

  const handleSave = () => {
    if (
      !cpf ||
      !email ||
      !phone ||
      !academia ||
      !name ||
      !password ||
      !plano ||
      !professor ||
      !dataNascimento
    )
      return;

    if (cpfAlreadyExists()) {
      return alert("CPF já cadastrado!");
    }

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { name, email };
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [
          ...(data ? data : []),
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
        ]
      : [...(data ? data : [])];

    setData(newDataArray);

    onClose();
  };

  function handlePlanoChange(value) {
    setPlano(value);
  }

  const cpfAlreadyExists = () => {
    if (dataEdit.cpf !== cpf && data?.length) {
      return data.find((item) => item.cpf === cpf);
    }

    return false;
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastro de Clientes</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="modal-body">
            <FormControl display="flex" flexDir="column" gap={4}>
              <Box>
                <FormLabel>CPF</FormLabel>
                <Input
                  type="text"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Celular</FormLabel>
                <Input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Academia</FormLabel>
                <Input
                  type="text"
                  value={academia}
                  onChange={(e) => setAcademia(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Nome</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Plano</FormLabel>
                <RadioGroup onChange={handlePlanoChange} value={plano}>
                  <Stack spacing={2}>
                    <Radio name="bronze" value="bronze">
                      Bronze
                    </Radio>
                    <Radio name="silver" value="silver">
                      Silver
                    </Radio>
                    <Radio name="gold" value="gold">
                      Gold
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Box>
              <Box>
                <FormLabel>Professor</FormLabel>
                <Input
                  type="text"
                  value={professor}
                  onChange={(e) => setProfessor(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Data de nascimento</FormLabel>
                <Input
                  type="date"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
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

export default CrudCustomers;
