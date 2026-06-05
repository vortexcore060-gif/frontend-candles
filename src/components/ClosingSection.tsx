import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { brandColors } from "../theme";
import { whatsappUrl } from "../utils/whatsapp";

export default function ClosingSection() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 500, md: 640 },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <Box
        component="img"
        src="/closing-candle.webp"
        alt="Aromas del Alma - ilumina tus emociones"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(61,43,31,0.88) 50%, rgba(61,43,31,0.5) 100%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ maxWidth: 600 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
            <Box sx={{ width: 32, height: 1, bgcolor: brandColors.gold }} />
            <Typography
              variant="overline"
              sx={{
                color: brandColors.gold,
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
              }}
            >
              Aromas del Alma
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              color: "#FFFDF9",
              mb: 3,
              fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem" },
              lineHeight: 1.15,
            }}
          >
            No solo ilumines tu hogar.{" "}
            <Box
              component="span"
              sx={{
                fontStyle: "italic",
                color: brandColors.gold,
              }}
            >
              Ilumina tus emociones.
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,253,249,0.75)",
              mb: 6,
              maxWidth: 480,
              fontSize: "1.05rem",
              lineHeight: 1.9,
            }}
          >
            Descubre por qué cada vez más personas eligen Aromas del Alma para
            transformar sus espacios en experiencias memorables.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href={whatsappUrl(
              "Hola, quiero mi vela Aromas del Alma. ¿Cómo puedo hacer mi pedido?",
            )}
            target="_blank"
            startIcon={<WhatsAppIcon sx={{ fontSize: "1.3rem !important" }} />}
            sx={{
              bgcolor: brandColors.gold,
              color: brandColors.darkBrown,
              px: 5,
              py: 2,
              fontSize: "0.75rem",
              "&:hover": {
                bgcolor: brandColors.lightGold,
                transform: "translateY(-3px)",
                boxShadow: "0 8px 30px rgba(216,185,121,0.45)",
              },
            }}
          >
            Quiero mi vela Aromas del Alma
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
