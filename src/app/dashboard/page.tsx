import { books, currentUserId } from "@/lib/placeholder-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ListingsTable } from "./components/listings-table";

export default function DashboardPage() {
    const userListings = books.filter(book => book.sellerId === currentUserId);

    return (
        <div className="container mx-auto py-8 md:py-12">
             <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">Tableau de bord</h1>
                <p className="text-muted-foreground">Gérez vos annonces et suivez vos ventes.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Mes Annonces</CardTitle>
                    <CardDescription>La liste des livres que vous avez mis en vente.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ListingsTable listings={userListings} />
                </CardContent>
            </Card>
        </div>
    )
}
