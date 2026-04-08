# Code Standard Guide

| รายการ | รายละเอียด |
|--------|------------|
| **รหัสเอกสาร** | SOP-DEV-001 |
| **เวอร์ชัน** | 2.0.0 |
| **สถานะ** | บังคับใช้ (Enforced) |
| **วันที่มีผล** | 30 มกราคม 2026 |
| **Tech Stack** | React + Node.js + TypeScript + Tailwind CSS + PostgreSQL (Supabase) |

---

## Quick Reference

### Naming Conventions

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

### ข้อห้ามสำคัญ

| ห้ามทำ | ทำแทน |
|--------|-------|
| ใช้ `any` type | ใช้ type/interface ที่เฉพาะเจาะจง หรือ `unknown` |
| ใช้ชื่อตัวแปรแบบย่อ (`x`, `tp`, `arr`) | ใช้ชื่อที่สื่อความหมาย (`userName`, `totalPrice`) |
| ใช้ภาษาไทยในโค้ด | ใช้ภาษาอังกฤษเท่านั้น |
| Hardcode secrets/credentials | ใช้ Environment Variables |
| ใช้ String interpolation ใน SQL | ใช้ Parameterized queries (`$1`, `$2`) |
| Commit ไฟล์ `.env` ลง Git | เพิ่มใน `.gitignore` และใช้ `.env.example` |
| เขียน inline styles ใน React | ใช้ Tailwind utility classes |
| ใช้ Class components | ใช้ Functional components + Hooks |
| Push ตรงไปที่ `main` branch | สร้าง feature branch และเปิด Pull Request |

---

## 1. Naming Conventions

ใช้ชื่อภาษาอังกฤษที่สื่อความหมายเสมอ

```typescript
// ✅ ถูกต้อง
const userName = "John Doe";
const MAX_LOGIN_ATTEMPTS = 5;

function calculateTotalPrice(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

interface User {
  id: number;
  email: string;
  firstName: string;
}

type UserRole = 'admin' | 'customer' | 'vendor';

// ❌ ผิด
const x = "John Doe";
const tp = 1000;
function calc(arr: any[]): number { ... }
class userService { }
```

**Database (SQL)** — ใช้ `snake_case`

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    first_name VARCHAR(100),
    created_at TIMESTAMP
);
```

---

## 2. File & Folder Structure

### Frontend (React + TypeScript)

```
src/
├── assets/              # รูปภาพ, fonts, static files
├── components/
│   ├── common/          # Reusable (Button, Input, Modal)
│   ├── layout/          # Header, Footer, Sidebar
│   └── features/        # Feature-specific components
│       ├── auth/
│       └── products/
├── pages/               # 1 ไฟล์ = 1 หน้า
├── hooks/               # Custom React hooks
├── services/            # API services
├── store/               # State management (Zustand/Redux)
├── types/               # TypeScript types & interfaces
├── utils/               # Utility functions
├── constants/           # Constants
├── App.tsx
└── main.tsx
```

### Backend (Node.js + TypeScript)

```
src/
├── config/              # Configuration (database, env, logger)
├── controllers/         # รับ request, ส่ง response
├── services/            # Business logic
├── repositories/        # Database queries
├── routes/              # API route definitions
├── middlewares/          # Auth, error handler, validation
├── types/               # TypeScript types
├── utils/               # Utility functions
├── validators/          # Request validators (Zod)
├── app.ts
└── server.ts
```

> **สำคัญ:** อย่าเขียน business logic ใน controller — ให้เขียนใน service เสมอ

---

## 3. TypeScript Guidelines

**ตั้งค่า strict mode** ใน `tsconfig.json`:

```json
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

**กำหนด type สำหรับทุก object** — ห้ามใช้ `any`:

```typescript
// ✅ กำหนด type ชัดเจน
function createUser(userData: CreateUserDto): Promise<User> { ... }

// ✅ ใช้ Generic
function parseJSON<T>(jsonString: string): T {
  return JSON.parse(jsonString);
}

// ✅ ใช้ unknown แล้วตรวจสอบ type
function handleError(error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}
```

**ใช้ Union Types สำหรับค่าคงที่:**

```typescript
type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

// ❌ ห้ามใช้ string ที่ไม่จำกัดค่า
function updateStatus(id: number, status: string) { } // ไม่ปลอดภัย
```

**ใช้ Optional Chaining และ Nullish Coalescing:**

```typescript
// ✅
const userName = user?.profile?.firstName ?? 'Guest';
const pageSize = config.pageSize ?? 20;

// ❌ pageSize = 0 จะถูกแทนที่ด้วย 20
const pageSize = config.pageSize || 20;
```

---

## 4. React Best Practices

### Component Structure

เรียงลำดับภายใน Component: **Props Interface → Hooks → Effects → Handlers → Early Returns → JSX**

```typescript
interface UserProfileProps {
  userId: number;
  onUpdate?: (user: User) => void;
}

export function UserProfile({ userId, onUpdate }: UserProfileProps) {
  const { user, loading, error } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => { /* fetch user data */ }, [userId]);

  const handleSave = async () => {
    onUpdate?.(user);
    setIsEditing(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return null;

  return (
    <div className="user-profile">
      <h1>{user.firstName} {user.lastName}</h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
```

### กฎสำคัญ

- **Functional Components + Hooks เท่านั้น** — ห้ามใช้ Class Components
- **แยก logic ที่ใช้ซ้ำเป็น Custom Hooks**
- **ใช้ unique id เป็น `key`** — หลีกเลี่ยงใช้ index

```typescript
// ✅ Custom Hook
export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    productService.getAll()
      .then(setProducts)
      .catch(err => setError(err as Error))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}
```

### Memoization — ใช้เมื่อจำเป็น

```typescript
// React.memo — component ที่ไม่ต้อง re-render บ่อย
export const ProductCard = React.memo(({ product }: Props) => { ... });

// useMemo — expensive calculations
const totalPrice = useMemo(() =>
  products.reduce((sum, p) => sum + p.price, 0), [products]
);

// useCallback — function ที่ส่งต่อไปยัง child component
const handleClick = useCallback(() => setCount(c => c + 1), []);
```

---

## 5. Backend Guidelines (MVC Pattern)

```
Request → Controller → Service → Repository → Database
              ↓            ↓           ↓
        รับ/ส่ง HTTP    Business     SQL Queries
                        Logic
```

### Controller — รับ request และส่ง response เท่านั้น

```typescript
export class ProductController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await productService.getAll();
      res.json({ success: true, data: products });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const newProduct = await productService.create(req.body);
      res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
      next(error);
    }
  }
}
```

### Service — Business logic ทั้งหมดอยู่ที่นี่

```typescript
export class ProductService {
  async create(data: CreateProductDto): Promise<Product> {
    if (data.price < 0) {
      throw new ValidationError('Price cannot be negative');
    }
    const slug = data.name.toLowerCase().replace(/\s+/g, '-');
    return productRepository.create({ ...data, slug });
  }
}
```

### Repository — Database queries เท่านั้น

```typescript
export class ProductRepository {
  async findAll(): Promise<Product[]> {
    const result = await pool.query(
      'SELECT * FROM products WHERE is_active = true ORDER BY created_at DESC'
    );
    return result.rows;
  }

  async create(data: CreateProductDto & { slug: string }): Promise<Product> {
    const result = await pool.query(
      `INSERT INTO products (name, slug, price, stock_quantity)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [data.name, data.slug, data.price, data.stockQuantity]
    );
    return result.rows[0];
  }
}
```

### Auth Middleware

```typescript
export function authenticate(req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'No token provided' });

    req.user = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

export function authorize(...roles: string[]) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
}
```

### Global Error Handler

```typescript
export class AppError extends Error {
  constructor(public statusCode: number, public message: string) {
    super(message);
  }
}

export class ValidationError extends AppError {
  constructor(message: string) { super(400, message); }
}

export class NotFoundError extends AppError {
  constructor(resource: string) { super(404, `${resource} not found`); }
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ success: false, message: err.message });
  }
  console.error('ERROR:', err);
  return res.status(500).json({ success: false, message: 'Internal server error' });
}
```

---

## 6. CSS & Tailwind Standards

**ใช้ Tailwind utility classes** — ห้ามใช้ inline styles

```tsx
// ✅ Tailwind
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
  Save
</button>

// ❌ Inline styles
<button style={{ padding: '8px 16px', backgroundColor: '#2563eb' }}>Save</button>
```

**ใช้ `clsx` สำหรับ conditional classes:**

```tsx
import clsx from 'clsx';

<button className={clsx(
  'px-4 py-2 rounded-lg transition',
  isPrimary && 'bg-blue-600 text-white hover:bg-blue-700',
  isDisabled && 'opacity-50 cursor-not-allowed'
)}>
  Click me
</button>
```

**Mobile-first Responsive:**

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {products.map(p => <ProductCard key={p.id} product={p} />)}
</div>
```

| Breakpoint | Min Width | ใช้สำหรับ |
|-----------|-----------|----------|
| `sm:` | 640px | โทรศัพท์แนวนอน |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Desktop ใหญ่ |

---

## 7. Code Comments

| เขียน Comment เมื่อ | ไม่ต้องเขียนเมื่อ |
|---------------------|-------------------|
| Logic ซับซ้อนที่อ่านไม่เข้าใจทันที | โค้ดอธิบายตัวเองอยู่แล้ว |
| Business rules ที่ต้องรู้ context | Function ที่ชื่อบอกชัดเจน |
| TODO / FIXME / HACK | Loop หรือ condition ทั่วไป |

```typescript
// ✅ Comment สำหรับ business rule
/**
 * Calculate discount: Bronze 5%, Silver 10%, Gold 15%, Platinum 20%
 */
function calculateDiscount(user: User, totalPrice: number): number {
  const rates = { bronze: 0.05, silver: 0.10, gold: 0.15, platinum: 0.20 };
  return totalPrice * (rates[user.loyaltyTier] || 0);
}

// ✅ TODO/FIXME tags
// TODO: Add caching for frequently accessed products
// FIXME: Handle edge case when product is out of stock

// ❌ Comment ที่ไม่จำเป็น
// Get user by id
function getUserById(id: number) { }
```

ใช้ **JSDoc** สำหรับ public functions/APIs:

```typescript
/**
 * Registers a new user in the system
 * @param userData - User registration data
 * @returns Created user object
 * @throws {AppError} If email already exists
 */
async function registerUser(userData: CreateUserDto): Promise<User> { ... }
```

---

## 8. Error Handling

### Frontend

```typescript
async function fetchProducts() {
  try {
    setLoading(true);
    const products = await productService.getAll();
    setProducts(products);
  } catch (err) {
    if (err instanceof AxiosError) {
      setError(err.response?.status === 404 ? 'Not found' : 'Server error');
    } else {
      setError('An unexpected error occurred');
    }
  } finally {
    setLoading(false);
  }
}
```

### Backend

ใช้ Custom Error Classes (ดู [Section 5](#global-error-handler)) แล้ว throw ใน Service Layer:

```typescript
async function getProductById(id: number): Promise<Product> {
  const product = await productRepository.findById(id);
  if (!product) throw new NotFoundError('Product');
  return product;
}
```

---

## 9. API Response Format Standard

ทุก API endpoint ต้องตอบกลับในรูปแบบเดียวกัน เพื่อให้ Frontend จัดการ response ได้ง่าย

### Success Response

```typescript
// Single item
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Product A",
    "price": 500
  }
}

// List with pagination
{
  "success": true,
  "data": [
    { "id": 1, "name": "Product A" },
    { "id": 2, "name": "Product B" }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "total": 58,
    "totalPages": 3
  }
}

// Action without return data
{
  "success": true,
  "message": "Product deleted successfully"
}
```

### Error Response

```typescript
// General error
{
  "success": false,
  "message": "Product not found"
}

// Validation error (Zod)
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "field": "email", "message": "Invalid email format" },
    { "field": "password", "message": "Must be at least 8 characters" }
  ]
}
```

### HTTP Status Codes ที่ใช้

| Status | ใช้เมื่อ | ตัวอย่าง |
|--------|---------|----------|
| `200` | สำเร็จ (GET, PUT, PATCH, DELETE) | ดึงข้อมูล, อัปเดต, ลบ |
| `201` | สร้างสำเร็จ (POST) | สร้าง user/product ใหม่ |
| `400` | Request ไม่ถูกต้อง | Validation error, bad input |
| `401` | ไม่ได้ login / token หมดอายุ | Missing or invalid token |
| `403` | ไม่มีสิทธิ์เข้าถึง | User ไม่ใช่ admin |
| `404` | ไม่พบข้อมูล | Product/User not found |
| `409` | ข้อมูลซ้ำ | Email already exists |
| `500` | Server error | Unexpected error |

### TypeScript Types

```typescript
// types/api.types.ts
interface ApiResponse<T> {
  success: true;
  data: T;
  message?: string;
  pagination?: Pagination;
}

interface ApiError {
  success: false;
  message: string;
  errors?: FieldError[];
}

interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

interface FieldError {
  field: string;
  message: string;
}
```

### Helper Function (Backend)

```typescript
// utils/apiResponse.ts
export function sendSuccess<T>(res: Response, data: T, status = 200) {
  return res.status(status).json({ success: true, data });
}

export function sendCreated<T>(res: Response, data: T) {
  return res.status(201).json({ success: true, data });
}

export function sendPaginated<T>(res: Response, data: T[], pagination: Pagination) {
  return res.json({ success: true, data, pagination });
}

// ใช้ใน Controller
async getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const { data, pagination } = await productService.getAll(req.query);
    sendPaginated(res, data, pagination);
  } catch (error) {
    next(error);
  }
}
```

---

## 10. Security

> **ข้อบังคับเคร่งครัด** — การละเมิดอาจทำให้เกิดช่องโหว่ด้านความปลอดภัย

### Validate input ด้วย Zod

```typescript
const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

// Middleware
export function validateRequest(schema: z.ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, errors: error.errors });
      }
      next(error);
    }
  };
}

router.post('/users', validateRequest(createUserSchema), createUser);
```

### Hash passwords ด้วย bcrypt

```typescript
const SALT_ROUNDS = 10;
export const hashPassword = (pw: string) => bcrypt.hash(pw, SALT_ROUNDS);
export const comparePassword = (pw: string, hash: string) => bcrypt.compare(pw, hash);
```

### Parameterized Queries เท่านั้น

```typescript
// ✅ ป้องกัน SQL Injection
await pool.query('SELECT * FROM users WHERE email = $1', [email]);

// ❌ เสี่ยง SQL Injection!
await pool.query(`SELECT * FROM users WHERE email = '${email}'`);
```

### Environment Variables สำหรับ secrets

```typescript
// config/env.ts
export const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL!,
  jwtSecret: process.env.JWT_SECRET!,
};

// ❌ ห้าม hardcode
const JWT_SECRET = 'my-secret-key-123';
```

---

## 11. Performance

### Frontend

```typescript
// Lazy Loading สำหรับ pages
const ProductPage = lazy(() => import('./pages/ProductPage'));

// Debounce สำหรับ search input
const debouncedSearch = useDebounce(searchTerm, 300);

// Virtualization สำหรับ list ยาว
import { FixedSizeList } from 'react-window';
```

### Backend

```typescript
// Connection Pooling
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
});

// Pagination
async function getProducts(page = 1, pageSize = 20) {
  const offset = (page - 1) * pageSize;
  const [products, total] = await Promise.all([
    pool.query('SELECT * FROM products LIMIT $1 OFFSET $2', [pageSize, offset]),
    pool.query('SELECT COUNT(*) FROM products'),
  ]);
  return { data: products.rows, total: parseInt(total.rows[0].count) };
}
```

---

## 12. Tools & Extensions

> ดูรายละเอียดการติดตั้งที่ [Development Setup](../00_ONBOARDING/0.2_Development_Setup.md)

### VS Code Extensions (จำเป็น)

| Extension | หน้าที่ |
|-----------|---------|
| **ESLint** | ตรวจสอบ code quality |
| **Prettier** | Format code อัตโนมัติ |
| **Tailwind CSS IntelliSense** | Autocomplete สำหรับ Tailwind |
| **GitLens** | ดูประวัติ Git ในไฟล์ |

### ESLint + Prettier Config

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

// .prettierrc.js
module.exports = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
};
```

---

## Code Review Checklist

> ดูรายละเอียดเพิ่มเติมที่ [Code Review Guidelines](../07_GIT_WORKFLOW/7.4_Code_Review_Guidelines.md)

- [ ] ไม่มี `console.log()` หรือ commented code เหลือ
- [ ] Tests ผ่านทั้งหมด / Linting ผ่าน / Build ผ่าน
- [ ] ตัวแปรและฟังก์ชันมีชื่อที่สื่อความหมาย
- [ ] ไม่มี `any` type / ไม่มี code duplication
- [ ] Error handling ครบถ้วน
- [ ] Input validation ครบ / ไม่มี SQL injection / XSS risks
- [ ] Passwords hashed / Sensitive data ไม่ commit ลง git

---

## เอกสารที่เกี่ยวข้อง

| เอกสาร | ลิงก์ |
|--------|------|
| Development Setup | [0.2 Development Setup](../00_ONBOARDING/0.2_Development_Setup.md) |
| Branching Strategy | [7.1 Branching Strategy](../07_GIT_WORKFLOW/7.1_Branching_Strategy.md) |
| Commit Convention | [7.2 Commit Message Convention](../07_GIT_WORKFLOW/7.2_Commit_Message_Convention.md) |
| Pull Request Process | [7.3 Pull Request Process](../07_GIT_WORKFLOW/7.3_Pull_Request_Process.md) |
| Code Review Guidelines | [7.4 Code Review Guidelines](../07_GIT_WORKFLOW/7.4_Code_Review_Guidelines.md) |
| Testing Strategy | [6.1 Testing Strategy Overview](../06_TESTING/6.1_Testing_Strategy_Overview.md) |

### External References

| แหล่งข้อมูล | ลิงก์ |
|-------------|------|
| React | https://react.dev |
| TypeScript | https://www.typescriptlang.org/docs |
| Tailwind CSS | https://tailwindcss.com/docs |
| Node.js / Express | https://expressjs.com |
| Airbnb JS Style Guide | https://github.com/airbnb/javascript |

---

## ประวัติการเปลี่ยนแปลง

| เวอร์ชัน | วันที่ | รายละเอียด |
|---------|--------|------------|
| 1.0.0 | 15 ม.ค. 2025 | จัดทำเอกสารฉบับแรก |
| 2.0.0 | 30 ม.ค. 2026 | ปรับรูปแบบเป็น SOP, เพิ่ม Quick Reference |
| 2.1.0 | 8 เม.ย. 2026 | ปรับให้กระชับ ลดเนื้อหาซ้ำซ้อน ลิงก์ไปเอกสารเฉพาะทาง |
| 2.2.0 | 8 เม.ย. 2026 | เพิ่ม API Response Format Standard (Section 9) |
