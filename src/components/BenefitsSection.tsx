import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SpaIcon from "@mui/icons-material/Spa";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { brandColors } from "../theme";

const benefits = [
  {
    icon: <SpaIcon />,
    title: "Relajación y bienestar",
    description:
      "Fragancias seleccionadas para ayudarte a crear ambientes de tranquilidad y paz interior.",
  },
  {
    icon: <HomeIcon />,
    title: "Decoración elegante",
    description:
      "Diseños que complementan y embellecen cualquier espacio con sofisticación natural.",
  },
  {
    icon: <AccessTimeIcon />,
    title: "Aromas duraderos",
    description:
      "Experiencias aromáticas que permanecen por más tiempo, llenando tu hogar de vida.",
  },
  {
    icon: <FavoriteIcon />,
    title: "Elaboración artesanal",
    description:
      "Cada vela es elaborada con dedicación y atención a cada detalle, con amor.",
  },
];

export default function BenefitsSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: brandColors.beige,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 7, md: 10 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              mb: 2,
            }}
          >
            <Box sx={{ width: 40, height: 1, bgcolor: brandColors.gold }} />
            <Typography
              variant="overline"
              sx={{
                color: brandColors.gold,
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
              }}
            >
              Por qué elegirnos
            </Typography>
            <Box sx={{ width: 40, height: 1, bgcolor: brandColors.gold }} />
          </Box>
          <Typography
            variant="h2"
            sx={{
              color: brandColors.darkBrown,
              fontSize: { xs: "1.9rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            ¿Por qué elegir{" "}
            <Box
              component="span"
              sx={{ fontStyle: "italic", color: brandColors.warmGray }}
            >
              Aromas del Alma?
            </Box>
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  textAlign: "center",
                  p: { xs: 4, md: 5 },
                  height: "100%",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    "& .benefit-icon-box": {
                      bgcolor: brandColors.gold,
                      "& svg": { color: brandColors.darkBrown },
                    },
                  },
                }}
              >
                {/* Icon */}
                <Box
                  className="benefit-icon-box"
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    bgcolor: "rgba(216,185,121,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                    border: `1px solid rgba(216,185,121,0.3)`,
                    transition: "all 0.3s ease",
                    "& svg": {
                      fontSize: "1.8rem",
                      color: brandColors.gold,
                      transition: "color 0.3s ease",
                    },
                  }}
                >
                  {benefit.icon}
                </Box>

                {/* Number */}
                <Typography
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    color: brandColors.sand,
                    mb: 1.5,
                  }}
                >
                  0{index + 1}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: brandColors.darkBrown,
                    mb: 2,
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    fontWeight: 600,
                  }}
                >
                  {benefit.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: brandColors.warmGray, lineHeight: 1.8 }}
                >
                  {benefit.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
