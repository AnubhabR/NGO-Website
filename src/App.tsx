import { Footer } from "./components/layouts/Footer"
import { Header } from "./components/layouts/Header"

import { Hero } from "./components/sections/Hero"

export function App() {
  return (
    <div className="min-h-svh">
      <Header />
      <main>
        {/* Hero */}
        <Hero />
        {/* Features */}
        {/* Showcase */}
        {/* Testimonials*/}
      </main>
      <Footer />
    </div>
  )
}

export default App
