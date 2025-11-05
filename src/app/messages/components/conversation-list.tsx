"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { messageThreads, books, users, currentUserId } from "@/lib/placeholder-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ConversationList() {
    const pathname = usePathname();

    const userThreads = messageThreads.filter(t => t.buyerId === currentUserId || t.sellerId === currentUserId);

    return (
        <ScrollArea className="h-full">
            <nav className="flex flex-col">
                {userThreads.map(thread => {
                    const otherUser = users.find(u => u.id === (thread.buyerId === currentUserId ? thread.sellerId : thread.buyerId));
                    const book = books.find(b => b.id === thread.bookId);
                    const lastMessage = thread.messages[thread.messages.length - 1];

                    if (!otherUser || !book) return null;

                    const href = `/messages/${thread.id}`;
                    const isActive = pathname === href;

                    return (
                        <Link
                            key={thread.id}
                            href={href}
                            className={cn(
                                "block p-4 border-b hover:bg-accent/50 transition-colors",
                                isActive ? "bg-accent" : ""
                            )}
                        >
                            <div className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={otherUser.avatarUrl} alt={otherUser.name} />
                                    <AvatarFallback>{otherUser.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 truncate">
                                    <div className="flex justify-between items-baseline">
                                        <p className="font-semibold truncate">{otherUser.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {new Date(lastMessage.timestamp).toLocaleDateString('fr-FR')}
                                        </p>
                                    </div>
                                    <p className="text-sm text-muted-foreground truncate">
                                        Re: {book.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground truncate">
                                        {lastMessage.text}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </nav>
        </ScrollArea>
    )
}
