"use client";

import type { Book } from "@/lib/placeholder-data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Pencil, Trash2, CheckCircle } from "lucide-react";

type ListingsTableProps = {
  listings: Book[];
};

export function ListingsTable({ listings }: ListingsTableProps) {
  return (
    <div className="rounded-md border">
        <Table>
        <TableHeader>
            <TableRow>
            <TableHead>Livre</TableHead>
            <TableHead className="hidden md:table-cell">Prix</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>
                <span className="sr-only">Actions</span>
            </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {listings.length > 0 ? (
                listings.map((book) => (
                    <TableRow key={book.id}>
                    <TableCell className="font-medium">
                        <div className="flex flex-col">
                            <span>{book.title}</span>
                            <span className="text-sm text-muted-foreground md:hidden">{book.price}€</span>
                        </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{book.price}€</TableCell>
                    <TableCell>
                        <Badge variant={book.isSold ? "destructive" : "secondary"}>
                        {book.isSold ? "Vendu" : "En vente"}
                        </Badge>
                    </TableCell>
                    <TableCell>
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {!book.isSold && (
                                <DropdownMenuItem>
                                    <CheckCircle className="mr-2 h-4 w-4" />
                                    Marquer comme vendu
                                </DropdownMenuItem>
                            )}
                            <DropdownMenuItem>
                                <Pencil className="mr-2 h-4 w-4" />
                                Modifier
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive focus:text-destructive">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Supprimer
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                    </TableRow>
                ))
            ) : (
                <TableRow>
                    <TableCell colSpan={4} className="h-24 text-center">
                        Vous n'avez aucune annonce pour le moment.
                    </TableCell>
                </TableRow>
            )}
        </TableBody>
        </Table>
    </div>
  );
}
