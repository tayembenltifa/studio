import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function SellPage() {
  return (
    <div className="container mx-auto max-w-2xl py-8 md:py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-headline">Vendre un livre</CardTitle>
          <CardDescription>Remplissez les détails ci-dessous pour mettre votre livre en vente.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Titre du livre</Label>
              <Input id="title" placeholder="Ex: L'Écume des jours" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Auteur</Label>
              <Input id="author" placeholder="Ex: Boris Vian" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="category">Catégorie</Label>
                    <Select>
                        <SelectTrigger id="category">
                        <SelectValue placeholder="Sélectionnez une catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="roman">Roman</SelectItem>
                            <SelectItem value="science-fiction">Science-Fiction</SelectItem>
                            <SelectItem value="histoire">Histoire</SelectItem>
                            <SelectItem value="cuisine">Cuisine</SelectItem>
                            <SelectItem value="poesie">Poésie</SelectItem>
                            <SelectItem value="biographie">Biographie</SelectItem>
                             <SelectItem value="fantaisie">Fantaisie</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="condition">État</Label>
                    <Select>
                        <SelectTrigger id="condition">
                        <SelectValue placeholder="Sélectionnez l'état du livre" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="neuf">Neuf</SelectItem>
                            <SelectItem value="comme-neuf">Comme neuf</SelectItem>
                            <SelectItem value="bon-etat">Bon état</SelectItem>
                            <SelectItem value="passable">Passable</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Prix</Label>
              <Input id="price" type="number" placeholder="Ex: 12.50" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Ajoutez des détails sur le livre, son édition, son usure, etc." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Photo du livre</Label>
              <Input id="image" type="file" />
              <p className="text-xs text-muted-foreground">Téléchargez une image claire de la couverture.</p>
            </div>
            <Button type="submit" size="lg" className="w-full">Mettre en vente</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
