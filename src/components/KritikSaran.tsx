"use client";

import { useState } from "react";
import { Button, Textarea, Box, VStack } from "@chakra-ui/react";
import { toast } from "react-hot-toast";

export default function KritikSaran() {
  const [kritik, setKritik] = useState("");
  const [saran, setSaran] = useState("");

  const handleSubmit = () => {
    if (!kritik && !saran) {
      toast.error("Kritik atau saran tidak boleh kosong.");
      return;
    }

    toast.success("Kritik dan saran berhasil dikirim.");
    setKritik("");
    setSaran("");
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="md">
      <VStack spacing={4}>
        <Textarea
          color={"black"}
          placeholder="Tulis kritik Anda"
          value={kritik}
          onChange={(e) => setKritik(e.target.value)}
        />
        <Textarea
          placeholder="Tulis saran Anda"
          value={saran}
          onChange={(e) => setSaran(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleSubmit}>
          Kirim
        </Button>
      </VStack>
    </Box>
  );
}
