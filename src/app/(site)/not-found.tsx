import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-24 text-center">
      <h1 className="text-4xl font-bold sm:text-5xl">This page doesn&apos;t exist</h1>
      <p className="mx-auto mt-5 max-w-xl text-lg">The link may be old or mistyped. Try one of these instead.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">Go to the home page</Link>
        <Link href="/services" className="btn btn-ghost">See services</Link>
      </div>
    </section>
  );
}
