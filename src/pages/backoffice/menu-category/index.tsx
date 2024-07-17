import Layout from "@/components/BackofficeLayout";
import NewMenuCategoryDialog from "@/components/NewMenuCategoryDialog";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const MenuCategory = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box>
          <Button
            variant="contained"
            sx={{ bgcolor: "#26355D", "&:hover": { bgcolor: "#405589" } }}
            onClick={() => setOpen(true)}
          >
            New Menu Category
          </Button>
        </Box>
      </Box>
      <NewMenuCategoryDialog open={open} setOpen={setOpen} />
    </Layout>
  );
};

export default MenuCategory;
