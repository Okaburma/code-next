import Layout from "@/components/BackofficeLayout";
import NewTableDialog from "@/components/NewTableDialog";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Table = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box>
          <Button
            variant="contained"
            sx={{ bgcolor: "#26355D", "&:hover": { bgcolor: "#405589" } }}
            onClick={() => setOpen(true)}
          >
            New Table
          </Button>
        </Box>
      </Box>
      <NewTableDialog open={open} setOpen={setOpen} />
    </Layout>
  );
};

export default Table;
