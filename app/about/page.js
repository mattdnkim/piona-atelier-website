export const revalidate = 86400;
export const metadata = { title: "About" };

export default function About() {
  return (
    <>


      {/* Background section (single soft image) */}
      <section className="relative rounded-2xl overflow-hidden min-h-[80vh] md:min-h-[90vh] pt-24 md:pt-32">

        {/* Single background image */}
        <img
          src="/images/bg-soft.jpg"
          alt="Piona Atelier portfolio background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="lazy"
        />

        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-black/25" />

        {/* About overlay (transparent text, no white box) */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div className="max-w-3xl text-white drop-shadow-md">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">About Us</h1>
            <div className="text-lg md:text-xl leading-relaxed text-white/90">
              <p className="font-bold flex text-left">  Welcome to Piona Atelier</p>
              <p className="flex text-left"> Bespoke Floral Design in Calgary, Extending to Banff & Canmore</p><br></br>
              At Piona Atelier, we believe that flowers are more than just decoration—they set the heart and mood of your most cherished celebrations. Based in Calgary, we specialize in crafting custom floral experiences for weddings and events, while seamlessly bringing our design services to Banff, Canmore, and the surrounding areas.
              Our Floral Philosophy: Whimsical, Natural & Timeless
              We step away from rigid, overly artificial arrangements and embrace the organic beauty of nature. Our signature design style spans whimsical garden aesthetics, soft romantic feels, and refined modern classics. Preferring natural flow over stiff symmetry, we carefully select every stem and texture to match your personal vision.
              The Best of Both Worlds: Fresh & Premium Silk Combinations
              We offer a signature hybrid floral service that seamlessly blends fresh blooms with ultra-premium silk florals.
              -Seamless Cohesion: Keep key personal pieces like bridal bouquets fresh, while utilizing our high-end silk rentals for statement installations or arch decor—all while maintaining a completely unified look and palette.
              -Elevated & Smart: Our silk flowers are selected for their exceptional realism, offering a gorgeous, high-value alternative that looks beautiful both in person and in photographs.
              Your Meticulous Creative Collaborator
              Every event is unique, and our team approaches each project with genuine heart, friendly care, and painstaking attention to detail. From the initial consultation to the final setting on your big day, we listen closely to your wishes and bring the exact ambiance you envisioned to life.
              Whether you are hosting a grand city celebration in Calgary or a scenic event in the nearby mountains, Piona Atelier is here to turn your floral dreams into reality.
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
