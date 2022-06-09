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

import hcLogo from "../assets/hcharis-01.svg";

import { ProductsCard } from "./ProductsCard";

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
      <Image source={hcLogo} alt="HC Logo" width={150} />
    </Page>
  );
}
