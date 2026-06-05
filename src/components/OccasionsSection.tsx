import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CakeIcon from "@mui/icons-material/Cake";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HomeIcon from "@mui/icons-material/Home";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SpaIcon from "@mui/icons-material/Spa";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { brandColors } from "../theme";
import { whatsappUrl } from "../utils/whatsapp";

const occasions = [
  { icon: <CakeIcon />, label: "Cumpleaños" },
  { icon: <FavoriteIcon />, label: "Aniversarios" },
  { icon: <BusinessCenterIcon />, label: "Corporativos" },
  { icon: <HomeIcon />, label: "Decoración" },
  { icon: <SelfImprovementIcon />, label: "Meditación" },
  { icon: <FitnessCenterIcon />, label: "Yoga" },
  { icon: <SpaIcon />, label: "Spa en casa" },
];

export default function OccasionsSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: brandColors.beige,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 6, md: 10 }}
          sx={{ alignItems: "center" }}
        >
          {/* Left: text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
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
                Cada ocasión especial
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                color: brandColors.darkBrown,
                mb: 3,
                fontSize: { xs: "1.9rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              Perfectas para{" "}
              <Box
                component="span"
                sx={{ fontStyle: "italic", color: brandColors.warmGray }}
              >
                cada ocasión
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: brandColors.warmGray,
                mb: 5,
                fontSize: "1.05rem",
                maxWidth: 460,
              }}
            >
              Porque los mejores regalos no son objetos, son emociones. Una vela
              de Aromas del Alma es el detalle que siempre recordarán.
            </Typography>

            <Button
              variant="contained"
              size="large"
              href={whatsappUrl(
                "Hola, quiero regalar una experiencia especial. ¿Qué me recomiendan?",
              )}
              target="_blank"
              startIcon={<WhatsAppIcon />}
              sx={{
                bgcolor: brandColors.gold,
                color: brandColors.darkBrown,
                "&:hover": { bgcolor: brandColors.lightGold },
              }}
            >
              Quiero regalar una experiencia
            </Button>
          </Grid>

          {/* Right: occasions grid */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>
              {occasions.map((item, index) => (
                <Grid key={index} size={{ xs: 6, sm: index === 6 ? 12 : 6 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2.5,
                      bgcolor: brandColors.cream,
                      border: `1px solid rgba(201,183,156,0.3)`,
                      transition: "all 0.3s ease",
                      cursor: "default",
                      "&:hover": {
                        bgcolor: brandColors.gold,
                        borderColor: brandColors.gold,
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 16px rgba(216,185,121,0.3)",
                        "& .occasion-icon": { color: brandColors.darkBrown },
                        "& .occasion-label": { color: brandColors.darkBrown },
                      },
                    }}
                  >
                    <Box
                      className="occasion-icon"
                      sx={{
                        color: brandColors.gold,
                        display: "flex",
                        transition: "color 0.3s ease",
                        "& svg": { fontSize: "1.4rem" },
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      className="occasion-label"
                      sx={{
                        fontFamily: '"Lato", sans-serif',
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        color: brandColors.darkBrown,
                        letterSpacing: "0.05em",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
