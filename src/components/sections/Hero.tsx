import { Container } from "../layouts/Container"
import { Section } from "../layouts/Section"
import { Button } from "../ui/button"

// Placeholder to demonstrate composing sections
export function Hero() {
  return (
    <Section>
      <Container>
        <div className="grid min-h-[70vh] items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-start">
            <h1 className="py-5 text-9xl font-extrabold">
              Trees
            </h1>

            <p className="text-green-100">
              Green
            </p>

            <div className="mt-6 flex gap-4">
              <Button>Get started</Button>
              <Button>Learn more</Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            {/* hero image */}
          </div>
        </div>
      </Container>
    </Section>
  )
}
