import Header from "@/components/server/Header";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-zinc-800">
        <Header />
        <main className="relative isolate  px-6 pt-14">
          <div className="mx-auto max-w-2xl py-32">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-400 sm:text-6xl">
                BasePaint Sandbox
              </h1>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
