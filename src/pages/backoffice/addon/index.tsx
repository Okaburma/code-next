import Layout from "@/components/BackofficeLayout";
import NewAddonDialog from "@/components/NewAddonDialog";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Addon = () => {
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
            New Addon
          </Button>
        </Box>
      </Box>
      <NewAddonDialog open={open} setOpen={setOpen} />
    </Layout>
  );
};

export default Addon;
