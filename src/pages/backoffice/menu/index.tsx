import Layout from "@/components/BackofficeLayout";
import NewMenuDialog from "@/components/NewMenuDialog";
import { NewMenuParams } from "@/types/menu";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [newMenu, setNewMenu] = useState<NewMenuParams>({ name: "", price: 0 });
  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box>
          <Button
            variant="contained"
            sx={{ bgcolor: "#26355D", "&:hover": { bgcolor: "#405589" } }}
            onClick={() => setOpen(true)}
          >
            New Menu
          </Button>
        </Box>
        <NewMenuDialog
          open={open}
          setOpen={setOpen}
          newMenu={newMenu}
          setNewMenu={setNewMenu}
        />
      </Box>
    </Layout>
  );
};

export default Menu;
