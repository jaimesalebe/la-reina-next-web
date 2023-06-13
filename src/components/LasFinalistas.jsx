import ImageAudio from './ImageAudio'

function LasFinalistas() {
    return (
        <section className='px-5 sm:px-0 flex flex-wrap gap-5 justify-evenly items-center'>
            <h1 className='text-white font-bold text-3xl'>Las Finalistas 🔝🔥</h1>
            <article className="container sm:w-96 gap-1 bg-darkblue-100 shadow-lg rounded-xl border border-gray-200">
                <header className="px-5 py-4">
                    <h2 className="font-semibold text-center text-white">Top #5</h2>
                </header>
                <table className=" w-full">
                    <thead className=" font-semibold text-lg text-white">
                        <tr>
                            <th className="px-10 whitespace-nowrap text-left">Artista</th>
                            <th className="p-2 whitespace-nowrap">Canción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" text-white">
                            <td className=''>
                                <ul className='p-2 whitespace-nowrap flex items-center'>
                                    <li className="sm:w-30 sm:h-full flex-shrink-0 mr-2 sm:mr-3">
                                        <ImageAudio audio="https://lareinadelvallenato.co/wp-content/uploads/2022/06/El-carro-Ford-Carlos-Vives.mp3?_=1" />
                                    </li>
                                    <li className="font-medium">
                                        <p> Carlos Vives</p>
                                    </li>
                                </ul>
                            </td>
                            <td className="p-2 whitespace-nowrap text-center">
                                El carro Ford
                            </td>
                        </tr>
                        <tr className=" text-white">
                            <td className=''>
                                <ul className='p-2 whitespace-nowrap flex items-center'>
                                    <li className="sm:w-30 sm:h-full flex-shrink-0 mr-2 sm:mr-3">
                                        <ImageAudio audio="https://lareinadelvallenato.co/wp-content/uploads/2022/06/El-carro-Ford-Carlos-Vives.mp3?_=1" />
                                    </li>
                                    <li className="font-medium">
                                        <p> Carlos Vives</p>
                                    </li>
                                </ul>
                            </td>
                            <td className="p-2 whitespace-nowrap text-center">
                                El carro Ford
                            </td>
                        </tr>
                        <tr className=" text-white">
                            <td className=''>
                                <ul className='p-2 whitespace-nowrap flex items-center'>
                                    <li className="sm:w-30 sm:h-full flex-shrink-0 mr-2 sm:mr-3">
                                        <ImageAudio audio="https://lareinadelvallenato.co/wp-content/uploads/2022/06/El-carro-Ford-Carlos-Vives.mp3?_=1" />
                                    </li>
                                    <li className="font-medium">
                                        <p> Carlos Vives</p>
                                    </li>
                                </ul>
                            </td>
                            <td className="p-2 whitespace-nowrap text-center">
                                El carro Ford
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </section>
    )
}

export default LasFinalistas