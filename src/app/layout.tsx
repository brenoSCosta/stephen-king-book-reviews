"use client";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import StyledComponentsRegistry from "@/lib/registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body>
        <StyledComponentsRegistry>
          <>
            <ThemeProvider theme={theme}>
              {children}
            </ThemeProvider>
          </>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
