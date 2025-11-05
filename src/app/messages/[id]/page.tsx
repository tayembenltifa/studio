import { notFound } from "next/navigation";
import Link from "next/link";
import {
  messageThreads,
  users,
  books,
  currentUserId,
} from "@/lib/placeholder-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function MessageThreadPage({
  params,
}: {
  params: { id: string };
}) {
  const thread = messageThreads.find((t) => t.id === params.id);

  if (!thread) {
    notFound();
  }

  const book = books.find((b) => b.id === thread.bookId);
  const otherUser = users.find(
    (u) =>
      u.id ===
      (thread.buyerId === currentUserId ? thread.sellerId : thread.buyerId)
  );

  if (!otherUser) {
    notFound();
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center p-4 border-b">
        <Link href="/messages" className="md:hidden mr-2">
            <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
            </Button>
        </Link>
        <Avatar className="h-10 w-10">
          <AvatarImage src={otherUser.avatarUrl} alt={otherUser.name} />
          <AvatarFallback>{otherUser.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <p className="font-semibold">{otherUser.name}</p>
          {book && (
            <p className="text-sm text-muted-foreground">
              Concernant :{" "}
              <Link href={`/books/${book.id}`} className="hover:underline">
                {book.title}
              </Link>
            </p>
          )}
        </div>
      </div>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {thread.messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-end gap-2",
                message.senderId === currentUserId ? "justify-end" : "justify-start"
              )}
            >
              {message.senderId !== currentUserId && (
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={otherUser.avatarUrl}
                    alt={otherUser.name}
                  />
                  <AvatarFallback>{otherUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  "max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2",
                  message.senderId === currentUserId
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                <p>{message.text}</p>
                <p className={cn("text-xs mt-1", message.senderId === currentUserId ? "text-primary-foreground/70" : "text-muted-foreground")}>
                  {new Date(message.timestamp).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <Separator />
      <div className="p-4 bg-background">
        <div className="relative">
          <Input
            placeholder="Écrivez votre message..."
            className="pr-12 h-12"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            variant="ghost"
          >
            <Send className="h-5 w-5" />
            <span className="sr-only">Envoyer</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
