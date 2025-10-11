import Link from 'next/link';
import Image from 'next/image';
import banner from '@/public/images/banner.png';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <Image
        src={banner}
        alt="better-env banner"
        className="mx-auto mb-10 h-auto w-full max-w-6xl rounded-xl shadow-lg"
        priority
      />
      <p className="mx-auto max-w-2xl text-balance text-lg text-fd-muted-foreground md:text-xl">
        Encrypted secrets, zero plaintext, instant runtime loading.{' '}
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
