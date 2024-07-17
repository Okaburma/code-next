import Layout from "@/components/BackofficeLayout";
import NewLocationDialog from "@/components/NewLocationDialog";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Location = () => {
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
            New Location
          </Button>
        </Box>
      </Box>
      <NewLocationDialog open={open} setOpen={setOpen}/>
    </Layout>
  );
};

export default Location;
