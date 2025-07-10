import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  const plants = [
    {
      id: 101,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 59.99,
      stock: 4.5,
    },
    {
      id: 102,
      name: "Yoga Mat",
      category: "Sports & Fitness",
      price: 25.0,
      stock: 4.8,
    },
    {
      id: 103,
      name: "Coffee Maker",
      category: "Home Appliances",
      price: 80.0,
      stock: 4.2,
    },
    {
      id: 104,
      name: "Running Shoes",
      category: "Sportswear",
      price: 70.0,
      stock: 4.6,
    },
    {
      id: 105,
      name: "Smartwatch",
      category: "Electronics",
      price: 120.0,
      stock: 4.7,
    },
  ];
  
  export default function InventoryTable() {
    return (
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
    );
  }
  