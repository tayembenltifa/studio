"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function SearchFilters() {
  return (
    <div className="mb-12 bg-card p-4 rounded-lg shadow-sm border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher par titre, auteur..."
              className="pl-10"
            />
          </div>
        </div>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Catégorie" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les catégories</SelectItem>
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
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Prix" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les prix</SelectItem>
              <SelectItem value="0-10">0€ - 10€</SelectItem>
              <SelectItem value="10-20">10€ - 20€</SelectItem>
              <SelectItem value="20-plus">20€ et plus</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
