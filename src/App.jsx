import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Box,
  Divider,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

// Import Ikon
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import HelpIcon from "@mui/icons-material/Help";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonCheckIcon from "@mui/icons-material/PersonAdd";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

const drawerWidth = 270;
const appBarHeight = 64;

function App() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { title: "Dashboard", icon: <DashboardIcon /> },
    { title: "Users", icon: <PeopleIcon /> },
    { title: "Customers", icon: <GroupIcon /> },
    { title: "Products", icon: <InventoryIcon /> },
    { title: "Transactions", icon: <ReceiptLongIcon /> },
    { title: "Reports", icon: <AssessmentIcon /> },
    { title: "Help", icon: <HelpIcon /> },
    { title: "Settings", icon: <SettingsIcon /> },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        minHeight: "100vh",
        bgcolor: "#f8f9fc",
        overflowX: "hidden",
      }}
    >
      {/* AppBar: Lebar dan posisi disesuaikan secara dinamis */}
      <AppBar
        position="fixed"
        sx={{
          height: `${appBarHeight}px`,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: "100%",
          boxShadow: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setOpen(!open)}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Dashboard
          </Typography>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Persistent Drawer / Sidebar */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            top: `${appBarHeight}px`,
            height: `calc(100vh - ${appBarHeight}px)`,
            borderRight: "1px solid rgba(0, 0, 0, 0.12)",
          },
        }}
      >
        {/* Identitas Pengguna */}
        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "#f8f9fc",
          }}
        >
          <Avatar
            src="https://i.pravatar.cc/150?img=68"
            alt="Samuel Ambar Pasaribu"
            sx={{ width: 80, height: 80, mb: 1.5 }}
          />
          <Typography variant="h6" fontWeight="bold">
            Samuel Ambar Pasaribu
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Administrator Sistem
          </Typography>
          <Typography variant="caption" color="text.secondary">
            samuel@example.com
          </Typography>
        </Box>

        <Divider />

        {/* Daftar Menu */}
        <List sx={{ p: 1 }}>
          {menuItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <ListItem key={item.title} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => setActiveIndex(index)}
                  sx={{
                    borderRadius: 2,
                    bgcolor: isActive ? "#e3f2fd" : "transparent",
                    color: isActive ? "#1976d2" : "inherit",
                    "&:hover": { bgcolor: "#e3f2fd" },
                  }}
                >
                  <ListItemIcon
                    sx={{ color: isActive ? "#1976d2" : "inherit" }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      {/* Main Content: Menggunakan flexGrow agar otomatis mengisi sisa layar dengan sempurna */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: `${appBarHeight + 32}px`,
          pb: 4,
          px: 4,
          minHeight: "100vh",
          boxSizing: "border-box",
          bgcolor: "#f8f9fc",
          transition: "margin 0.3s ease",
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Dashboard
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Selamat datang di dashboard aplikasi.
          </Typography>

          {/* Kartu Statistik (Grid 4 Kolom Sempurna) */}
          <Grid container spacing={3}>
            {/* Card 1: Total Revenue */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 2, height: "100%" }}>
                <CardContent
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      bgcolor: "#e3f2fd",
                      borderRadius: 2,
                      color: "#1976d2",
                    }}
                  >
                    <AttachMoneyIcon fontSize="large" />
                  </Box>
                  <Box>
                    <Typography color="text.secondary" variant="body2">
                      Total Revenue
                    </Typography>
                    <Typography variant="h5" fontWeight="bold">
                      Rp 25 Jt
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 2: Total Profit */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 2, height: "100%" }}>
                <CardContent
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      bgcolor: "#e8f5e9",
                      borderRadius: 2,
                      color: "#2e7d32",
                    }}
                  >
                    <AssessmentIcon fontSize="large" />
                  </Box>
                  <Box>
                    <Typography color="text.secondary" variant="body2">
                      Total Profit
                    </Typography>
                    <Typography variant="h5" fontWeight="bold">
                      Rp 8.5 Jt
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 3: Active Users */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 2, height: "100%" }}>
                <CardContent
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      bgcolor: "#fff3e0",
                      borderRadius: 2,
                      color: "#ed6c02",
                    }}
                  >
                    <PersonCheckIcon fontSize="large" />
                  </Box>
                  <Box>
                    <Typography color="text.secondary" variant="body2">
                      Active Users
                    </Typography>
                    <Typography variant="h5" fontWeight="bold">
                      1,240
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 4: Pending Orders */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 2, height: "100%" }}>
                <CardContent
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      bgcolor: "#f3e5f5",
                      borderRadius: 2,
                      color: "#9c27b0",
                    }}
                  >
                    <HourglassEmptyIcon fontSize="large" />
                  </Box>
                  <Box>
                    <Typography color="text.secondary" variant="body2">
                      Pending Orders
                    </Typography>
                    <Typography variant="h5" fontWeight="bold">
                      38
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
