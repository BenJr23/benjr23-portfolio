import { Certifications } from "../components/Certifications";
import { getCertificates } from "../_actions/certifications/getcertificates";
import { mockCertifications } from "../lib/mock";

export default async function CertificationsPage() {
  const certs = await getCertificates().catch(() => mockCertifications);

  return <Certifications certifications={certs} />;
}
