import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { brandColors } from "../theme";

const faqs = [
  {
    question: "¿Cuánto dura cada vela?",
    answer:
      "La duración varía según la fragancia y el tamaño. Nuestras velas tienen una duración aproximada de entre 35 y 55 horas de uso continuo. Te recomendamos encenderlas en períodos de 2 a 4 horas para maximizar su vida útil y mantener la fragancia en su punto óptimo.",
  },
  {
    question: "¿Qué aromas tienen disponibles?",
    answer:
      "Contamos con una colección de fragancias exclusivas que incluye lavanda y bergamota, vainilla y canela, pino y cedro, cítricos frescos, entre otras. También realizamos velas personalizadas bajo pedido. Escríbenos por WhatsApp y te contamos todas las opciones disponibles.",
  },
  {
    question: "¿Realizan envíos?",
    answer:
      "Sí, hacemos envíos a todo el país. Nuestros productos llegan en un empaque especial diseñado para proteger la vela durante el transporte y que también es perfecto para regalo. Los tiempos de entrega varían según la ciudad. Consulta disponibilidad y costos por WhatsApp.",
  },
  {
    question: "¿Puedo comprar para regalar?",
    answer:
      "Absolutamente. Nuestras velas son el regalo perfecto para cualquier ocasión. Ofrecemos opciones de empaque especial para regalo, y también podemos incluir una tarjeta personalizada con tu mensaje. Contacta nuestro equipo para opciones de presentación corporativa o regalos en volumen.",
  },
  {
    question: "¿Cómo hago mi pedido?",
    answer:
      "El proceso es muy sencillo. Solo escríbenos por WhatsApp, cuéntanos qué estás buscando o la ocasión para la que es el regalo, y nuestro equipo te asesorará para elegir la fragancia perfecta. Luego coordinas el pago y la entrega directamente con nosotros.",
  },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState<number | false>(0);

  const handleChange =
    (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: brandColors.cream,
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 7, md: 9 } }}>
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
              Preguntas frecuentes
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
            Todo lo que necesitas{" "}
            <Box
              component="span"
              sx={{ fontStyle: "italic", color: brandColors.warmGray }}
            >
              saber
            </Box>
          </Typography>
        </Box>

        {/* Accordions */}
        <Box>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{
                bgcolor: "transparent",
                borderBottom: `1px solid rgba(201,183,156,0.4)`,
                "&:first-of-type": {
                  borderTop: `1px solid rgba(201,183,156,0.4)`,
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === index ? (
                    <RemoveIcon
                      sx={{ color: brandColors.gold, fontSize: "1rem" }}
                    />
                  ) : (
                    <AddIcon
                      sx={{ color: brandColors.gold, fontSize: "1rem" }}
                    />
                  )
                }
              >
                <Typography
                  variant="h6"
                  sx={{
                    color:
                      expanded === index
                        ? brandColors.gold
                        : brandColors.darkBrown,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    transition: "color 0.2s ease",
                    pr: 2,
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{
                    color: brandColors.warmGray,
                    lineHeight: 1.9,
                    fontSize: "0.95rem",
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
