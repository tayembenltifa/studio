import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Book, MessageSquare, Euro } from "lucide-react";
import { books, users, messageThreads } from "@/lib/placeholder-data";

export default function AdminDashboardPage() {
    const totalUsers = users.length;
    const totalListings = books.length;
    const soldListings = books.filter(b => b.isSold).length;
    const totalMessages = messageThreads.reduce((acc, thread) => acc + thread.messages.length, 0);

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold font-headline mb-8">
        Tableau de bord Administrateur
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Utilisateurs
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              Nombre total d'utilisateurs inscrits
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Annonces</CardTitle>
            <Book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalListings}</div>
            <p className="text-xs text-muted-foreground">
              Nombre total de livres listés
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ventes</CardTitle>
            <Euro className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{soldListings}</div>
            <p className="text-xs text-muted-foreground">
              Nombre de livres marqués comme vendus
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalMessages}</div>
            <p className="text-xs text-muted-foreground">
              Total des messages échangés
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        {/* Placeholder for charts or recent activity */}
        <Card>
            <CardHeader>
                <CardTitle>Activité Récente</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Le journal d'activité sera affiché ici.</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
