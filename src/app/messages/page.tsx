import { MessageSquare } from "lucide-react";

export default function MessagesPage() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center h-full text-center p-4">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-muted mb-4">
                <MessageSquare className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold">Bienvenue dans votre messagerie</h2>
            <p className="text-muted-foreground mt-2">
                Sélectionnez une conversation pour commencer à discuter.
            </p>
        </div>
    )
}
