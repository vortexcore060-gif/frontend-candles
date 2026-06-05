import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import { brandColors } from "../theme";
import { whatsappUrl } from "../utils/whatsapp";

const products = [
  {
    name: "Alma de Lavanda",
    aroma: "Lavanda & Bergamota",
    description:
      "Una fragancia suave que invita al descanso y la serenidad profunda.",
    duration: "45 horas",
    image: "/candle-lavender.webp",
    message:
      "Hola, me interesa la vela Alma de Lavanda. ¿Pueden darme más información?",
  },
  {
    name: "Dulce Abrazo",
    aroma: "Vainilla & Canela",
    description:
      "Notas cálidas que evocan confort, hogar y momentos de puro amor.",
    duration: "50 horas",
    image: "/candle-vanilla.webp",
    message:
      "Hola, me interesa la vela Dulce Abrazo. ¿Pueden darme más información?",
  },
  {
    name: "Bosque Interior",
    aroma: "Pino & Cedro & Musgo",
    description:
      "Inspirada en la tranquilidad de la naturaleza y sus senderos secretos.",
    duration: "40 horas",
    image: "/candle-forest.webp",
    message:
      "Hola, me interesa la vela Bosque Interior. ¿Pueden darme más información?",
  },
  {
    name: "Amanecer Cítrico",
    aroma: "Naranja & Limón & Menta",
    description:
      "Una fragancia fresca para renovar tu energía y comenzar cada día.",
    duration: "35 horas",
    image: "/candle-citrus.webp",
    message:
      "Hola, me interesa la vela Amanecer Cítrico. ¿Pueden darme más información?",
  },
];

export default function CollectionSection() {
  return (
    <Box
      id="coleccion"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: brandColors.cream,
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
              Nuestra colección
            </Typography>
            <Box sx={{ width: 40, height: 1, bgcolor: brandColors.gold }} />
          </Box>
          <Typography
            variant="h2"
            sx={{
              color: brandColors.darkBrown,
              fontSize: { xs: "1.9rem", sm: "2.5rem", md: "3rem" },
              mb: 2,
            }}
          >
            Encuentra la esencia{" "}
            <Box
              component="span"
              sx={{ fontStyle: "italic", color: brandColors.warmGray }}
            >
              perfecta para cada momento
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: brandColors.warmGray,
              maxWidth: 480,
              mx: "auto",
              fontSize: "1rem",
            }}
          >
            Cada fragancia fue concebida para despertar una emoción diferente.
          </Typography>
        </Box>

        {/* Product grid */}
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid key={product.name} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Card
                sx={{
                  bgcolor: brandColors.beige,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: `1px solid rgba(201,183,156,0.3)`,
                }}
              >
                {/* Product image */}
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    "&:hover img": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{
                      width: "100%",
                      height: 260,
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.5s ease",
                    }}
                  />
                  {/* Duration badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      bgcolor: "rgba(61,43,31,0.75)",
                      backdropFilter: "blur(4px)",
                      px: 1.5,
                      py: 0.5,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <TimerOutlinedIcon
                      sx={{ fontSize: "0.8rem", color: brandColors.gold }}
                    />
                    <Typography
                      sx={{
                        fontFamily: '"Lato", sans-serif',
                        fontSize: "0.7rem",
                        color: "#fff",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {product.duration}
                    </Typography>
                  </Box>
                </Box>

                <CardContent
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Aroma tag */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: brandColors.gold,
                      letterSpacing: "0.1em",
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                      fontFamily: '"Lato", sans-serif',
                      mb: 1,
                      display: "block",
                    }}
                  >
                    {product.aroma}
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      color: brandColors.darkBrown,
                      mb: 1.5,
                      fontSize: "1.3rem",
                    }}
                  >
                    {product.name}
                  </Typography>

                  <Divider
                    sx={{ borderColor: "rgba(201,183,156,0.4)", mb: 2 }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      color: brandColors.warmGray,
                      mb: 3,
                      flexGrow: 1,
                      lineHeight: 1.8,
                    }}
                  >
                    {product.description}
                  </Typography>

                  <Button
                    variant="outlined"
                    fullWidth
                    href={whatsappUrl(product.message)}
                    target="_blank"
                    startIcon={
                      <WhatsAppIcon sx={{ fontSize: "1rem !important" }} />
                    }
                    sx={{
                      borderColor: brandColors.sand,
                      color: brandColors.darkBrown,
                      fontSize: "0.65rem",
                      py: 1.2,
                      "&:hover": {
                        borderColor: brandColors.gold,
                        bgcolor: "rgba(216,185,121,0.08)",
                        color: brandColors.darkBrown,
                      },
                    }}
                  >
                    Consultar por WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Button
            variant="contained"
            size="large"
            href={whatsappUrl(
              "Hola, me gustaría recibir una recomendación personalizada de velas.",
            )}
            target="_blank"
            startIcon={<WhatsAppIcon />}
            sx={{
              bgcolor: brandColors.gold,
              color: brandColors.darkBrown,
              "&:hover": { bgcolor: brandColors.lightGold },
            }}
          >
            Solicitar recomendación personalizada
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
