import { getPostFiltered } from "../../../../services/getData";

const page = async ({ params }) => {
    const { slug } = params;
    const { data: post } = await getPostFiltered(slug);
    return (
        <article className='text-white grid place-items-center w-full'>
            <h3 className="text-center font-semibold mb-3">#LaReina</h3>
            <div className="w-full">
                <h1 className='text-4xl uppercase font-bold text-center'>{post[0].attributes.title}</h1>
            </div>
            <div className="sm:max-w-5xl px-5 sm:px-0 py-24 sm:mx-auto space-y-12">
                <h2 className="text-xl italic text-center font-extralight">{post[0].attributes.subtitle}</h2>
                <p className="text-justify leading-8">{
                    post[0].attributes.description.split("\n").map((line, index) => (
                        <>
                            {line}
                            <br />
                        </>
                    ))
                }</p>
            </div>
        </article>
    )
}

export default page