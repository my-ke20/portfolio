const cvLines = [
  "Michael Otieno",
  "Mechatronics Engineering Student",
  "",
  "Base: Nairobi, Kenya",
  "Email: michaelotieno915@gmail.com",
  "Phone: 0707880632",
  "GitHub: https://github.com/my-ke20",
  "",
  "Focus",
  "Embedded systems, robotics workflows, field-ready automation, PCB systems,",
  "control systems, CAD, fabrication, and computer vision.",
  "",
  "Experience",
  "Systems Engineering Attachment - Eve Shield",
  "Supported rugged electronics workflows, system validation, and operational",
  "documentation for mission-focused hardware.",
  "",
  "Technical Attachment - KIWASCO",
  "Worked around industrial measurement, maintenance routines, and field",
  "reliability practices for water infrastructure.",
  "",
  "Education",
  "Mechatronics Engineering - Dedan Kimathi University",
  "",
  "Projects",
  "EDU-LENS - AR-assisted technical learning platform",
  "AERIAL-KE - Autonomous delivery drone concept",
  "AGRI-EYE - Precision agriculture imaging stack",
  "IRONWATCH - Robotic surveillance and alert system",
];

function escapePdfText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function createPdf(lines: string[]) {
  const content = [
    "BT",
    "/F1 18 Tf",
    "72 760 Td",
    `(${escapePdfText(lines[0])}) Tj`,
    "/F1 10 Tf",
    ...lines.slice(1).flatMap((line) => ["0 -18 Td", `(${escapePdfText(line)}) Tj`]),
    "ET",
  ].join("\n");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  offsets.slice(1).forEach((offset) => {
    pdf += `${offset.toString().padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  pdf += `startxref\n${xrefOffset}\n%%EOF\n`;

  return pdf;
}

export function GET() {
  return new Response(createPdf(cvLines), {
    headers: {
      "Content-Disposition": 'attachment; filename="michael-otieno-cv.pdf"',
      "Content-Type": "application/pdf",
    },
  });
}
