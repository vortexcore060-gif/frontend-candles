import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import theme from "./theme";
import HeroSection from "./components/HeroSection";
import EssenceSection from "./components/EssenceSection";
import BenefitsSection from "./components/BenefitsSection";
import CollectionSection from "./components/CollectionSection";
import TestimonialsSection from "./components/TestimonialsSection";
import OccasionsSection from "./components/OccasionsSection";
import ConversionSection from "./components/ConversionSection";
import FAQSection from "./components/FAQSection";
import ClosingSection from "./components/ClosingSection";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default" }}>
        <HeroSection />
        <EssenceSection />
        <BenefitsSection />
        <CollectionSection />
        <TestimonialsSection />
        <OccasionsSection />
        <ConversionSection />
        <FAQSection />
        <ClosingSection />
        <WhatsAppButton />
      </Box>
    </ThemeProvider>
  );
}

export default App;
