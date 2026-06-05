import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { whatsappUrl } from "../utils/whatsapp";

export default function WhatsAppButton() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 24, md: 32 },
        right: { xs: 20, md: 32 },
        zIndex: 1400,
        "@keyframes pulse": {
          "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.5)" },
          "70%": { boxShadow: "0 0 0 14px rgba(37, 211, 102, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" },
        },
        animation: "pulse 2.5s ease-out infinite",
        borderRadius: "50%",
      }}
    >
      <Tooltip title="Hablar por WhatsApp" placement="left" arrow>
        <Fab
          component="a"
          href={whatsappUrl(
            "Hola, me interesa conocer más sobre las velas Aromas del Alma.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: "#25D366",
            color: "#fff",
            width: 60,
            height: 60,
            "&:hover": {
              bgcolor: "#1DA851",
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease",
            boxShadow: "0 4px 20px rgba(37, 211, 102, 0.5)",
          }}
        >
          <WhatsAppIcon sx={{ fontSize: "1.8rem" }} />
        </Fab>
      </Tooltip>
    </Box>
  );
}
