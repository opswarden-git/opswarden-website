export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            <span className="text-gold">Ship</span> fearlessly, <br />
            <span className="text-gold">Revolvr</span> instantly.
          </h1>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-28 py-24 px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold">About OpsWarden</h2>
        <p className="text-lg text-muted max-w-xl">
          OpsWarden is building the next-generation NOC dashboard to keep system engineering teams aligned and incidents resolved instantly.
        </p>
      </section>

      {/* Install */}
      <section id="install" className="scroll-mt-28 py-24 px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold">Install</h2>
        <p className="text-lg text-muted max-w-xl mb-8">
          Run our simple installer command to configure the OpsWarden agent on your servers.
        </p>
        <div className="glass px-6 py-4 rounded-md font-mono text-sm text-text">
          curl -sS https://get.opswarden.com | sh
        </div>
      </section>

      {/* Ressources */}
      <section id="ressources" className="scroll-mt-28 py-24 px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold">Ressources</h2>
        <p className="text-lg text-muted max-w-xl">
          Access our official documentation, quickstart guides, api reference, and whitepapers.
        </p>
      </section>

      {/* Community */}
      <section id="community" className="scroll-mt-28 py-24 px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold">Community</h2>
        <p className="text-lg text-muted max-w-xl">
          Join the OpsWarden Discord server, GitHub discussions, and follow our updates on Twitter/X.
        </p>
      </section>
    </div>
  );
}
