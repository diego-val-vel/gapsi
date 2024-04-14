export default function handler(req, res) {
    res.status(200).json({
      welcomeMessage: "Bienvenido Candidato 01",
      version: "1.0.0"
    });
  }
  