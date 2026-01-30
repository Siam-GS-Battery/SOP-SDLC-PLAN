# Code Standard Guide - มาตรฐานการเขียนโค้ด

## ข้อมูลเอกสาร

| รายการ | รายละเอียด |
|--------|------------|
| **รหัสเอกสาร** | SOP-DEV-001 |
| **ชื่อเอกสาร** | Code Standard Guide - มาตรฐานการเขียนโค้ด |
| **เวอร์ชัน** | 2.0.0 |
| **ประเภท** | Standard Operating Procedure (SOP) |
| **ผู้จัดทำ** | Development Team |
| **วันที่มีผล** | 30 มกราคม 2026 |
| **ทบทวนครั้งถัดไป** | 30 กรกฎาคม 2026 |
| **สถานะ** | บังคับใช้ (Enforced) |

---

## ภาพรวม

เอกสารฉบับนี้เป็น **Standard Operating Procedure (SOP)** สำหรับมาตรฐานการเขียนโค้ดของทีมพัฒนา จัดทำขึ้นเพื่อให้นักพัฒนาทุกคน โดยเฉพาะ **สมาชิกใหม่ที่เข้ามาร่วมทีม** สามารถเข้าใจและปฏิบัติตามแนวทางการเขียนโค้ดที่ทีมตกลงร่วมกันได้อย่างถูกต้อง

### วัตถุประสงค์

1. **อ่านโค้ดง่าย** - ทุกคนเข้าใจโค้ดของกันและกัน
2. **Maintain ง่าย** - แก้ไข debug และเพิ่มฟีเจอร์ได้รวดเร็ว
3. **ลด Bugs** - ป้องกันข้อผิดพลาดที่พบบ่อย
4. **ทำงานร่วมกันได้ดี** - Code review และ collaboration ราบรื่น
5. **Onboard Developer ใหม่ง่าย** - มีมาตรฐานที่ชัดเจนให้ทำตาม

### ขอบเขตการบังคับใช้

| หัวข้อ | รายละเอียด |
|--------|------------|
| **ใครต้องปฏิบัติตาม** | นักพัฒนาทุกคนในทีม (Frontend, Backend, Full-stack) |
| **บังคับใช้กับ** | โค้ดทุกบรรทัดที่ commit เข้า repository |
| **ตรวจสอบโดย** | Code Review process ก่อน merge เข้า branch หลัก |

### Tech Stack ของโปรเจกต์

| เทคโนโลยี | ใช้งาน |
|-----------|--------|
| **Frontend** | React + TypeScript + Tailwind CSS |
| **Backend** | Node.js + TypeScript + Express |
| **Database** | PostgreSQL (via Supabase) |
| **Deployment** | Railway |
| **Version Control** | Git + GitHub |

---

## 📋 สารบัญ

1. [Naming Conventions - หลักการตั้งชื่อ](#1-naming-conventions---หลักการตั้งชื่อ)
2. [File & Folder Structure - โครงสร้างไฟล์และโฟลเดอร์](#2-file--folder-structure---โครงสร้างไฟล์และโฟลเดอร์)
3. [TypeScript Guidelines - แนวทางการใช้ TypeScript](#3-typescript-guidelines---แนวทางการใช้-typescript)
4. [React Best Practices - แนวปฏิบัติ React](#4-react-best-practices---แนวปฏิบัติ-react)
5. [Backend (Node.js) Guidelines - แนวทาง Backend](#5-backend-nodejs-guidelines---แนวทาง-backend)
6. [CSS & Tailwind Standards - มาตรฐาน CSS](#6-css--tailwind-standards---มาตรฐาน-css)
7. [Git Workflow - ขั้นตอนการใช้ Git](#7-git-workflow---ขั้นตอนการใช้-git)
8. [Code Comments & Documentation - การเขียน Comment](#8-code-comments--documentation---การเขียน-comment)
9. [Error Handling - การจัดการข้อผิดพลาด](#9-error-handling---การจัดการข้อผิดพลาด)
10. [Testing Standards - มาตรฐานการทดสอบ](#10-testing-standards---มาตรฐานการทดสอบ)
11. [Performance Optimization - การปรับปรุงประสิทธิภาพ](#11-performance-optimization---การปรับปรุงประสิทธิภาพ)
12. [Security Best Practices - แนวปฏิบัติด้านความปลอดภัย](#12-security-best-practices---แนวปฏิบัติด้านความปลอดภัย)
13. [Code Review Checklist - รายการตรวจสอบ](#13-code-review-checklist---รายการตรวจสอบ)
14. [Tools & Extensions - เครื่องมือที่ต้องติดตั้ง](#14-tools--extensions---เครื่องมือที่ต้องติดตั้ง)
15. [Quick Reference - ตารางอ้างอิงด่วน](#15-quick-reference---ตารางอ้างอิงด่วน)

---

## 15. Quick Reference - ตารางอ้างอิงด่วน

> 💡 **สำหรับนักพัฒนาใหม่:** เริ่มจากตารางสรุปนี้ก่อน แล้วค่อยอ่านรายละเอียดในแต่ละหัวข้อ

### ตารางสรุป Naming Conventions

| ประเภท | รูปแบบ | ตัวอย่าง |
|--------|--------|----------|
| Variables & Functions | `camelCase` | `userName`, `calculateTotal()` |
| Constants | `UPPER_SNAKE_CASE` | `MAX_LOGIN_ATTEMPTS`, `API_BASE_URL` |
| Classes & Interfaces | `PascalCase` | `UserService`, `ProductCard` |
| React Components | `PascalCase` | `UserProfile.tsx`, `LoginForm.tsx` |
| Utility Files | `camelCase` | `formatDate.ts`, `authService.ts` |
| Custom Hooks | `camelCase` (prefix `use`) | `useAuth.ts`, `useCart.ts` |
| Folders | `kebab-case` | `user-management/`, `product-list/` |
| Database Tables/Columns | `snake_case` | `users`, `first_name`, `created_at` |
| Branch Names | `type/description` | `feature/add-login`, `bugfix/fix-cart` |
| Commit Messages | `type(scope): subject` | `feat(auth): add Google OAuth` |

### ข้อห้ามที่ต้องจำ

| ❌ ห้ามทำ | ✅ ทำแทน |
|-----------|----------|
| ใช้ `any` type ใน TypeScript | ใช้ type/interface ที่เฉพาะเจาะจง หรือ `unknown` |
| ใช้ชื่อตัวแปรแบบย่อ (`x`, `tp`, `arr`) | ใช้ชื่อที่สื่อความหมาย (`userName`, `totalPrice`) |
| ใช้ภาษาไทยในโค้ด | ใช้ภาษาอังกฤษเท่านั้น |
| Hardcode secrets/credentials | ใช้ Environment Variables |
| ใช้ String interpolation ใน SQL | ใช้ Parameterized queries (`$1`, `$2`) |
| Commit ไฟล์ `.env` ลง Git | เพิ่มใน `.gitignore` และใช้ `.env.example` |
| เขียน inline styles ใน React | ใช้ Tailwind utility classes |
| ใช้ Class components | ใช้ Functional components + Hooks |
| Commit ด้วย message "fix" หรือ "update" | เขียน commit message ตามรูปแบบ Conventional Commits |
| Push ตรงไปที่ `main` branch | สร้าง feature branch และเปิด Pull Request |

---

## 1. Naming Conventions - หลักการตั้งชื่อ

### ขั้นตอนปฏิบัติ

**ขั้นตอนที่ 1:** ใช้ชื่อที่สื่อความหมาย (descriptive names) เสมอ

**ขั้นตอนที่ 2:** ใช้ภาษาอังกฤษเท่านั้น (ห้ามใช้ภาษาไทยหรือ Pinglish)

**ขั้นตอนที่ 3:** เลือกรูปแบบการตั้งชื่อตามประเภท ดังนี้:

### 1.1 Variables & Functions - ใช้ `camelCase`

```typescript
// ✅ ถูกต้อง
const userName = "John Doe";
const totalPrice = 1000;
const isActive = true;

function calculateTotalPrice(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// ❌ ผิด: ชื่อไม่สื่อความหมาย
const x = "John Doe";
const tp = 1000;
const flag = true;

function calc(arr: any[]): number {
  return arr.reduce((s, i) => s + i.price, 0);
}
```

### 1.2 Constants - ใช้ `UPPER_SNAKE_CASE`

```typescript
// ✅ ถูกต้อง
const MAX_LOGIN_ATTEMPTS = 5;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_PAGE_SIZE = 20;

// Environment variables
const DATABASE_URL = process.env.DATABASE_URL;
const JWT_SECRET = process.env.JWT_SECRET;

// ❌ ผิด
const maxLoginAttempts = 5;
const apiBaseUrl = "https://api.example.com";
```

### 1.3 Classes & Interfaces - ใช้ `PascalCase`

```typescript
// ✅ ถูกต้อง
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

// ❌ ผิด
class userService { }
interface user { }
type userRole = 'admin' | 'customer';
```

### 1.4 React Components - ใช้ `PascalCase`

```typescript
// ✅ ถูกต้อง
function UserProfile({ user }: UserProfileProps) {
  return <div>{user.name}</div>;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return <div>{product.name}</div>;
};

// ไฟล์: UserProfile.tsx, ProductCard.tsx

// ❌ ผิด
function userProfile() { }
const product_card = () => { };
```

### 1.5 Files & Folders

```bash
# ✅ ถูกต้อง: PascalCase สำหรับ component files
src/components/UserProfile.tsx
src/components/ProductCard.tsx
src/pages/HomePage.tsx

# ✅ ถูกต้อง: camelCase สำหรับ utility/service files
src/utils/formatDate.ts
src/services/authService.ts
src/hooks/useAuth.ts

# ✅ ถูกต้อง: kebab-case สำหรับ folder names
src/components/product-list/
src/features/user-management/

# ❌ ผิด
src/components/user_profile.tsx
src/components/PRODUCTCARD.tsx
src/utils/FormatDate.ts
```

### 1.6 Database (SQL) - ใช้ `snake_case`

```sql
-- ✅ ถูกต้อง
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    created_at TIMESTAMP
);

-- ❌ ผิด
CREATE TABLE Users (
    Id SERIAL PRIMARY KEY,
    Email VARCHAR(255),
    FirstName VARCHAR(100)
);
```

---

## 2. File & Folder Structure - โครงสร้างไฟล์และโฟลเดอร์

> 💡 **สำหรับนักพัฒนาใหม่:** ให้ศึกษาโครงสร้างโฟลเดอร์ด้านล่างก่อนเริ่มเขียนโค้ด เมื่อสร้างไฟล์ใหม่ต้องวางไว้ในโฟลเดอร์ที่ถูกต้องตาม convention

### 2.1 Frontend (React + TypeScript)

```
src/
├── assets/              # รูปภาพ, fonts, static files
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
├── pages/              # Page components (1 ไฟล์ = 1 หน้า)
│   ├── HomePage.tsx
│   ├── ProductPage.tsx
│   ├── CartPage.tsx
│   └── NotFoundPage.tsx
├── hooks/              # Custom React hooks
│   ├── useAuth.ts
│   ├── useCart.ts
│   └── useDebounce.ts
├── services/           # API services (เรียก API)
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

### 2.2 Backend (Node.js + TypeScript)

```
src/
├── config/             # Configuration files
│   ├── database.ts
│   ├── env.ts
│   └── logger.ts
├── controllers/        # Route controllers (รับ request, ส่ง response)
│   ├── authController.ts
│   ├── productController.ts
│   └── orderController.ts
├── services/           # Business logic (ตัวประมวลผลหลัก)
│   ├── authService.ts
│   ├── productService.ts
│   └── orderService.ts
├── models/             # Database models (ถ้าใช้ ORM)
│   ├── User.ts
│   ├── Product.ts
│   └── Order.ts
├── repositories/       # Database queries (ติดต่อฐานข้อมูล)
│   ├── userRepository.ts
│   ├── productRepository.ts
│   └── orderRepository.ts
├── routes/             # API routes (กำหนด URL path)
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

> ⚠️ **ข้อควรระวัง:** อย่าเขียน business logic ใน controller หรือ route — ให้เขียนใน service เสมอ

---

## 3. TypeScript Guidelines - แนวทางการใช้ TypeScript

### ขั้นตอนปฏิบัติ

**ขั้นตอนที่ 1:** ตั้งค่า strict mode ใน `tsconfig.json`

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

**ขั้นตอนที่ 2:** กำหนด type/interface สำหรับทุก object

```typescript
// ✅ ถูกต้อง: กำหนด interface สำหรับ objects
interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  createdAt: Date;
}

type UserRole = 'admin' | 'customer' | 'vendor';

// ✅ ถูกต้อง: กำหนด type สำหรับ function parameters และ return types
function createUser(userData: CreateUserDto): Promise<User> {
  // ...
}

// ❌ ผิด: ใช้ any
function createUser(userData: any): any {
  // ...
}
```

**ขั้นตอนที่ 3:** ใช้ Enum หรือ Union Types สำหรับค่าคงที่

```typescript
// ✅ ถูกต้อง: ใช้ const enum
const enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
}

// ✅ ถูกต้อง: หรือใช้ Union Types
type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

// ❌ ผิด: ใช้ string ที่ไม่จำกัดค่า
function updateOrderStatus(orderId: number, status: string) {
  // status อาจเป็นอะไรก็ได้ — ไม่ปลอดภัย
}
```

**ขั้นตอนที่ 4:** ห้ามใช้ `any` — ใช้ Generic หรือ `unknown` แทน

```typescript
// ✅ ถูกต้อง: ใช้ Generic
function parseJSON<T>(jsonString: string): T {
  return JSON.parse(jsonString);
}

// ✅ ถูกต้อง: ใช้ unknown แล้วตรวจสอบ type
function handleError(error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}

// ❌ ผิด
function parseJSON(jsonString: string): any {
  return JSON.parse(jsonString);
}
```

**ขั้นตอนที่ 5:** ใช้ Optional Chaining (`?.`) และ Nullish Coalescing (`??`)

```typescript
// ✅ ถูกต้อง
const userName = user?.profile?.firstName ?? 'Guest';
const pageSize = config.pageSize ?? 20;

// ❌ ผิด
const userName = user && user.profile && user.profile.firstName || 'Guest';
const pageSize = config.pageSize || 20; // ⚠️ pageSize = 0 จะถูกแทนที่ด้วย 20
```

---

## 4. React Best Practices - แนวปฏิบัติ React

### ขั้นตอนปฏิบัติ

**ขั้นตอนที่ 1:** เขียน Component ตามโครงสร้างมาตรฐาน

```typescript
import React, { useState, useEffect } from 'react';
import { User } from '@/types/user.types';
import { useAuth } from '@/hooks/useAuth';

// 1. Props Interface — กำหนดก่อนเสมอ
interface UserProfileProps {
  userId: number;
  onUpdate?: (user: User) => void;
}

// 2. Component — ใช้ Functional Component เท่านั้น
export function UserProfile({ userId, onUpdate }: UserProfileProps) {
  // 3. Hooks — เรียกที่ด้านบนสุดของ component
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
    onUpdate?.(user);
    setIsEditing(false);
  };

  // 6. Conditional rendering (Early return)
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

> 💡 **Tip:** ลำดับภายใน Component เสมอ: Props Interface → Hooks → Effects → Handlers → Early Returns → JSX

**ขั้นตอนที่ 2:** ใช้ Functional Components + Hooks เท่านั้น (ห้ามใช้ Class Components)

```typescript
// ✅ ถูกต้อง: Functional component with hooks
function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>{/* ... */}</div>;
}

// ❌ ผิด: Class component (ใช้แค่ในกรณีที่มี legacy code เท่านั้น)
class ProductList extends React.Component {
  // ...
}
```

**ขั้นตอนที่ 3:** แยก logic ที่ใช้ซ้ำเป็น Custom Hooks

```typescript
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

// นำไปใช้
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

**ขั้นตอนที่ 4:** ใช้ `key` prop อย่างถูกต้องใน list rendering

```typescript
// ✅ ถูกต้อง: ใช้ unique id เป็น key
{products.map(product => (
  <ProductCard key={product.id} product={product} />
))}

// ⚠️ หลีกเลี่ยง: ใช้ index เป็น key (ยอมรับได้เฉพาะ list ที่ไม่เปลี่ยน)
{products.map((product, index) => (
  <ProductCard key={index} product={product} />
))}

// ❌ ผิด: ไม่ใส่ key
{products.map(product => (
  <ProductCard product={product} />
))}
```

**ขั้นตอนที่ 5:** หลีกเลี่ยง inline functions ใน JSX

```typescript
// ✅ ถูกต้อง: กำหนด function ก่อน JSX
function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = () => {
    cartStore.addItem(product);
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
}

// ❌ ผิด: Inline function (สร้าง function ใหม่ทุกครั้งที่ re-render)
function ProductCard({ product }: ProductCardProps) {
  return (
    <button onClick={() => cartStore.addItem(product)}>Add to Cart</button>
  );
}
```

**ขั้นตอนที่ 6:** ใช้ Memoization เมื่อจำเป็น

```typescript
// React.memo — สำหรับ component ที่ไม่ต้อง re-render บ่อย
export const ProductCard = React.memo(({ product }: ProductCardProps) => {
  return <div>{product.name}</div>;
});

// useMemo — สำหรับ expensive calculations
function ProductList({ products }: ProductListProps) {
  const totalPrice = useMemo(() => {
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  return <div>Total: {totalPrice}</div>;
}

// useCallback — สำหรับ function ที่ส่งต่อไปยัง child component
function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <ChildComponent onClick={handleClick} />;
}
```

---

## 5. Backend (Node.js) Guidelines - แนวทาง Backend

### สถาปัตยกรรม: MVC Pattern

> 💡 **สำหรับนักพัฒนาใหม่:** Backend ใช้ MVC pattern แบ่งโค้ดเป็น 3 ชั้น (layers) ดังนี้

```
Request → Controller → Service → Repository → Database
                ↓            ↓           ↓
         รับ/ส่ง HTTP    Business     SQL Queries
                        Logic
```

| Layer | หน้าที่ | ตัวอย่างไฟล์ |
|-------|---------|-------------|
| **Controller** | รับ HTTP request, ส่งต่อให้ service, return response | `productController.ts` |
| **Service** | ประมวลผล business logic | `productService.ts` |
| **Repository** | จัดการ SQL queries ติดต่อ database | `productRepository.ts` |

### ขั้นตอนปฏิบัติ

**ขั้นตอนที่ 1:** เขียน Controller - รับ request และส่ง response เท่านั้น

```typescript
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

**ขั้นตอนที่ 2:** เขียน Service - ใส่ business logic ทั้งหมดที่นี่

```typescript
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
    // Business logic: ตรวจสอบข้อมูล
    if (data.price < 0) {
      throw new Error('Price cannot be negative');
    }

    // สร้าง slug จากชื่อ
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

**ขั้นตอนที่ 3:** เขียน Repository - จัดการ database queries เท่านั้น

```typescript
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

**ขั้นตอนที่ 4:** เขียน Middleware สำหรับ logic ที่ใช้ร่วมกัน

```typescript
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

**ขั้นตอนที่ 5:** ใช้ Global Error Handler

```typescript
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

## 6. CSS & Tailwind Standards - มาตรฐาน CSS

### ขั้นตอนปฏิบัติ

**ขั้นตอนที่ 1:** ใช้ Tailwind utility classes แทน inline styles

```tsx
// ✅ ถูกต้อง: Tailwind utilities
function Button({ children }: ButtonProps) {
  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
      {children}
    </button>
  );
}

// ❌ ผิด: Inline styles
function Button({ children }: ButtonProps) {
  return (
    <button style={{ padding: '8px 16px', backgroundColor: '#2563eb' }}>
      {children}
    </button>
  );
}
```

**ขั้นตอนที่ 2:** จัดกลุ่ม Tailwind classes ให้อ่านง่าย

```tsx
// ✅ ถูกต้อง: จัดกลุ่ม classes ตามหมวดหมู่
<div className={`
  flex items-center justify-between       /* Layout */
  px-4 py-2                               /* Spacing */
  bg-white border border-gray-200 rounded-lg  /* Appearance */
  hover:shadow-md transition               /* Interaction */
`}>
  Content
</div>

// ใช้ clsx สำหรับ conditional classes
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

**ขั้นตอนที่ 3:** สร้าง Reusable Component สำหรับ UI ที่ใช้ซ้ำ

```tsx
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

// นำไปใช้
<Button variant="primary" size="lg">Save</Button>
<Button variant="danger">Delete</Button>
```

**ขั้นตอนที่ 4:** ออกแบบ Mobile-first Responsive

```tsx
// ✅ ถูกต้อง: เริ่มจาก mobile แล้วขยายไปหน้าจอใหญ่
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
```

**Tailwind Breakpoints Reference:**

| Breakpoint | Minimum Width | ใช้สำหรับ |
|-----------|---------------|----------|
| `sm:` | 640px | โทรศัพท์แนวนอน |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Desktop ใหญ่ |
| `2xl:` | 1536px | หน้าจอกว้างพิเศษ |

---

## 7. Git Workflow - ขั้นตอนการใช้ Git

> 💡 **สำหรับนักพัฒนาใหม่:** อ่านรายละเอียดเพิ่มเติมได้ที่เอกสาร [07_GIT_WORKFLOW](../07_GIT_WORKFLOW/7.1_Branching_Strategy.md)

### ขั้นตอนปฏิบัติ: การทำงานประจำวัน

**ขั้นตอนที่ 1:** Pull code ล่าสุดก่อนเริ่มงาน

```bash
git checkout develop
git pull origin develop
```

**ขั้นตอนที่ 2:** สร้าง branch ใหม่ตามรูปแบบ `<type>/<description>`

```bash
# ✅ ถูกต้อง
git checkout -b feature/add-user-authentication
git checkout -b bugfix/fix-cart-calculation
git checkout -b hotfix/security-patch
git checkout -b refactor/improve-product-service

# ❌ ผิด
git checkout -b new-feature
git checkout -b fix
git checkout -b my-branch
```

**ประเภท Branch:**

| Type | ใช้สำหรับ | ตัวอย่าง |
|------|----------|----------|
| `main` | Production branch (ห้าม push ตรง) | — |
| `develop` | Development branch | — |
| `feature/*` | ฟีเจอร์ใหม่ | `feature/add-payment` |
| `bugfix/*` | แก้ bug | `bugfix/fix-login-error` |
| `hotfix/*` | แก้ไขเร่งด่วนบน production | `hotfix/security-patch` |
| `refactor/*` | ปรับโครงสร้างโค้ด | `refactor/cleanup-api` |
| `chore/*` | งาน maintenance | `chore/update-deps` |

**ขั้นตอนที่ 3:** Commit ด้วยรูปแบบ Conventional Commits

```bash
# รูปแบบ: <type>(<scope>): <subject>

# ✅ ถูกต้อง
git commit -m "feat(auth): add login with Google OAuth"
git commit -m "fix(cart): fix total price calculation error"
git commit -m "refactor(product): extract product service logic"
git commit -m "docs(readme): update installation instructions"
git commit -m "chore(deps): update dependencies to latest version"

# ❌ ผิด
git commit -m "update"
git commit -m "fix bug"
git commit -m "asdfasdf"
git commit -m "WIP"
```

**Commit Types Reference:**

| Type | ใช้เมื่อ |
|------|---------|
| `feat` | เพิ่มฟีเจอร์ใหม่ |
| `fix` | แก้ bug |
| `refactor` | ปรับโครงสร้างโค้ด (ไม่เปลี่ยนพฤติกรรม) |
| `docs` | เปลี่ยนเอกสาร |
| `style` | แก้ formatting, semicolons ฯลฯ |
| `test` | เพิ่มหรือแก้ tests |
| `chore` | งาน maintenance (dependencies, configs) |
| `perf` | ปรับปรุง performance |

**ขั้นตอนที่ 4:** Push และสร้าง Pull Request

```bash
# Push ไปที่ remote
git push origin feature/add-payment-integration

# สร้าง Pull Request บน GitHub
# จากนั้นรอ code review
```

**ขั้นตอนที่ 5:** หลัง PR ถูก merge แล้ว ลบ branch เก่า

```bash
git checkout develop
git pull origin develop
git branch -d feature/add-payment-integration
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

---

## 8. Code Comments & Documentation - การเขียน Comment

### ขั้นตอนปฏิบัติ

**ขั้นตอนที่ 1:** เขียน comment เฉพาะเมื่อจำเป็น

| เขียน Comment เมื่อ | ไม่ต้องเขียน Comment เมื่อ |
|---------------------|--------------------------|
| Logic ซับซ้อนที่อ่านแล้วไม่เข้าใจทันที | โค้ดอธิบายตัวเองอยู่แล้ว (self-explanatory) |
| Business rules ที่ต้องรู้ context | Function ที่ชื่อบอกชัดเจน เช่น `getUserById()` |
| TODO/FIXME/HACK ที่ต้องกลับมาแก้ | Loop หรือ condition ทั่วไป |
| Workaround ที่มีเหตุผลเฉพาะ | Import statements |

```typescript
// ✅ ถูกต้อง: Comment สำหรับ complex logic
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

// ✅ ถูกต้อง: TODO/FIXME/HACK tags
// TODO: Add caching for frequently accessed products
// FIXME: Handle edge case when product is out of stock
// HACK: Temporary workaround until API v2 is ready

// ❌ ผิด: Comment ที่ไม่จำเป็น
// Get user by id
function getUserById(id: number) { }

// Loop through products
products.forEach(product => { });
```

**ขั้นตอนที่ 2:** ใช้ JSDoc สำหรับ public functions/APIs

```typescript
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

---

## 9. Error Handling - การจัดการข้อผิดพลาด

### ขั้นตอนปฏิบัติ

**ขั้นตอนที่ 1:** Frontend — ใช้ try-catch พร้อม error type ที่เฉพาะเจาะจง

```typescript
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
```

**ขั้นตอนที่ 2:** Frontend — ใช้ Error Boundary ครอบ component tree

```typescript
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

**ขั้นตอนที่ 3:** Backend — สร้าง Custom Error Classes

```typescript
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
```

**ขั้นตอนที่ 4:** Backend — ใช้ Custom Error Classes ใน Service Layer

```typescript
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

## 10. Testing Standards - มาตรฐานการทดสอบ

### ขั้นตอนปฏิบัติ

> 💡 **สำหรับนักพัฒนาใหม่:** ทุก feature ที่เขียนต้องมี test ครอบคลุม ตั้งเป้า test coverage >= 80%

**ขั้นตอนที่ 1:** ตั้งชื่อไฟล์ test ด้วย pattern `<filename>.test.ts`

**ขั้นตอนที่ 2:** เขียน Unit Tests สำหรับ utility functions และ business logic

```typescript
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

**ขั้นตอนที่ 3:** เขียน Component Tests สำหรับ React components

```typescript
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

**ขั้นตอนที่ 4:** เขียน API Integration Tests

```typescript
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

## 11. Performance Optimization - การปรับปรุงประสิทธิภาพ

### ขั้นตอนปฏิบัติ: Frontend

**ขั้นตอนที่ 1:** ใช้ Lazy Loading สำหรับ page components

```typescript
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
```

**ขั้นตอนที่ 2:** ใช้ Debounce สำหรับ search input

```typescript
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
```

**ขั้นตอนที่ 3:** ใช้ Virtualization สำหรับ list ที่มีข้อมูลมาก

```typescript
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

### ขั้นตอนปฏิบัติ: Backend

**ขั้นตอนที่ 4:** ตั้งค่า Database Connection Pooling

```typescript
import { Pool } from 'pg';

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,                        // จำนวน connection สูงสุด
  idleTimeoutMillis: 30000,       // ปิด connection ที่ไม่ใช้หลัง 30 วินาที
  connectionTimeoutMillis: 2000,  // Timeout ถ้าเชื่อมต่อไม่ได้ใน 2 วินาที
});
```

**ขั้นตอนที่ 5:** ใช้ Caching สำหรับข้อมูลที่เรียกบ่อย

```typescript
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

async function getProducts(): Promise<Product[]> {
  // ตรวจสอบ cache ก่อน
  const cached = await redis.get('products:all');
  if (cached) {
    return JSON.parse(cached);
  }

  // ถ้าไม่มี cache ดึงจาก database
  const products = await productRepository.findAll();

  // เก็บ cache ไว้ 5 นาที
  await redis.setex('products:all', 300, JSON.stringify(products));

  return products;
}
```

**ขั้นตอนที่ 6:** ใช้ Pagination สำหรับข้อมูลจำนวนมาก

```typescript
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

## 12. Security Best Practices - แนวปฏิบัติด้านความปลอดภัย

> ⚠️ **ข้อควรระวัง:** หัวข้อนี้เป็นข้อบังคับเคร่งครัด การละเมิดอาจทำให้เกิดช่องโหว่ด้านความปลอดภัย

### ขั้นตอนปฏิบัติ

**ขั้นตอนที่ 1:** Validate input ทุกครั้ง — ใช้ Zod

```typescript
import { z } from 'zod';

const createUserSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
});

// Middleware สำหรับ validate request body
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

// นำไปใช้ใน route
router.post('/users', validateRequest(createUserSchema), createUser);
```

**ขั้นตอนที่ 2:** Hash passwords ด้วย bcrypt — ห้าม store plaintext password

```typescript
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

**ขั้นตอนที่ 3:** ใช้ JWT พร้อม expiration สำหรับ authentication

```typescript
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

**ขั้นตอนที่ 4:** ใช้ Parameterized Queries เท่านั้น — ห้ามใช้ String Interpolation

```typescript
// ✅ ถูกต้อง: Parameterized queries (ป้องกัน SQL Injection)
async function getUserByEmail(email: string): Promise<User | null> {
  const result = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  return result.rows[0] || null;
}

// ❌ ผิดอย่างร้ายแรง: String interpolation (เสี่ยง SQL Injection!)
async function getUserByEmail(email: string) {
  const result = await pool.query(
    `SELECT * FROM users WHERE email = '${email}'`
  );
  return result.rows[0];
}
```

**ขั้นตอนที่ 5:** ใช้ Environment Variables สำหรับ secrets ทั้งหมด

```typescript
// .env (อยู่ใน .gitignore — ห้าม commit)
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

// ❌ ผิดอย่างร้ายแรง: Hardcoded secrets
const JWT_SECRET = 'my-secret-key-123';
```

---

## 13. Code Review Checklist - รายการตรวจสอบ

> 💡 **สำหรับนักพัฒนาใหม่:** ใช้ checklist นี้ตรวจสอบโค้ดของตัวเองก่อนสร้าง Pull Request ทุกครั้ง

### ก่อนสร้าง PR (ตรวจสอบด้วยตนเอง)

- [ ] โค้ดทำงานได้ตามที่ต้องการ
- [ ] ไม่มี `console.log()` หรือ debug code เหลือ
- [ ] ไม่มี commented code เหลือ
- [ ] ไม่มี TODO/FIXME ที่ควรแก้ก่อน submit
- [ ] Tests ผ่านทั้งหมด (`npm test`)
- [ ] Linting ผ่าน (`npm run lint`)
- [ ] Build ผ่าน (`npm run build`)
- [ ] ตรวจสอบ `git diff` ทั้งหมดแล้ว
- [ ] Commit messages เป็นไปตามรูปแบบ Conventional Commits
- [ ] อัปเดต documentation (ถ้าจำเป็น)

### Code Quality

- [ ] ตัวแปรและฟังก์ชันมีชื่อที่สื่อความหมาย
- [ ] ฟังก์ชันทำงานเพียงอย่างเดียว (Single Responsibility)
- [ ] ไม่มี code duplication
- [ ] Error handling ครบถ้วน
- [ ] TypeScript types ครบ — ไม่มี `any` type (ยกเว้นกรณีจำเป็น)

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

## 14. Tools & Extensions - เครื่องมือที่ต้องติดตั้ง

> 💡 **สำหรับนักพัฒนาใหม่:** ติดตั้ง extensions ด้านล่างนี้ก่อนเริ่มเขียนโค้ด — ดูรายละเอียดเพิ่มเติมที่ [0.2 Development Setup](../00_ONBOARDING/0.2_Development_Setup.md)

### VS Code Extensions (จำเป็น)

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

| Extension | หน้าที่ |
|-----------|---------|
| **ESLint** | ตรวจสอบ code quality อัตโนมัติ |
| **Prettier** | Format code อัตโนมัติ |
| **Tailwind CSS IntelliSense** | Autocomplete สำหรับ Tailwind classes |
| **TypeScript Next** | รองรับ TypeScript เวอร์ชันล่าสุด |
| **GitLens** | ดูประวัติ Git ในไฟล์ |
| **Path Intellisense** | Autocomplete file paths |
| **ES7+ React Snippets** | Snippets สำหรับ React |

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

## เอกสารอ้างอิง

### เอกสารภายใน (Internal)

- [0.2 Development Setup - การติดตั้งเครื่องมือพัฒนา](../00_ONBOARDING/0.2_Development_Setup.md)
- [7.1 Branching Strategy](../07_GIT_WORKFLOW/7.1_Branching_Strategy.md)
- [7.2 Commit Message Convention](../07_GIT_WORKFLOW/7.2_Commit_Message_Convention.md)
- [7.3 Pull Request Process](../07_GIT_WORKFLOW/7.3_Pull_Request_Process.md)
- [7.4 Code Review Guidelines](../07_GIT_WORKFLOW/7.4_Code_Review_Guidelines.md)

### เอกสารภายนอก (External)

| แหล่งข้อมูล | ลิงก์ |
|-------------|------|
| React Documentation | https://react.dev |
| TypeScript Documentation | https://www.typescriptlang.org/docs |
| Tailwind CSS Documentation | https://tailwindcss.com/docs |
| Node.js Documentation | https://nodejs.org/docs |
| Express Documentation | https://expressjs.com |
| PostgreSQL Documentation | https://www.postgresql.org/docs |
| Airbnb JavaScript Style Guide | https://github.com/airbnb/javascript |
| Google TypeScript Style Guide | https://google.github.io/styleguide/tsguide.html |
| ESLint | https://eslint.org |
| Prettier | https://prettier.io |
| Jest | https://jestjs.io |
| Testing Library | https://testing-library.com |

---

## ประวัติการเปลี่ยนแปลง

| เวอร์ชัน | วันที่ | ผู้แก้ไข | รายละเอียด |
|---------|--------|---------|------------|
| 1.0.0 | 15 มกราคม 2025 | Development Team | จัดทำเอกสารฉบับแรก |
| 2.0.0 | 30 มกราคม 2026 | Development Team | ปรับรูปแบบเป็น SOP, เพิ่ม Quick Reference, เพิ่มคำอธิบายสำหรับนักพัฒนาใหม่, เพิ่มตาราง error classes, ปรับ cross-references ให้เชื่อมกับเอกสารอื่น |

---

*อัปเดตล่าสุด: 30 มกราคม 2026*
