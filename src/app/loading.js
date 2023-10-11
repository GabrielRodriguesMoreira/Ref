export default function Loading() {
    const letters = "Carregando...";
    const animationDelay = "0.2s";

    return (
        <main className="h-screen w-screen flex justify-center items-center text-5xl text-pink-700 font-kalam font-black tracking-wider drop-shadow-[0_1.2px_2.2px_rgba(255,255,255,1)] space-x-1">
            {letters.split('').map((letter, index) => (
                <h1 key={index} style={{
                    animationName: 'loading', animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'linear', animationDelay: `${index * 0.2}s` }}>{letter}</h1>
            ))}
        </main>
    )
}
