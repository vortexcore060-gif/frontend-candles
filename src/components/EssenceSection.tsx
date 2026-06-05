import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { brandColors } from "../theme";
import { whatsappUrl } from "../utils/whatsapp";

export default function EssenceSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: brandColors.cream,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 6, md: 10 }}
          sx={{ alignItems: "center" }}
        >
          {/* Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                  border: `1px solid ${brandColors.gold}`,
                  opacity: 0.4,
                  zIndex: 0,
                },
              }}
            >
              <Box
                component="img"
                src="/essence-wellness.webp"
                alt="Bienestar y relajación con Aromas del Alma"
                sx={{
                  width: "100%",
                  height: { xs: 360, md: 500 },
                  objectFit: "cover",
                  display: "block",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>

          {/* Text */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ pl: { md: 4 } }}>
              {/* Overline */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}
              >
                <Box sx={{ width: 32, height: 1, bgcolor: brandColors.gold }} />
                <Typography
                  variant="overline"
                  sx={{
                    color: brandColors.gold,
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                  }}
                >
                  Nuestra esencia
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  color: brandColors.darkBrown,
                  mb: 3,
                  fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
                  fontStyle: "italic",
                }}
              >
                Más que velas,{" "}
                <Box
                  component="span"
                  sx={{ color: brandColors.warmGray, fontStyle: "normal" }}
                >
                  experiencias para el alma
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: brandColors.warmGray, mb: 3, fontSize: "1.05rem" }}
              >
                En Aromas del Alma creemos que los aromas tienen el poder de
                transformar emociones, despertar recuerdos y convertir cualquier
                espacio en un refugio de bienestar.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: brandColors.warmGray, mb: 5, fontSize: "1.05rem" }}
              >
                Cada vela es creada cuidadosamente para acompañarte en los
                momentos que realmente importan.
              </Typography>

              {/* Decorative quote */}
              <Box
                sx={{
                  borderLeft: `3px solid ${brandColors.gold}`,
                  pl: 3,
                  mb: 5,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: brandColors.darkBrown,
                    fontStyle: "italic",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  "Un aroma, un recuerdo"
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="primary"
                href={whatsappUrl(
                  "Hola, quiero encontrar mi aroma ideal. ¿Pueden ayudarme?",
                )}
                target="_blank"
                sx={{
                  bgcolor: brandColors.darkBrown,
                  color: brandColors.cream,
                  "&:hover": { bgcolor: "#2A1B0F" },
                }}
              >
                Quiero encontrar mi aroma ideal
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
