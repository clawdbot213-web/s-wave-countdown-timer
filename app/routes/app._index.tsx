import type { LoaderFunctionArgs } from "@remix-run/node";
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  InlineStack,
  List,
  Badge,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};

const THEME_EDITOR_URL = "shopify:admin/themes/current/editor?context=apps";

export default function Index() {
  return (
    <Page>
      <TitleBar title="Countdown Timer Bar" />
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="400">
                <BlockStack gap="200">
                  <Text as="h2" variant="headingLg">
                    Launch in minutes
                  </Text>
                  <Text as="p" variant="bodyMd" tone="subdued">
                    Build a premium countdown bar with a high-impact CTA and
                    polished progress styling.
                  </Text>
                </BlockStack>
                <List type="number">
                  <List.Item>Open your theme editor.</List.Item>
                  <List.Item>
                    Add the <strong>Countdown timer bar</strong> app block.
                  </List.Item>
                  <List.Item>
                    Set the end time, message, and CTA link.
                  </List.Item>
                </List>
                <InlineStack gap="300" wrap>
                  <Button url={THEME_EDITOR_URL} target="_top" variant="primary">
                    Open theme editor
                  </Button>
                  <Button url="/app/additional" variant="plain">
                    Explore design presets
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <Card>
              <BlockStack gap="300">
                <Text as="h2" variant="headingMd">
                  Status
                </Text>
                <InlineStack gap="200" align="start" wrap>
                  <Badge tone="success">App installed</Badge>
                  <Badge tone="info">Theme app extension</Badge>
                </InlineStack>
                <Text as="p" variant="bodySm" tone="subdued">
                  The bar appears on every page where the app block is enabled.
                </Text>
                <Button
                  url={THEME_EDITOR_URL}
                  target="_top"
                  fullWidth
                  variant="primary"
                >
                  Add app block
                </Button>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>

        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingMd">
                  Built-in controls
                </Text>
                <Text as="p" variant="bodyMd" tone="subdued">
                  Highlight urgency with CTA buttons, progress bars, and premium
                  themes.
                </Text>
                <InlineStack gap="200" wrap>
                  {[
                    "Theme presets",
                    "Top or bottom",
                    "CTA button",
                    "Progress bar",
                    "Expired message",
                    "Custom colors",
                  ].map((label) => (
                    <Badge key={label} tone="info">
                      {label}
                    </Badge>
                  ))}
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
