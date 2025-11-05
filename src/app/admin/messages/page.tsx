import { messageThreads, users, books } from "@/lib/placeholder-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function AdminMessagesPage() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold font-headline mb-8">
        Supervision des Messages
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Toutes les conversations</CardTitle>
          <CardDescription>Vue d'ensemble de toutes les communications pour la modération.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {messageThreads.map(thread => {
              const buyer = users.find(u => u.id === thread.buyerId);
              const seller = users.find(u => u.id === thread.sellerId);
              const book = books.find(b => b.id === thread.bookId);

              if (!buyer || !seller || !book) return null;

              return (
                <AccordionItem key={thread.id} value={thread.id}>
                  <AccordionTrigger>
                    <div className="flex justify-between w-full pr-4">
                        <div className="flex items-center gap-2 text-sm">
                            <span>{buyer.name}</span>
                            <span className="text-muted-foreground">&harr;</span>
                            <span>{seller.name}</span>
                        </div>
                        <Badge variant="outline">{book.title}</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-4 bg-muted/50 rounded-md">
                        {thread.messages.map(message => {
                            const sender = users.find(u => u.id === message.senderId);
                            return(
                                <div key={message.id} className="flex items-start gap-3">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={sender?.avatarUrl} />
                                        <AvatarFallback>{sender?.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="flex items-baseline gap-2">
                                            <p className="font-semibold text-sm">{sender?.name}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {new Date(message.timestamp).toLocaleString('fr-FR')}
                                            </p>
                                        </div>
                                        <p className="text-sm">{message.text}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
