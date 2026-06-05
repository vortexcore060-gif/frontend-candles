import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { brandColors } from "../theme";
import { whatsappUrl } from "../utils/whatsapp";

const perks = [
  "Recomendación personalizada",
  "Atención inmediata",
  "Asesoría completamente gratuita",
  "Información de promociones vigentes",
];

export default function ConversionSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        position: "relative",
        overflow: "hidden",
        bgcolor: brandColors.darkBrown,
      }}
    >
      {/* Decorative background pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `radial-gradient(${brandColors.gold} 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Gold top accent */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 80,
          height: 3,
          bgcolor: brandColors.gold,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center" }}>
          {/* Overline */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              mb: 3,
            }}
          >
            <Box
              sx={{ width: 40, height: 1, bgcolor: "rgba(216,185,121,0.5)" }}
            />
            <Typography
              variant="overline"
              sx={{
                color: brandColors.gold,
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
              }}
            >
              Asesoría personalizada
            </Typography>
            <Box
              sx={{ width: 40, height: 1, bgcolor: "rgba(216,185,121,0.5)" }}
            />
          </Box>

          <Typography
            variant="h2"
            sx={{
              color: "#FFFDF9",
              mb: 3,
              fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
              fontStyle: "italic",
            }}
          >
            Descubre cuál es la vela{" "}
            <Box
              component="span"
              sx={{ color: brandColors.gold, fontStyle: "normal" }}
            >
              perfecta para ti
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,253,249,0.75)",
              mb: 6,
              maxWidth: 520,
              mx: "auto",
              fontSize: "1.05rem",
            }}
          >
            Nuestro equipo te ayudará a elegir el aroma ideal según tu
            personalidad, espacio y ocasión.
          </Typography>

          {/* Perks */}
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "center", mb: 7 }}
          >
            {perks.map((perk) => (
              <Grid key={perk} size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    p: 2,
                    bgcolor: "rgba(255,253,249,0.05)",
                    border: `1px solid rgba(216,185,121,0.2)`,
                    textAlign: "left",
                  }}
                >
                  <CheckCircleOutlinedIcon
                    sx={{
                      color: brandColors.gold,
                      fontSize: "1.1rem",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: '"Lato", sans-serif',
                      color: "rgba(255,253,249,0.85)",
                      fontSize: "0.9rem",
                    }}
                  >
                    {perk}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Main CTA */}
          <Button
            variant="contained"
            size="large"
            href={whatsappUrl(
              "Hola, quiero encontrar mi aroma ideal. ¿Pueden ayudarme a elegir la vela perfecta?",
            )}
            target="_blank"
            startIcon={<WhatsAppIcon sx={{ fontSize: "1.3rem !important" }} />}
            sx={{
              bgcolor: "#25D366",
              color: "#fff",
              px: 6,
              py: 2,
              fontSize: "0.8rem",
              "&:hover": {
                bgcolor: "#1DA851",
                transform: "translateY(-3px)",
                boxShadow: "0 8px 30px rgba(37,211,102,0.4)",
              },
            }}
          >
            Quiero encontrar mi aroma ideal
          </Button>

          <Typography
            variant="caption"
            sx={{
              display: "block",
              mt: 2.5,
              color: "rgba(255,253,249,0.45)",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
            }}
          >
            Recibe una recomendación personalizada en pocos minutos a través de
            WhatsApp
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
