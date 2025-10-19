import Link from 'next/link';
import Image from 'next/image';
import banner from '@/public/images/banner.png';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <Image
        src={banner}
        alt="better-env banner"
        className="mx-auto mb-10 h-auto w-full max-w-2xl rounded-xl shadow-lg"
        priority
      />
      <h1 className="mx-auto mb-6 max-w-3xl text-balance text-4xl font-bold text-fd-foreground md:text-4xl">
        A better way to manage secrets
        <br />
        because screw .env
      </h1>
      <p className="mx-auto max-w-2xl text-balance text-lg text-fd-muted-foreground md:text-xl">
        Encrypted Secrets • Zero Plaintext • Instant Runtime Loading • 100% Commit Safe
        <br />
        <br />
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          Read the docs →
        </Link>
      </p>
    </main>
  );
}
