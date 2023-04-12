import * as React from "react";

import {
  Toolbar,
  Typography,
  Link,
  CssBaseline,
  Box,
  AppBar,
} from "@mui/material";

const navItems = ["Categories", "Collections"];

export default function DrawerAppBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Material-UI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, key) => (
              <Link
                href={item}
                variant={item}
                key={key}
                sx={{
                  color: "#fff",
                  marginRight: "20px",
                  textDecoration: "none",
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
