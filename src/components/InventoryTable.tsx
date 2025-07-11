'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Combobox } from "./ui/combo-box";
import { useState } from "react";
  
  const plants = [
    {
      id: '349inkopsnj',
      name: "Puprple Hibiscus",
      category: "outdoor",
      price: 59.99,
      stock: 4,
    }
    
  ];
  
  export default function InventoryTable() {
const [selectedCategory, SetSelectedCategory] = useState('')
    return (
      <div className="w-full">
      <div className="flex items-center gap-2 py-4">
        <div className="relative max-w--sm w-full">
          <Input placeholder="Filter plants..." className="pl-10"/>
        <Search className="absolute h-4 w-4 left-3 top-1/2 transform -translate-y-1/2" />
        </div>
        <Combobox value={selectedCategory} onChange={(val) => SetSelectedCategory(val) }/>
      </div>
      <div className="w-full border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-4">Plant ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price (USD)</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plants.map((plant) => (
              <TableRow key={plant.id} className="odd:bg-muted/50">
                <TableCell className="pl-4">{plant.id}</TableCell>
                <TableCell className="font-medium">{plant.name}</TableCell>
                <TableCell>{plant.category}</TableCell>
                <TableCell>{plant.price}</TableCell>
                <TableCell  className="font-bold">{plant.stock}</TableCell>
                <TableCell  className="text-right">
                 <div className="flex justify-end space-x-4">
                    <h1>Edit button</h1>
                    <h1>Delete button</h1>
                </div>   
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      </div>
      
    );
  }
  