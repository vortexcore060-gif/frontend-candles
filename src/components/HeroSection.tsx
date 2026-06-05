import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { brandColors } from "../theme";
import { whatsappUrl } from "../utils/whatsapp";

const badges = [
  "Elaboración artesanal",
  "Aromas exclusivos",
  "Perfectas para regalar",
  "Atención personalizada",
];

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "100svh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: brandColors.darkBrown,
      }}
    >
      {/* Background image */}
      <Box
        component="img"
        src="/hero-candles.webp"
        alt="Velas aromáticas Aromas del Alma"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.55,
        }}
      />

      {/* Gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, rgba(61,43,31,0.75) 0%, rgba(61,43,31,0.35) 60%, rgba(61,43,31,0.15) 100%)`,
        }}
      />

      {/* Logo top */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 20, md: 32 },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <Box
          component="img"
          src="/76859073-a18a-4669-a080-dabe2bed40a8.jpg"
          alt="Aromas del Alma"
          sx={{
            height: { xs: 60, md: 80 },
            objectFit: "contain",
            mixBlendMode: "luminosity",
            filter: "brightness(1.3) contrast(1.1)",
            borderRadius: 1,
          }}
        />
      </Box>

      {/* Content */}
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
          pt: { xs: 14, md: 12 },
          pb: { xs: 8, md: 10 },
        }}
      >
        <Stack
          spacing={{ xs: 3, md: 4 }}
          sx={{ alignItems: "center", textAlign: "center" }}
        >
          {/* Overline */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 40, height: 1, bgcolor: brandColors.gold }} />
            <Typography
              variant="overline"
              sx={{
                color: brandColors.gold,
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
              }}
            >
              Velas aromáticas artesanales
            </Typography>
            <Box sx={{ width: 40, height: 1, bgcolor: brandColors.gold }} />
          </Box>

          {/* Main title */}
          <Typography
            variant="h1"
            sx={{
              color: "#FFFDF9",
              fontSize: {
                xs: "2.6rem",
                sm: "3.5rem",
                md: "4.5rem",
                lg: "5.5rem",
              },
              fontStyle: "italic",
              textShadow: "0 2px 20px rgba(61,43,31,0.5)",
            }}
          >
            Cada aroma cuenta una historia.
            <Box
              component="span"
              sx={{
                display: "block",
                color: brandColors.gold,
                fontStyle: "normal",
                mt: 0.5,
              }}
            >
              Encuentra la tuya.
            </Box>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="subtitle1"
            sx={{
              color: "rgba(255,253,249,0.85)",
              maxWidth: 560,
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.9,
            }}
          >
            Velas aromáticas artesanales diseñadas para llenar tus espacios de
            calma, armonía y momentos inolvidables.
          </Typography>

          {/* Badges */}
          <Stack
            direction="row"
            sx={{
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1,
              maxWidth: 500,
            }}
          >
            {badges.map((badge) => (
              <Chip
                key={badge}
                label={badge}
                size="small"
                icon={
                  <AutoAwesomeIcon
                    sx={{
                      fontSize: "0.7rem !important",
                      color: `${brandColors.gold} !important`,
                    }}
                  />
                }
                sx={{
                  bgcolor: "rgba(255,253,249,0.1)",
                  color: "rgba(255,253,249,0.9)",
                  border: `1px solid rgba(216,185,121,0.4)`,
                  fontFamily: '"Lato", sans-serif',
                  fontSize: "0.7rem",
                  letterSpacing: "0.05em",
                  backdropFilter: "blur(4px)",
                }}
              />
            ))}
          </Stack>

          {/* CTAs */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ alignItems: "center", pt: 1 }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="#coleccion"
              sx={{
                minWidth: { xs: 260, sm: "auto" },
                bgcolor: brandColors.gold,
                color: brandColors.darkBrown,
                "&:hover": { bgcolor: brandColors.lightGold },
              }}
            >
              Descubre el aroma que conectará contigo
            </Button>
            <Button
              variant="outlined"
              size="large"
              href={whatsappUrl(
                "Hola, me gustaría recibir asesoría sobre sus velas aromáticas.",
              )}
              target="_blank"
              startIcon={<WhatsAppIcon />}
              sx={{
                minWidth: { xs: 260, sm: "auto" },
                borderColor: "rgba(255,253,249,0.6)",
                color: "rgba(255,253,249,0.9)",
                "&:hover": {
                  borderColor: "#fff",
                  bgcolor: "rgba(255,253,249,0.08)",
                  color: "#fff",
                },
              }}
            >
              Hablar por WhatsApp
            </Button>
          </Stack>
        </Stack>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          opacity: 0.6,
        }}
      >
        <Typography
          variant="caption"
          sx={{ color: "#fff", fontSize: "0.6rem", letterSpacing: "0.2em" }}
        >
          EXPLORAR
        </Typography>
        <Box
          sx={{
            width: 1,
            height: 40,
            bgcolor: "rgba(255,255,255,0.5)",
            "@keyframes scrollDown": {
              "0%": { transform: "scaleY(0)", transformOrigin: "top" },
              "50%": { transform: "scaleY(1)", transformOrigin: "top" },
              "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
              "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
            },
            animation: "scrollDown 1.8s ease-in-out infinite",
          }}
        />
      </Box>
    </Box>
  );
}
