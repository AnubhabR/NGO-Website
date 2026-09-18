import { Container } from "./Container";

export function Header() {
  return (
    <header className="border-b">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Header Content */}
            <a href="/" className="font-semibold">
              Nature Delight Foundation
            </a>
        </nav>
      </Container>
    </header>
  );
}
