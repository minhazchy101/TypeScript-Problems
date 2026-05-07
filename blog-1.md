# Why is `any` Called a "Type Safety Hole" and Why is `unknown` Safer in TypeScript?

In TypeScript, both `any` and `unknown` can store any type of value.  
At first, they may look similar, but there is a big difference between them.

The `any` type removes TypeScript’s type checking system, while `unknown` keeps the safety system active.  
That is why `unknown` is considered safer than `any`.

---

# What is `any` in TypeScript?

The `any` type means TypeScript will not check the type of that variable.

```ts
let data: any = "Hello";

data = 100;
data = true;
```

Here, the variable can store any type of value without showing errors.

The main problem is that TypeScript also allows unsafe operations when using `any`.

Example:

```ts
let value: any = "TypeScript";

console.log(value.toUpperCase());
```

This works because the value is a string.

But later, if the value changes:

```ts
value = 500;

console.log(value.toUpperCase());
```

Now the code will crash at runtime because numbers do not have the `toUpperCase()` method.

TypeScript does not show any warning here because the variable type is `any`.

For this reason, `any` is called a **type safety hole**.  
It creates a hole in TypeScript’s safety system and may cause unexpected runtime errors.

---

# What is `unknown` in TypeScript?

The `unknown` type can also hold any type of value.

```ts
let userData: unknown;

userData = "Hello";
userData = 20;
userData = false;
```

However, `unknown` does not allow unsafe operations directly.

Example:

```ts
let value: unknown = "TypeScript";

console.log(value.toUpperCase());
```

TypeScript will show an error here because it does not know the actual type of the variable.

This extra protection makes `unknown` safer than `any`.

---

# What is Type Narrowing?

Before using an `unknown` value, we need to check its type first.  
This process is called **type narrowing**.

Type narrowing means reducing a general type into a more specific type.

Example:

```ts
let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Inside the `if` block, TypeScript understands that `value` is a string.

So using string methods becomes safe.

---

# Another Example of Type Narrowing

```ts
function printLength(data: unknown) {
  if (typeof data === "string") {
    console.log(data.length);
  }
}
```

Here:

- `data` can be any type
- The `typeof` check narrows the type
- After narrowing, TypeScript safely allows string properties

---

# Why is `unknown` Better?

The `unknown` type is safer because:

- It prevents unsafe operations
- It forces developers to check types first
- It reduces runtime errors
- It keeps TypeScript’s type safety active

---


# Conclusion

The `any` type disables TypeScript’s safety features and may introduce runtime bugs.  
That is why it is called a **type safety hole**.

On the other hand, `unknown` is safer because it forces proper type checking before using values.

By using `unknown` and type narrowing, developers can write safer and more reliable TypeScript code.