import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";

export default function AuthPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-headline">Rejoignez-nous</CardTitle>
          <CardDescription>Connectez-vous pour vendre vos livres et contacter d'autres lecteurs.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button variant="outline" className="w-full h-12 text-base">
              <Icons.google className="mr-2 h-6 w-6" />
              Continuer avec Google
            </Button>
            <Button variant="outline" className="w-full h-12 text-base">
                <Icons.facebook className="mr-2 h-6 w-6" />
              Continuer avec Facebook
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
