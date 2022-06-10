import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";

import HCLogo from "../assets/hcharis-01.svg";

export function HomePage() {
  return (
    <Page
      fullWidth
      title="Product Selector"
      primaryAction={{
        content: "Select Products",
        onAction: () => console.log("clicked"),
      }}
    >
      <Image source={HCLogo} alt="HC Logo" width={150} />
    </Page>
  );
}
