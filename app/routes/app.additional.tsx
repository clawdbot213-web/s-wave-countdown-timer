import {
  Badge,
  BlockStack,
  Box,
  Card,
  InlineStack,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

const presets = [
  {
    name: "Light",
    description: "Minimal urgency banner for bright storefronts.",
  },
  {
    name: "Dark",
    description: "High-contrast timer for bold campaigns.",
  },
  {
    name: "Vibrant",
    description: "Bright accent + CTA button for flash sales.",
  },
  {
    name: "Minimal",
    description: "Subtle timer that blends with your header.",
  },
  {
    name: "Custom",
    description: "Use your own brand colors and spacing.",
  },
];

export default function AdditionalPage() {
  return (
    <Page>
      <TitleBar title="Design presets" />
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text as="h2" variant="headingMd">
                Theme presets
              </Text>
              <Text as="p" variant="bodyMd">
                Pair your countdown with an offer CTA and progress bar for the
                biggest lift.
              </Text>
              <BlockStack gap="300">
                {presets.map((preset) => (
                  <Box
                    key={preset.name}
                    padding="300"
                    borderWidth="025"
                    borderRadius="200"
                    borderColor="border"
                  >
                    <BlockStack gap="150">
                      <InlineStack gap="200" align="start">
                        <Badge tone="info">{preset.name}</Badge>
                        <Text as="span" variant="bodySm" tone="subdued">
                          {preset.description}
                        </Text>
                      </InlineStack>
                    </BlockStack>
                  </Box>
                ))}
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                Pro tips
              </Text>
              <Text as="p" variant="bodySm">
                Use a CTA label like “Shop now” and set end times in UTC (ISO
                format).
              </Text>
              <Text as="p" variant="bodySm">
                Enable the progress bar to visually show time running out.
              </Text>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
