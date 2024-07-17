import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box>
      <Typography variant="h1">Landing Site</Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Link href={"/backoffice"}>
          <Typography variant="h4">BackOffice</Typography>
        </Link>
        <Link href={"/order"}>
          <Typography variant="h4">OrderApp</Typography>
        </Link>
      </Box>
    </Box>
  );
}
