import { EmblaCarousel } from "@/components/EmblaCarousel";
import RecommendedVideos from "@/components/Modal";
import News from "@/components/News";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <EmblaCarousel />
      <News>
        <Link className="group" href={`/noticias`}>
          <p className={`mb-3 text-xl font-semibold hover:text-yellow`}>
            Ver más{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"> -&gt; </span>
          </p>
        </Link>
      </News>
      <RecommendedVideos/>
    </>
  )
}
