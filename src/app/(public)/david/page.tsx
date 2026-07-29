import { Link } from "@/shared/components/interactions";
import { Container, Stack } from "@/shared/components/layout";
import { Heading, Text } from "@/shared/components/typography";

export default function DavidPage() {
  return (
    <Container width="reading">
      <Stack direction="vertical" gap="2xl">
        <Heading as="h1" variant="display">
          David Prieur-Gelis
        </Heading>

        <Stack direction="vertical" gap="md">
          <Heading as="h2" variant="h1">
            Présentation
          </Heading>

          <Text as="p" variant="body-lg">
            David Prieur-Gelis est un artiste pluridisciplinaire dont la
            pratique explore différentes matières, techniques et formes. Plutôt
            que de s&apos;inscrire dans un médium unique, il développe un
            langage propre à chaque projet, laissant l&apos;idée guider le choix
            des matériaux et des procédés.
          </Text>

          <Text as="p" variant="body">
            Son travail traverse la peinture, la sculpture, l&apos;assemblage et
            l&apos;installation. À travers cette diversité d&apos;expressions,
            il construit un univers où l&apos;imaginaire, la poésie et la
            transformation des formes invitent le visiteur à porter un regard
            renouvelé sur ce qui l&apos;entoure.
          </Text>
        </Stack>

        <Stack direction="vertical" gap="md">
          <Heading as="h2" variant="h1">
            Repères biographiques
          </Heading>

          <Text as="p" variant="body">
            Au fil de son parcours, David Prieur-Gelis a présenté son travail
            lors de plusieurs expositions publiques, parmi lesquelles{" "}
            <em>RANDOM</em>, <em>Sors tes couverts</em>. Son travail a également
            été présenté sous le nom <em>Les Arts d&apos;Azur</em>.
          </Text>

          <Text as="p" variant="body">
            Son parcours artistique s&apos;inscrit dans une démarche libre,
            ouverte à l&apos;expérimentation et au renouvellement constant des
            formes d&apos;expression.
          </Text>
        </Stack>

        <Stack direction="vertical" gap="md">
          <Heading as="h2" variant="h1">
            Démarche artistique
          </Heading>

          <Text as="p" variant="body">
            Chaque création naît d&apos;une intention propre. Le choix des
            matériaux, des techniques ou des formats accompagne cette idée
            plutôt que de la contraindre. Cette liberté permet à chaque œuvre de
            développer sa propre identité tout en s&apos;inscrivant dans une
            recherche artistique cohérente.
          </Text>

          <Text as="p" variant="body">
            Les œuvres explorent des thèmes variés à travers le détournement
            d&apos;objets, le dialogue entre les matières, l&apos;humour, la
            poésie ou encore l&apos;imaginaire. Certaines prennent la forme
            d&apos;installations ou de sculptures monumentales, tandis que
            d&apos;autres privilégient une relation plus intime avec
            l&apos;objet et la matière.
          </Text>

          <Text as="p" variant="body">
            Au-delà des techniques employées, son travail invite à redécouvrir
            autrement des objets, des formes et des récits que l&apos;on croyait
            familiers.
          </Text>
        </Stack>

        <Stack direction="vertical" gap="md">
          <Heading as="h2" variant="h1">
            Repères artistiques
          </Heading>

          <Text as="p" variant="body">
            Les collections présentées dans AZUREUM proposent différentes
            entrées dans le travail de David Prieur-Gelis. Chacune rassemble des
            œuvres liées par une intention commune et permet de découvrir les
            multiples facettes de sa pratique artistique.
          </Text>

          <Text as="p" variant="body">
            Ensemble, elles témoignent d&apos;une recherche en constante
            évolution, où les matériaux, les techniques et les sujets se
            renouvellent sans perdre la cohérence de la démarche qui les relie.
          </Text>

          <Text as="p" variant="body">
            <Link href="/collections">Découvrir les collections</Link>
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}
