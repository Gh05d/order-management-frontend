interface EmployeeShort {
  _id: string;
  firstName: string;
  lastName: string;
}

interface CustomerShort {
  _id: string;
  firstName: string;
  lastName: string;
}

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductOrder {
  product: Product;
  quantity: number;
}

interface Address {
  street?: string;
  houseNumber?: string;
  zip: string;
  city: string;
  country: string;
  misc?: string;
}

interface Order {
  _id: string;
  status: "OPEN" | "IN_PROGRESS" | "COMPLETE";
  totalPrice: number;
  address: Address;
  updatedAt: string;
  createdAt: string;
  items: ProductOrder[];
  employee?: EmployeeShort;
  customer: CustomerShort;
}
