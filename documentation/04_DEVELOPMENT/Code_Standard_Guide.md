# Code Standard Guide

## วัตถุประสงค์

Code Standard คือมาตรฐานการเขียนโค้ดที่ทีมตกลงใช้ร่วมกัน เพื่อให้:
1. **อ่านโค้ดง่าย** - ทุกคนเข้าใจโค้ดของกันและกัน
2. **Maintain ง่าย** - แก้ไข debug และเพิ่มฟีเจอร์ได้รวดเร็ว
3. **ลด Bugs** - ป้องกันข้อผิดพลาดที่พบบ่อย
4. **ทำงานร่วมกันได้ดี** - Code review และ collaboration ราบรื่น
5. **Onboard Developer ใหม่ง่าย** - มีมาตรฐานที่ชัดเจนให้ทำตาม

---

## Tech Stack

โปรเจกต์นี้ใช้:
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Node.js + TypeScript + Express
- **Database**: PostgreSQL (via Supabase)
- **Deployment**: Railway
- **Version Control**: Git + GitHub

---

## Table of Contents

1. [Naming Conventions](#naming-conventions)
2. [File & Folder Structure](#file--folder-structure)
3. [TypeScript Guidelines](#typescript-guidelines)
4. [React Best Practices](#react-best-practices)
5. [Backend (Node.js) Guidelines](#backend-nodejs-guidelines)
6. [CSS & Tailwind Standards](#css--tailwind-standards)
7. [Git Workflow](#git-workflow)
8. [Code Comments & Documentation](#code-comments--documentation)
9. [Error Handling](#error-handling)
10. [Testing Standards](#testing-standards)
11. [Performance Optimization](#performance-optimization)
12. [Security Best Practices](#security-best-practices)
13. [Code Review Checklist](#code-review-checklist)

---

## 1. Naming Conventions

### General Rules
- ใช้ชื่อที่สื่อความหมาย (descriptive names)
- หลีกเลี่ยงชื่อแบบย่อที่ไม่ชัดเจน (เว้นแต่เป็นที่รู้จักกันทั่วไป เช่น `id`, `url`)
- ใช้ภาษาอังกฤษ (ห้ามใช้ Pinglish หรือภาษาไทย)

### Variables & Functions

```typescript
// ✅ ดี: camelCase สำหรับ variables และ functions
const userName = "John Doe";
const totalPrice = 1000;
const isActive = true;

function calculateTotalPrice(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// ❌ ไม่ดี: ชื่อไม่สื่อความหมาย
const x = "John Doe";
const tp = 1000;
const flag = true;

function calc(arr: any[]): number {
  return arr.reduce((s, i) => s + i.price, 0);
}
```

### Constants

```typescript
// ✅ ดี: UPPER_SNAKE_CASE สำหรับ constants
const MAX_LOGIN_ATTEMPTS = 5;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_PAGE_SIZE = 20;

// Environment variables
const DATABASE_URL = process.env.DATABASE_URL;
const JWT_SECRET = process.env.JWT_SECRET;

// ❌ ไม่ดี
const maxLoginAttempts = 5;
const apiBaseUrl = "https://api.example.com";
```

### Classes & Interfaces (TypeScript)

```typescript
// ✅ ดี: PascalCase สำหรับ Classes, Interfaces, Types
class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
}

interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

type UserRole = 'admin' | 'customer' | 'vendor';

// ❌ ไม่ดี
class userService { }
interface user { }
type userRole = 'admin' | 'customer';
```

### React Components

```typescript
// ✅ ดี: PascalCase สำหรับ component names
function UserProfile({ user }: UserProfileProps) {
  return <div>{user.name}</div>;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return <div>{product.name}</div>;
};

// ไฟล์: UserProfile.tsx, ProductCard.tsx

// ❌ ไม่ดี
function userProfile() { }
const product_card = () => { };
```

### Files & Folders

```bash
# ✅ ดี: PascalCase สำหรับ component files
src/components/UserProfile.tsx
src/components/ProductCard.tsx
src/pages/HomePage.tsx

# ✅ ดี: camelCase สำหรับ utility/service files
src/utils/formatDate.ts
src/services/authService.ts
src/hooks/useAuth.ts

# ✅ ดี: kebab-case สำหรับ folder names (optional)
src/components/product-list/
src/features/user-management/

# ❌ ไม่ดี
src/components/user_profile.tsx
src/components/PRODUCTCARD.tsx
src/utils/FormatDate.ts
```

### Database (SQL)

```sql
-- ✅ ดี: snake_case สำหรับ tables และ columns
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    created_at TIMESTAMP
);

-- ❌ ไม่ดี
CREATE TABLE Users (
    Id SERIAL PRIMARY KEY,
    Email VARCHAR(255),
    FirstName VARCHAR(100)
);
```

---

## 2. File & Folder Structure

### Frontend (React + TypeScript)

```
src/
├── assets/              # Images, fonts, static files
│   ├── images/
│   ├── fonts/
│   └── icons/
├── components/          # Reusable components
│   ├── common/         # Common components (Button, Input, Modal)
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Modal.tsx
│   ├── layout/         # Layout components (Header, Footer, Sidebar)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Sidebar.tsx
│   └── features/       # Feature-specific components
│       ├── auth/
│       │   ├── LoginForm.tsx
│       │   └── RegisterForm.tsx
│       └── products/
│           ├── ProductCard.tsx
│           └── ProductList.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── ProductPage.tsx
│   ├── CartPage.tsx
│   └── NotFoundPage.tsx
├── hooks/              # Custom React hooks
│   ├── useAuth.ts
│   ├── useCart.ts
│   └── useDebounce.ts
├── services/           # API services
│   ├── api.ts          # Axios instance
│   ├── authService.ts
│   ├── productService.ts
│   └── orderService.ts
├── store/              # State management (Zustand/Redux)
│   ├── authStore.ts
│   ├── cartStore.ts
│   └── productStore.ts
├── types/              # TypeScript types & interfaces
│   ├── user.types.ts
│   ├── product.types.ts
│   └── order.types.ts
├── utils/              # Utility functions
│   ├── formatDate.ts
│   ├── formatCurrency.ts
│   └── validation.ts
├── constants/          # Constants
│   ├── routes.ts
│   └── apiEndpoints.ts
├── styles/             # Global styles
│   └── global.css
├── App.tsx             # Main App component
└── main.tsx            # Entry point
```

### Backend (Node.js + TypeScript)

```
src/
├── config/             # Configuration files
│   ├── database.ts
│   ├── env.ts
│   └── logger.ts
├── controllers/        # Route controllers
│   ├── authController.ts
│   ├── productController.ts
│   └── orderController.ts
├── services/           # Business logic
│   ├── authService.ts
│   ├── productService.ts
│   └── orderService.ts
├── models/             # Database models (if using ORM)
│   ├── User.ts
│   ├── Product.ts
│   └── Order.ts
├── repositories/       # Database queries
│   ├── userRepository.ts
│   ├── productRepository.ts
│   └── orderRepository.ts
├── routes/             # API routes
│   ├── index.ts
│   ├── authRoutes.ts
│   ├── productRoutes.ts
│   └── orderRoutes.ts
├── middlewares/        # Express middlewares
│   ├── authMiddleware.ts
│   ├── errorHandler.ts
│   └── validation.ts
├── types/              # TypeScript types
│   ├── user.types.ts
│   ├── product.types.ts
│   └── express.d.ts    # Extend Express types
├── utils/              # Utility functions
│   ├── bcrypt.ts
│   ├── jwt.ts
│   └── logger.ts
├── validators/         # Request validators (Zod/Joi)
│   ├── authValidator.ts
│   └── productValidator.ts
├── app.ts              # Express app setup
└── server.ts           # Server entry point
```

---

## 3. TypeScript Guidelines

### Use Strict Type Checking

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### Define Types & Interfaces

```typescript
// ✅ ดี: Define interfaces สำหรับ objects
interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  createdAt: Date;
}

type UserRole = 'admin' | 'customer' | 'vendor';

// ✅ ดี: Use types สำหรับ function parameters และ return types
function createUser(userData: CreateUserDto): Promise<User> {
  // ...
}

// ❌ ไม่ดี: ใช้ any
function createUser(userData: any): any {
  // ...
}
```

### Use Enums for Fixed Values

```typescript
// ✅ ดี: Use const enum
const enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
}

// ✅ ดี: หรือใช้ Union Types
type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

// ❌ ไม่ดี: ใช้ string literals ซ้ำๆ
function updateOrderStatus(orderId: number, status: string) {
  // status อาจเป็นอะไรก็ได้
}
```

### Avoid `any` Type

```typescript
// ✅ ดี: ใช้ Generic หรือ unknown
function parseJSON<T>(jsonString: string): T {
  return JSON.parse(jsonString);
}

function handleError(error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}

// ❌ ไม่ดี
function parseJSON(jsonString: string): any {
  return JSON.parse(jsonString);
}
```

### Use Optional Chaining & Nullish Coalescing

```typescript
// ✅ ดี: Optional chaining
const userName = user?.profile?.firstName ?? 'Guest';

// ✅ ดี: Nullish coalescing
const pageSize = config.pageSize ?? 20;

// ❌ ไม่ดี
const userName = user && user.profile && user.profile.firstName || 'Guest';
const pageSize = config.pageSize || 20; // ⚠️ pageSize = 0 จะถูกแทนที่ด้วย 20
```

---

## 4. React Best Practices

### Component Structure

```typescript
// ✅ ดี: Component structure
import React, { useState, useEffect } from 'react';
import { User } from '@/types/user.types';
import { useAuth } from '@/hooks/useAuth';

// 1. Props Interface
interface UserProfileProps {
  userId: number;
  onUpdate?: (user: User) => void;
}

// 2. Component
export function UserProfile({ userId, onUpdate }: UserProfileProps) {
  // 3. Hooks (useState, useEffect, custom hooks)
  const { user, loading, error } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  // 4. Effects
  useEffect(() => {
    // Fetch user data
  }, [userId]);

  // 5. Event handlers
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    // Save user data
    onUpdate?.(user);
    setIsEditing(false);
  };

  // 6. Conditional rendering
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return null;

  // 7. JSX Return
  return (
    <div className="user-profile">
      <h1>{user.firstName} {user.lastName}</h1>
      <p>{user.email}</p>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
}
```

### Use Functional Components with Hooks

```typescript
// ✅ ดี: Functional component with hooks
function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>{/* ... */}</div>;
}

// ❌ ไม่ดี: Class component (ใช้แค่ในกรณีจำเป็น)
class ProductList extends React.Component {
  // ...
}
```

### Extract Custom Hooks

```typescript
// ✅ ดี: Custom hook สำหรับ logic ที่ใช้ซ้ำ
// hooks/useProducts.ts
export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await productService.getAll();
        setProducts(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return { products, loading, error };
}

// ใช้งาน
function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

### Use Key Prop Correctly

```typescript
// ✅ ดี: ใช้ unique id เป็น key
{products.map(product => (
  <ProductCard key={product.id} product={product} />
))}

// ⚠️ ใช้ได้แต่ไม่ดี: ใช้ index (ถ้า list ไม่เปลี่ยน)
{products.map((product, index) => (
  <ProductCard key={index} product={product} />
))}

// ❌ ไม่ดี: ไม่ใส่ key
{products.map(product => (
  <ProductCard product={product} />
))}
```

### Avoid Inline Functions in JSX

```typescript
// ✅ ดี: Define function outside JSX
function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = () => {
    cartStore.addItem(product);
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
}

// ❌ ไม่ดี: Inline function (re-render ทุกครั้ง)
function ProductCard({ product }: ProductCardProps) {
  return (
    <button onClick={() => cartStore.addItem(product)}>Add to Cart</button>
  );
}

// ✅ ดี: ใช้ useCallback ถ้าต้อง pass parameters
function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = useCallback(() => {
    cartStore.addItem(product);
  }, [product]);

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
}
```

### Memoization (React.memo, useMemo, useCallback)

```typescript
// ✅ ดี: React.memo สำหรับ component ที่ไม่ต้อง re-render บ่อย
export const ProductCard = React.memo(({ product }: ProductCardProps) => {
  return <div>{product.name}</div>;
});

// ✅ ดี: useMemo สำหรับ expensive calculations
function ProductList({ products }: ProductListProps) {
  const totalPrice = useMemo(() => {
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  return <div>Total: {totalPrice}</div>;
}

// ✅ ดี: useCallback สำหรับ function ที่ pass ไปให้ child component
function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <ChildComponent onClick={handleClick} />;
}
```

---

## 5. Backend (Node.js) Guidelines

### Use MVC Pattern

```
Controllers → Services → Repositories → Database
```

### Controller Layer (Handle HTTP)

```typescript
// ✅ ดี: Controller รับ request, ส่งต่อให้ service, return response
// controllers/productController.ts
import { Request, Response, NextFunction } from 'express';
import { productService } from '../services/productService';

export class ProductController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await productService.getAll();
      res.json({ success: true, data: products });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await productService.getById(Number(id));

      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found'
        });
      }

      res.json({ success: true, data: product });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const productData = req.body;
      const newProduct = await productService.create(productData);
      res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
      next(error);
    }
  }
}

export const productController = new ProductController();
```

### Service Layer (Business Logic)

```typescript
// ✅ ดี: Service มี business logic
// services/productService.ts
import { productRepository } from '../repositories/productRepository';
import { Product, CreateProductDto } from '../types/product.types';

export class ProductService {
  async getAll(): Promise<Product[]> {
    return productRepository.findAll();
  }

  async getById(id: number): Promise<Product | null> {
    return productRepository.findById(id);
  }

  async create(data: CreateProductDto): Promise<Product> {
    // Business logic: Validate data
    if (data.price < 0) {
      throw new Error('Price cannot be negative');
    }

    // Generate slug
    const slug = this.generateSlug(data.name);

    return productRepository.create({ ...data, slug });
  }

  async updateStock(productId: number, quantity: number): Promise<void> {
    const product = await productRepository.findById(productId);

    if (!product) {
      throw new Error('Product not found');
    }

    if (product.stockQuantity < quantity) {
      throw new Error('Insufficient stock');
    }

    await productRepository.updateStock(productId, quantity);
  }

  private generateSlug(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}

export const productService = new ProductService();
```

### Repository Layer (Database Queries)

```typescript
// ✅ ดี: Repository จัดการ database queries
// repositories/productRepository.ts
import { pool } from '../config/database';
import { Product, CreateProductDto } from '../types/product.types';

export class ProductRepository {
  async findAll(): Promise<Product[]> {
    const result = await pool.query(
      'SELECT * FROM products WHERE is_active = true ORDER BY created_at DESC'
    );
    return result.rows;
  }

  async findById(id: number): Promise<Product | null> {
    const result = await pool.query(
      'SELECT * FROM products WHERE id = $1',
      [id]
    );
    return result.rows[0] || null;
  }

  async create(data: CreateProductDto & { slug: string }): Promise<Product> {
    const result = await pool.query(
      `INSERT INTO products (name, slug, description, price, stock_quantity, category_id)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [data.name, data.slug, data.description, data.price, data.stockQuantity, data.categoryId]
    );
    return result.rows[0];
  }

  async updateStock(productId: number, quantity: number): Promise<void> {
    await pool.query(
      'UPDATE products SET stock_quantity = stock_quantity - $1 WHERE id = $2',
      [quantity, productId]
    );
  }
}

export const productRepository = new ProductRepository();
```

### Use Middleware for Common Logic

```typescript
// ✅ ดี: Authentication middleware
// middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  user?: {
    id: number;
    email: string;
    role: string;
  };
}

export function authenticate(req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

export function authorize(...roles: string[]) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  };
}
```

### Error Handling Middleware

```typescript
// ✅ ดี: Global error handler
// middlewares/errorHandler.ts
import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational = true
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export function errorHandler(
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Unknown error
  console.error('ERROR:', err);
  return res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
}
```

---

## 6. CSS & Tailwind Standards

### Use Tailwind Utility Classes

```tsx
// ✅ ดี: ใช้ Tailwind utilities
function Button({ children }: ButtonProps) {
  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
      {children}
    </button>
  );
}

// ❌ ไม่ดี: Inline styles
function Button({ children }: ButtonProps) {
  return (
    <button style={{ padding: '8px 16px', backgroundColor: '#2563eb' }}>
      {children}
    </button>
  );
}
```

### Group Related Classes

```tsx
// ✅ ดี: จัดกลุ่ม classes ให้อ่านง่าย
<div className={`
  flex items-center justify-between
  px-4 py-2
  bg-white border border-gray-200 rounded-lg
  hover:shadow-md transition
`}>
  Content
</div>

// หรือใช้ clsx/classnames
import clsx from 'clsx';

<button className={clsx(
  'px-4 py-2 rounded-lg transition',
  isPrimary && 'bg-blue-600 text-white hover:bg-blue-700',
  isSecondary && 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  isDisabled && 'opacity-50 cursor-not-allowed'
)}>
  Click me
</button>
```

### Extract Reusable Components

```tsx
// ✅ ดี: สร้าง reusable component
// components/common/Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick
}: ButtonProps) {
  const baseClasses = 'rounded-lg font-medium transition';

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], sizeClasses[size])}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// ใช้งาน
<Button variant="primary" size="lg">Save</Button>
<Button variant="danger">Delete</Button>
```

### Responsive Design

```tsx
// ✅ ดี: Mobile-first responsive design
<div className={`
  grid grid-cols-1           /* Mobile: 1 column */
  md:grid-cols-2             /* Tablet: 2 columns */
  lg:grid-cols-3             /* Desktop: 3 columns */
  gap-4
`}>
  {products.map(product => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>

// ตัวอย่าง breakpoints
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
```

---

## 7. Git Workflow

### Branch Naming

```bash
# Format: <type>/<description>

# ✅ ดี
git checkout -b feature/add-user-authentication
git checkout -b bugfix/fix-cart-calculation
git checkout -b hotfix/security-patch
git checkout -b refactor/improve-product-service

# ❌ ไม่ดี
git checkout -b new-feature
git checkout -b fix
git checkout -b my-branch
```

### Branch Types

```bash
main              # Production branch (protected)
develop           # Development branch
feature/*         # New features
bugfix/*          # Bug fixes
hotfix/*          # Urgent production fixes
refactor/*        # Code refactoring
chore/*           # Maintenance tasks
```

### Commit Messages

```bash
# Format: <type>(<scope>): <subject>

# ✅ ดี
git commit -m "feat(auth): add login with Google OAuth"
git commit -m "fix(cart): fix total price calculation error"
git commit -m "refactor(product): extract product service logic"
git commit -m "docs(readme): update installation instructions"
git commit -m "chore(deps): update dependencies to latest version"

# Commit types:
# feat:     New feature
# fix:      Bug fix
# refactor: Code refactoring
# docs:     Documentation changes
# style:    Code style changes (formatting, semicolons, etc.)
# test:     Adding or updating tests
# chore:    Maintenance tasks (dependencies, configs, etc.)
# perf:     Performance improvements

# ❌ ไม่ดี
git commit -m "update"
git commit -m "fix bug"
git commit -m "asdfasdf"
git commit -m "WIP"
```

### Pull Request (PR) Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made
- Added user authentication with JWT
- Created login/register endpoints
- Added auth middleware

## Testing
- [ ] Unit tests added
- [ ] Integration tests added
- [ ] Manual testing completed

## Screenshots (if applicable)
[Add screenshots here]

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No console.log() or commented code left
- [ ] Tests pass locally
```

### Git Commands Best Practices

```bash
# 1. Pull latest changes before starting work
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/add-payment-integration

# 3. Make small, focused commits
git add src/services/paymentService.ts
git commit -m "feat(payment): add payment service"

git add src/controllers/paymentController.ts
git commit -m "feat(payment): add payment controller"

# 4. Push to remote
git push origin feature/add-payment-integration

# 5. Create Pull Request on GitHub

# 6. After PR approved and merged, delete local branch
git checkout develop
git pull origin develop
git branch -d feature/add-payment-integration
```

---

## 8. Code Comments & Documentation

### When to Comment

```typescript
// ✅ ดี: Comment สำหรับ complex logic
/**
 * Calculate discount based on user loyalty tier
 * Bronze: 5%, Silver: 10%, Gold: 15%, Platinum: 20%
 */
function calculateDiscount(user: User, totalPrice: number): number {
  const discountRates = {
    bronze: 0.05,
    silver: 0.10,
    gold: 0.15,
    platinum: 0.20,
  };

  const rate = discountRates[user.loyaltyTier] || 0;
  return totalPrice * rate;
}

// ✅ ดี: Comment สำหรับ TODO/FIXME/HACK
// TODO: Add caching for frequently accessed products
// FIXME: Handle edge case when product is out of stock
// HACK: Temporary workaround until API v2 is ready

// ❌ ไม่ดี: Comment ที่ไม่จำเป็น (self-explanatory code)
// Get user by id
function getUserById(id: number) { }

// Loop through products
products.forEach(product => { });
```

### JSDoc for Functions

```typescript
// ✅ ดี: JSDoc comments
/**
 * Registers a new user in the system
 * @param userData - User registration data
 * @param userData.email - User's email address
 * @param userData.password - User's password (will be hashed)
 * @param userData.firstName - User's first name
 * @param userData.lastName - User's last name
 * @returns Promise resolving to created user object
 * @throws {AppError} If email already exists
 * @example
 * const user = await registerUser({
 *   email: 'john@example.com',
 *   password: 'SecurePass123',
 *   firstName: 'John',
 *   lastName: 'Doe'
 * });
 */
async function registerUser(userData: CreateUserDto): Promise<User> {
  // Implementation
}
```

### README.md

```markdown
# Project Name

## Description
Brief description of the project

## Tech Stack
- Frontend: React + TypeScript + Tailwind CSS
- Backend: Node.js + TypeScript + Express
- Database: PostgreSQL (Supabase)
- Deployment: Railway

## Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0
- PostgreSQL >= 14.0

## Installation

1. Clone repository
```bash
git clone https://github.com/username/project.git
cd project
```

2. Install dependencies
```bash
npm install
```

3. Setup environment variables
```bash
cp .env.example .env
# Edit .env with your credentials
```

4. Run database migrations
```bash
npm run migrate
```

5. Start development server
```bash
npm run dev
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure
```
src/
├── components/
├── pages/
├── services/
└── ...
```

## API Documentation
See [API.md](./docs/API.md)

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md)

## License
MIT
```

---

## 9. Error Handling

### Frontend Error Handling

```typescript
// ✅ ดี: Try-catch with specific error handling
async function fetchProducts() {
  try {
    setLoading(true);
    setError(null);

    const products = await productService.getAll();
    setProducts(products);
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response?.status === 404) {
        setError('Products not found');
      } else if (err.response?.status === 500) {
        setError('Server error. Please try again later.');
      } else {
        setError('Failed to fetch products');
      }
    } else {
      setError('An unexpected error occurred');
    }
    console.error('Error fetching products:', err);
  } finally {
    setLoading(false);
  }
}

// ✅ ดี: Error Boundary สำหรับ React
class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please refresh the page.</div>;
    }

    return this.props.children;
  }
}
```

### Backend Error Handling

```typescript
// ✅ ดี: Custom error classes
export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational = true
  ) {
    super(message);
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(400, message);
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(404, `${resource} not found`);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized') {
    super(401, message);
  }
}

// ใช้งาน
async function getProductById(id: number): Promise<Product> {
  const product = await productRepository.findById(id);

  if (!product) {
    throw new NotFoundError('Product');
  }

  return product;
}

async function createProduct(data: CreateProductDto): Promise<Product> {
  if (data.price < 0) {
    throw new ValidationError('Price cannot be negative');
  }

  return productRepository.create(data);
}
```

---

## 10. Testing Standards

### Unit Tests (Jest + Testing Library)

```typescript
// ✅ ดี: Test file naming: <filename>.test.ts
// utils/formatCurrency.test.ts

import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('should format number to Thai Baht currency', () => {
    expect(formatCurrency(1000)).toBe('฿1,000.00');
  });

  it('should handle decimal places', () => {
    expect(formatCurrency(1234.56)).toBe('฿1,234.56');
  });

  it('should handle zero', () => {
    expect(formatCurrency(0)).toBe('฿0.00');
  });

  it('should handle negative numbers', () => {
    expect(formatCurrency(-500)).toBe('-฿500.00');
  });
});
```

### React Component Tests

```typescript
// ✅ ดี: Component tests
// components/Button.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply correct variant class', () => {
    const { container } = render(<Button variant="primary">Save</Button>);
    expect(container.firstChild).toHaveClass('bg-blue-600');
  });
});
```

### API Tests (Supertest)

```typescript
// ✅ ดี: API integration tests
// routes/products.test.ts

import request from 'supertest';
import app from '../app';

describe('GET /api/products', () => {
  it('should return all products', async () => {
    const response = await request(app)
      .get('/api/products')
      .expect(200);

    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('should return 404 for non-existent product', async () => {
    const response = await request(app)
      .get('/api/products/99999')
      .expect(404);

    expect(response.body.success).toBe(false);
  });
});

describe('POST /api/products', () => {
  it('should create new product', async () => {
    const productData = {
      name: 'Test Product',
      price: 100,
      stockQuantity: 10,
    };

    const response = await request(app)
      .post('/api/products')
      .send(productData)
      .expect(201);

    expect(response.body.success).toBe(true);
    expect(response.body.data.name).toBe('Test Product');
  });
});
```

---

## 11. Performance Optimization

### Frontend Optimization

```typescript
// ✅ ดี: Lazy loading components
const ProductPage = lazy(() => import('./pages/ProductPage'));
const CartPage = lazy(() => import('./pages/CartPage'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Suspense>
  );
}

// ✅ ดี: Debounce search input
import { useDebounce } from '@/hooks/useDebounce';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchProducts(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search products..."
    />
  );
}

// ✅ ดี: Virtualization สำหรับ long lists
import { FixedSizeList } from 'react-window';

function ProductList({ products }: ProductListProps) {
  return (
    <FixedSizeList
      height={600}
      itemCount={products.length}
      itemSize={100}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          <ProductCard product={products[index]} />
        </div>
      )}
    </FixedSizeList>
  );
}
```

### Backend Optimization

```typescript
// ✅ ดี: Database connection pooling
import { Pool } from 'pg';

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,               // Maximum connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// ✅ ดี: Caching with Redis
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

async function getProducts(): Promise<Product[]> {
  // Check cache first
  const cached = await redis.get('products:all');
  if (cached) {
    return JSON.parse(cached);
  }

  // Fetch from database
  const products = await productRepository.findAll();

  // Cache for 5 minutes
  await redis.setex('products:all', 300, JSON.stringify(products));

  return products;
}

// ✅ ดี: Pagination
async function getProducts(page = 1, pageSize = 20): Promise<PaginatedResponse<Product>> {
  const offset = (page - 1) * pageSize;

  const [products, total] = await Promise.all([
    pool.query('SELECT * FROM products LIMIT $1 OFFSET $2', [pageSize, offset]),
    pool.query('SELECT COUNT(*) FROM products'),
  ]);

  return {
    data: products.rows,
    pagination: {
      page,
      pageSize,
      total: parseInt(total.rows[0].count),
      totalPages: Math.ceil(total.rows[0].count / pageSize),
    },
  };
}
```

---

## 12. Security Best Practices

### Input Validation

```typescript
// ✅ ดี: Use Zod for validation
import { z } from 'zod';

const createUserSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
});

// Middleware
export function validateRequest(schema: z.ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          errors: error.errors,
        });
      }
      next(error);
    }
  };
}

// ใช้งาน
router.post('/users', validateRequest(createUserSchema), createUser);
```

### Password Hashing

```typescript
// ✅ ดี: Hash passwords with bcrypt
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
```

### JWT Authentication

```typescript
// ✅ ดี: JWT with expiration
import jwt from 'jsonwebtoken';

export function generateToken(user: User): string {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  );
}

export function verifyToken(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET!);
}
```

### Prevent SQL Injection

```typescript
// ✅ ดี: Parameterized queries
async function getUserByEmail(email: string): Promise<User | null> {
  const result = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  return result.rows[0] || null;
}

// ❌ ไม่ดี: String interpolation (SQL Injection!)
async function getUserByEmail(email: string) {
  const result = await pool.query(
    `SELECT * FROM users WHERE email = '${email}'`
  );
  return result.rows[0];
}
```

### Environment Variables

```typescript
// ✅ ดี: Use environment variables
// .env
DATABASE_URL=postgresql://user:pass@localhost:5432/db
JWT_SECRET=your-secret-key-here
API_KEY=your-api-key

// config/env.ts
import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL!,
  jwtSecret: process.env.JWT_SECRET!,
  nodeEnv: process.env.NODE_ENV || 'development',
};

// ❌ ไม่ดี: Hardcoded secrets
const JWT_SECRET = 'my-secret-key-123';
```

---

## 13. Code Review Checklist

### Before Submitting PR

- [ ] โค้ดทำงานได้ตามที่ต้องการ
- [ ] ไม่มี `console.log()` หรือ debug code เหลือ
- [ ] ไม่มี commented code เหลือ
- [ ] ไม่มี TODO/FIXME ที่ควรแก้ในทันที
- [ ] Tests ผ่านทั้งหมด (`npm test`)
- [ ] Linting ผ่าน (`npm run lint`)
- [ ] Build ผ่าน (`npm run build`)
- [ ] ตรวจสอบ git diff ทั้งหมด
- [ ] Commit messages ชัดเจน
- [ ] อัพเดท documentation (ถ้าจำเป็น)

### Code Quality

- [ ] ตัวแปรและฟังก์ชันมีชื่อที่สื่อความหมาย
- [ ] ฟังก์ชันทำงานเพียงอย่างเดียว (Single Responsibility)
- [ ] ไม่มี code duplication
- [ ] Error handling ครบถ้วน
- [ ] Type safety (TypeScript types ครบ)
- [ ] ไม่มี `any` type (ยกเว้นกรณีจำเป็น)

### Performance

- [ ] ไม่มี unnecessary re-renders (React)
- [ ] ใช้ memoization เมื่อเหมาะสม
- [ ] Database queries มี indexes
- [ ] ไม่มี N+1 query problems
- [ ] Images/assets optimized

### Security

- [ ] Input validation ครบถ้วน
- [ ] ไม่มี SQL injection risks
- [ ] ไม่มี XSS vulnerabilities
- [ ] Passwords hashed
- [ ] Sensitive data ไม่ commit ลง git
- [ ] Environment variables ใช้ถูกต้อง

### Testing

- [ ] มี unit tests สำหรับ business logic
- [ ] มี integration tests สำหรับ API endpoints
- [ ] Edge cases ครอบคลุม
- [ ] Test coverage >= 80%

---

## Tools & Extensions

### VS Code Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "eamodio.gitlens",
    "christian-kohler.path-intellisense",
    "dsznajder.es7-react-js-snippets"
  ]
}
```

### ESLint Configuration

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'no-console': 'warn',
  },
};
```

### Prettier Configuration

```javascript
// .prettierrc.js
module.exports = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
};
```

---

## Summary Checklist

### Daily Development

- [ ] Pull latest code ก่อนเริ่มงาน
- [ ] สร้าง branch ใหม่สำหรับแต่ละ feature/bugfix
- [ ] Commit บ่อยๆ ด้วย meaningful messages
- [ ] Run tests ก่อน push
- [ ] Review โค้ดของตัวเอง ก่อนสร้าง PR
- [ ] ตอบ code review comments ทันที

### Code Quality

- [ ] ใช้ TypeScript อย่างเต็มที่ (ไม่ใช้ `any`)
- [ ] ตั้งชื่อตัวแปร/ฟังก์ชัน ให้สื่อความหมาย
- [ ] เขียน comments สำหรับ complex logic
- [ ] Extract reusable components/functions
- [ ] Handle errors properly
- [ ] Write tests

### Performance

- [ ] Optimize re-renders (React.memo, useMemo, useCallback)
- [ ] Use lazy loading สำหรับ large components
- [ ] Implement pagination สำหรับ large lists
- [ ] Use database indexes
- [ ] Implement caching เมื่อเหมาะสม

### Security

- [ ] Validate all user inputs
- [ ] Use parameterized queries
- [ ] Hash passwords
- [ ] Use HTTPS
- [ ] Never commit secrets/credentials
- [ ] Keep dependencies updated

---

## Resources

### Documentation
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Node.js Docs](https://nodejs.org/docs)
- [Express Docs](https://expressjs.com)
- [PostgreSQL Docs](https://www.postgresql.org/docs)

### Style Guides
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)

### Tools
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)

---

**อัพเดทล่าสุด**: 2025-01-15
**Version**: 1.0.0
