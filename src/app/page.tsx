import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/components/HomePage";


export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col">
      <HomePage />
    </main>
    <About />
    <Footer />
  </>
  )
}
