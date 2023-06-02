import { EmblaCarousel } from "@/components/EmblaCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <EmblaCarousel />
      <section className="grid text-center text-white mx-5 lg:mx-0">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Noticias</h2>
          <Link className="group" href={`/`}>
            <p className={`mb-3 text-xl font-semibold hover:text-yellow`}>
              Ver más{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"> -&gt; </span>
            </p>
          </Link>
        </div>
      </section>
    </>
  )
}
