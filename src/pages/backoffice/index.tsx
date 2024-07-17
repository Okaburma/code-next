import Layout from "@/components/BackofficeLayout";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const BackofficeApp = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box>
          <Button
            variant="contained"
            sx={{ bgcolor: "#26355D", "&:hover": { bgcolor: "#405589" } }}
            onClick={() =>{}}
          >
            New Table
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default BackofficeApp;
