import { EmblaCarousel } from "@/components/EmblaCarousel";
import Loading from "@/components/Loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <EmblaCarousel />
      </Suspense>
    </main>
  )
}
