export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="hero-backdrop absolute inset-0 -z-10">
      <div className="hero-aurora hero-aurora-one" />
      <div className="hero-aurora hero-aurora-two" />
      <div className="hero-aurora hero-aurora-three" />
      <div className="hero-vignette" />
    </div>
  );
}
