import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { books, users } from "@/lib/placeholder-data";
import placeholderImages from "@/lib/placeholder-images.json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeartHandshake, MessageSquare, Tag, BookOpen, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function BookDetailsPage({ params }: { params: { id: string } }) {
  const book = books.find((b) => b.id === params.id);

  if (!book) {
    notFound();
  }

  const seller = users.find((u) => u.id === book.sellerId);
  const image = placeholderImages.placeholderImages.find(
    (img) => img.id === book.imageId
  );

  return (
    <div className="container mx-auto max-w-5xl py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="flex justify-center">
          <Card className="overflow-hidden w-full max-w-sm">
            <div className="aspect-[2/3] relative">
              <Image
                src={image?.imageUrl || `https://picsum.photos/seed/${book.id}/400/600`}
                alt={book.title}
                fill
                className="object-cover"
                data-ai-hint={image?.imageHint}
              />
            </div>
          </Card>
        </div>
        <div className="flex flex-col space-y-6">
          <div>
            <Badge>{book.category}</Badge>
            <h1 className="font-headline text-3xl md:text-4xl font-bold mt-2">
              {book.title}
            </h1>
            <p className="text-xl text-muted-foreground mt-1">
              par {book.author}
            </p>
          </div>

          <p className="text-3xl font-bold text-primary">{book.price}€</p>
          
          <p className="text-base leading-relaxed">
            {book.description}
          </p>

          <Card>
            <CardContent className="p-4 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-3">
                <HeartHandshake className="h-5 w-5 text-primary" />
                <div>
                    <p className="text-muted-foreground">État</p>
                    <p className="font-semibold">{book.condition}</p>
                </div>
              </div>
               <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <div>
                    <p className="text-muted-foreground">Catégorie</p>
                    <p className="font-semibold">{book.category}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {seller && (
             <div>
                <Separator className="my-4" />
                <h3 className="font-semibold mb-3 flex items-center gap-2"><User className="h-4 w-4 text-muted-foreground" /> Vendu par</h3>
                <Link href="#" className="block">
                    <Card className="hover:bg-accent/50 transition-colors">
                        <CardContent className="p-4 flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src={seller.avatarUrl} alt={seller.name} />
                            <AvatarFallback>{seller.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{seller.name}</p>
                            <p className="text-sm text-muted-foreground">Voir le profil</p>
                        </div>
                        </CardContent>
                    </Card>
                </Link>
             </div>
          )}
            
          <Button size="lg" asChild>
            <Link href={`/messages/thread1?bookId=${book.id}`}>
              <MessageSquare className="mr-2 h-5 w-5" />
              Contacter le vendeur
            </Link>
          </Button>

        </div>
      </div>
    </div>
  );
}
