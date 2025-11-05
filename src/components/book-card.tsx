import Link from "next/link";
import Image from "next/image";
import type { Book } from "@/lib/placeholder-data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import placeholderImages from "@/lib/placeholder-images.json";

type BookCardProps = {
  book: Book;
};

export function BookCard({ book }: BookCardProps) {
  const image = placeholderImages.placeholderImages.find(
    (img) => img.id === book.imageId
  );
  return (
    <Link href={`/books/${book.id}`} className="block group">
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="aspect-[2/3] relative">
            <Image
              src={
                image?.imageUrl ||
                `https://picsum.photos/seed/${book.id}/400/600`
              }
              alt={book.title}
              fill
              className="object-cover"
              data-ai-hint={image?.imageHint}
            />
             <div className="absolute top-2 right-2">
               <Badge variant="default">{book.price}€</Badge>
             </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-lg font-headline leading-tight mb-1 group-hover:text-primary transition-colors">
            {book.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{book.author}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Badge variant="secondary" className="w-full justify-center">{book.condition}</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
