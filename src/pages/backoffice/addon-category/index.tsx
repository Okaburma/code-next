import Layout from "@/components/BackofficeLayout";
import NewAddonCategoryDialog from "@/components/NewAddonCategoryDialog";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const AddonCategory = () => {
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
            New AddonCategory
          </Button>
        </Box>
      </Box>
      <NewAddonCategoryDialog open={open} setOpen={setOpen} />
    </Layout>
  );
};

export default AddonCategory;
