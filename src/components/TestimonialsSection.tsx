import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { brandColors } from "../theme";

const testimonials = [
  {
    name: "Valeria M.",
    location: "Bogotá",
    initials: "VM",
    rating: 5,
    text: "Encender una vela de Aromas del Alma se convirtió en mi ritual favorito después del trabajo. El aroma de lavanda me transporta a otro lugar.",
  },
  {
    name: "Carolina R.",
    location: "Medellín",
    initials: "CR",
    rating: 5,
    text: "El aroma transforma completamente el ambiente de mi hogar. Cuando llego a casa y huelo esa fragancia, sé que estoy en mi lugar seguro.",
  },
  {
    name: "Sofía L.",
    location: "Cali",
    initials: "SL",
    rating: 5,
    text: "Compré una para regalar y terminé comprando otra para mí. La calidad y la presentación son impecables. ¡Son perfectas!",
  },
  {
    name: "Andrea P.",
    location: "Barranquilla",
    initials: "AP",
    rating: 5,
    text: "Uso las velas para mis sesiones de yoga y meditación. La diferencia que hace un buen aroma en la práctica es increíble.",
  },
];

export default function TestimonialsSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: brandColors.darkBrown,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/hero-candles.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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
              Testimonios
            </Typography>
            <Box sx={{ width: 40, height: 1, bgcolor: brandColors.gold }} />
          </Box>
          <Typography
            variant="h2"
            sx={{
              color: "#FFFDF9",
              fontSize: { xs: "1.9rem", sm: "2.5rem", md: "3rem" },
              fontStyle: "italic",
            }}
          >
            Historias que comienzan{" "}
            <Box
              component="span"
              sx={{ color: brandColors.gold, fontStyle: "normal" }}
            >
              con un aroma
            </Box>
          </Typography>
        </Box>

        {/* Testimonials grid */}
        <Grid container spacing={3}>
          {testimonials.map((item) => (
            <Grid key={item.name} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Box
                sx={{
                  p: { xs: 4, md: 4.5 },
                  bgcolor: "rgba(255,253,249,0.05)",
                  border: `1px solid rgba(216,185,121,0.2)`,
                  backdropFilter: "blur(4px)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "rgba(255,253,249,0.09)",
                    borderColor: "rgba(216,185,121,0.4)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    color: brandColors.gold,
                    fontSize: "2rem",
                    mb: 2,
                    opacity: 0.6,
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255,253,249,0.8)",
                    fontStyle: "italic",
                    lineHeight: 1.8,
                    flexGrow: 1,
                    mb: 3,
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: "1.05rem",
                  }}
                >
                  "{item.text}"
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: brandColors.gold,
                      color: brandColors.darkBrown,
                      width: 44,
                      height: 44,
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  >
                    {item.initials}
                  </Avatar>
                  <Box>
                    <Typography
                      sx={{
                        color: "#FFFDF9",
                        fontFamily: '"Lato", sans-serif',
                        fontWeight: 600,
                        fontSize: "0.85rem",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Rating
                      value={item.rating}
                      readOnly
                      size="small"
                      sx={{
                        "& .MuiRating-iconFilled": { color: brandColors.gold },
                        fontSize: "0.8rem",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
