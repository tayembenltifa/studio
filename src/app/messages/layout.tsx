import { ConversationList } from "./components/conversation-list";

export default function MessagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto py-8">
       <div className="mb-8">
            <h1 className="text-3xl font-bold font-headline">Messagerie</h1>
            <p className="text-muted-foreground">Vos conversations avec les acheteurs et vendeurs.</p>
        </div>
      <div className="border bg-card rounded-lg h-[calc(100vh-200px)] flex">
        <aside className="w-full md:w-1/3 lg:w-1/4 border-r overflow-y-auto">
          <ConversationList />
        </aside>
        <main className="flex-1 hidden md:flex flex-col">{children}</main>
      </div>
    </div>
  );
}
