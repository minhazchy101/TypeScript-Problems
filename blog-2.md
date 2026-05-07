# How do `Pick` and `Omit` Utility Types Help Prevent Code Duplication in TypeScript?

In TypeScript, developers often create a large interface that contains many properties.  
However, different parts of an application may only need some specific properties from that interface.

Instead of creating multiple similar interfaces again and again, TypeScript provides two useful utility types:

- `Pick`
- `Omit`

These utility types help developers create smaller and specialized versions of an existing interface without rewriting code.  
This helps keep the code **DRY (Don't Repeat Yourself)**.

---

# What is `Pick` in TypeScript?

The `Pick` utility type is used to select specific properties from an existing interface.

Syntax:

```ts
Pick<Type, Keys>
```

Example:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
```

Suppose we only need `name` and `email`.

Without `Pick`, we might write:

```ts
interface UserProfile {
  name: string;
  email: string;
}
```

This creates duplicated code.

Using `Pick`:

```ts
type UserProfile = Pick<User, "name" | "email">;
```

Now `UserProfile` automatically gets those properties from the main `User` interface.

---

# What is `Omit` in TypeScript?

The `Omit` utility type removes specific properties from an existing interface.

Syntax:

```ts
Omit<Type, Keys>
```

Example:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
```

Suppose we want all properties except `password`.

Using `Omit`:

```ts
type PublicUser = Omit<User, "password">;
```

Now `PublicUser` contains:

- `id`
- `name`
- `email`

But the `password` field is removed.

---

# How Do `Pick` and `Omit` Prevent Code Duplication?

Without utility types, developers may create many repeated interfaces.

Example:

```ts
interface UserInfo {
  name: string;
  email: string;
}

interface AccountInfo {
  name: string;
  email: string;
}
```

Here, the same properties are written multiple times.

This creates duplicated code and becomes difficult to maintain.

With `Pick`:

```ts
type UserInfo = Pick<User, "name" | "email">;

type AccountInfo = Pick<User, "name" | "email">;
```

Now the properties come directly from the main interface.

If the original `User` interface changes, all related types update automatically.

---

# How Does This Keep Code DRY?

DRY means:

> “Don’t Repeat Yourself”

`Pick` and `Omit` support the DRY principle because:

- They reduce repeated property definitions
- They make code shorter and cleaner
- They improve maintainability
- They reduce mistakes caused by inconsistent types

For example, if the type of `email` changes in the main interface, all derived types automatically receive the update.

Without utility types, developers would need to manually update every duplicated interface.

---

# Real-Life Example

```ts
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: string;
}
```

For a product card, we may only need:

```ts
type ProductCard = Pick<Product, "name" | "price">;
```

For creating a new product, we may not need `id` or `createdAt`.

```ts
type CreateProduct = Omit<Product, "id" | "createdAt">;
```

This makes the code reusable and organized.

---

# Conclusion

`Pick` and `Omit` are very useful utility types in TypeScript.

They help developers create smaller and specialized versions of a master interface without rewriting the same code repeatedly.

As a result:

- Code becomes cleaner
- Maintenance becomes easier
- Errors are reduced
- The project follows the DRY principle

Using these utility types is a smart way to write scalable and maintainable TypeScript applications.