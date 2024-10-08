import {
  Container,
  Center,
  Card,
  CardBody,
  Input,
  FormControl,
  FormLabel,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const toast = useToast();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");

  const enterRoom = () => {
    if (name == "" || roomId == "") {
      toast({
        title: "名前と合言葉を入力してください",
        status: "error",
        isClosable: true,
        position: "top",
      });
      return;
    }
    navigate(`Room?name=${name}&roomId=${roomId}`);
  };

  return (
    <Container pt={20}>
      <Card>
        <CardBody>
          <FormControl>
            <FormLabel>名前</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>合言葉</FormLabel>
            <Input
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
          </FormControl>
          <Center mt={8}>
            <Button colorScheme="teal" size="lg" onClick={enterRoom}>
              入室
            </Button>
          </Center>
        </CardBody>
      </Card>
    </Container>
  );
}
