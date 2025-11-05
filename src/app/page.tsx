import Link from "next/link";
import { books } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/book-card";
import { SearchFilters } from "@/components/search-filters";
import Image from "next/image";

export default function Home() {
  const visibleBooks = books.filter((book) => !book.isSold);

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-4 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] font-headline">
                  Donnez une seconde vie à vos livres
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                  Le Livre Local est la place de marché pour acheter et vendre
                  des livres d'occasion dans votre communauté. Simple, local et
                  convivial.
                </p>
                <div className="space-x-4 mt-6">
                  <Button asChild size="lg">
                    <Link href="#books">Parcourir les livres</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/sell">Vendre un livre</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center items-center">
                 <Image
                    src="https://picsum.photos/seed/hero-image/600/400"
                    width={600}
                    height={400}
                    alt="Hero image"
                    className="rounded-xl shadow-lg"
                    data-ai-hint="books library"
                  />
              </div>
            </div>
          </div>
        </section>
        <section id="books" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Dernières Annonces
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explorez les trésors littéraires ajoutés par vos voisins.
              </p>
            </div>

            <SearchFilters />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
              {visibleBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
