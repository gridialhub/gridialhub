// app/contacto/page.jsx
import ContactoForm from "./ContactoForm";

// 🔹 METADATA PARA SEO Y CANONICAL
export const metadata = {
  title: "Contacto | GridialHub",
  description:
    "Ponte en contacto con GridialHub para dudas, propuestas, colaboraciones o temas relacionados con la comunidad gamer y la tecnología.",
  alternates: {
    canonical: "/contacto", // → https://gridialhub.com/contacto
  },
};

export default function ContactoPage() {
  return <ContactoForm />;
}
