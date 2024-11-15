import nodemailer from "nodemailer";

interface TransporterConfig {
  service?: string;
  host?: string;
  port?: number;
  secure?: boolean;
  auth: {
    user: string | undefined;
    pass: string | undefined;
  };
}

export function createTransporter() {
  const service = process.env.EMAIL_SERVICE; // e.g., 'gmail'
  const host = process.env.EMAIL_HOST; // e.g., 'smtp.zoho.com'
  const port = process.env.EMAIL_PORT
    ? parseInt(process.env.EMAIL_PORT, 10)
    : undefined;
  const secure = process.env.EMAIL_SECURE === "true";

  const transporterConfig: TransporterConfig = {
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  };

  if (service) {
    transporterConfig.service = service;
  } else if (host && port) {
    transporterConfig.host = host;
    transporterConfig.port = port;
    transporterConfig.secure = secure;
  }

  return nodemailer.createTransport(transporterConfig);
}

export async function sendMail(options: {
  from: string;
  subject: string;
  html: any;
}) {
  const { from, subject, html } = options;
  const transporter = createTransporter();

  await transporter.sendMail({
    from,
    to: process.env.EMAIL,
    subject,
    html,
  });
}
