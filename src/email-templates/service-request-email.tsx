import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Section,
} from "@react-email/components";

const ServiceRequestEmail = ({
  firstName,
  lastName,
  email,
  phone,
  objectType,
  workType,
}: any) => (
  <Html>
    <Head />
    <Preview>
      Demande de prestation de {firstName} {lastName}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Nouvelle demande de prestation</Heading>

        <Section>
          <Text>Bonjour M. NGOMA Darcy,</Text>

          <Text>
            Vous avez reçu une nouvelle demande de prestation de la part de{" "}
            {firstName} {lastName}.
          </Text>

          <Text style={infoText}>
            <strong>Nom complet :</strong> {firstName} {lastName}
          </Text>

          <Text style={infoText}>
            <strong>Email :</strong> {email}
          </Text>

          <Text style={infoText}>
            <strong>Téléphone :</strong> {phone}
          </Text>

          <Text style={infoText}>
            <strong>Type de structure :</strong> {objectType}
          </Text>

          <Text style={infoText}>
            <strong>Type de travail :</strong> {workType}
          </Text>

          <Text>
            Vous pouvez les contacter directement pour discuter des détails
            supplémentaires.
          </Text>

          <Text>
            Cordialement,
            <br />
            L'équipe de Bourgeois Propreté
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: "Arial, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const heading = {
  fontSize: "22px",
  marginBottom: "20px",
  color: "#333",
};

const infoText = {
  fontSize: "16px",
  marginBottom: "10px",
  color: "#555",
};

export default ServiceRequestEmail;
