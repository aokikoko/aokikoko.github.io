---
title: "[TS] 基础类型"
sidebar_position: 1
---

-----

## 布尔值 boolean 
`true` or `false`
```typescript
let isDone: boolean = false;
```

-----

## 数字 number
和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是number。 
```typescript
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```
-----

## 字符串 string
```typescript
let name: string = "bob";
name = 'smith';
```

-----

## 数组 Array
两种定义数组方式  
1. 元素类型后接[ ]
```typescript
let list: number[] = [1, 2, 3];
```
2. 使用数组泛型，Array<元素类型>：
```typescript
let list: Array<number> = [1, 2, 3];
```
-----

## 元祖 Tuple
一个已知元素数量和类型的数组，各元素的类型不必相同。  
比如，你可以定义一对值分别为string和number类型的元组。
```typescript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```
当访问一个已知索引的元素，会得到正确的类型：
```typescript
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
```

-----

## 枚举 enum
`enum`类型是对JavaScript标准数据类型的一个补充。  
像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
```typescript
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

alert(colorName);  // 显示'Green'因为上面代码里它的值是2
```

-----

## 任意值 any
有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。   
这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用any类型来标记这些变量：
```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = true; // okay, definitely a boolean
```
当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：
```typescript
let list: any[] = [1, true, "free"];

list[1] = 100;
```

-----

## void 空值
某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是void：
```typescript
function warnUser(): void {
    alert("This is my warning message");
}
```
声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
```typescript
let unusable: void = undefined;
```
-----

## Null 和 Undefined
TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和void相似，它们的本身的类型用处不是很大：
```typescript
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```
默认情况下null和undefined是所有类型的子类型。

编译时, 使用 tsc 文件名 --strictNullChecks 进行编译的话, null和undefined只能赋值给void和它们各自。 这能避免很多常见的问题。  
也许在某处你想传入一个string或null或undefined，你可以使用联合类型string | null | undefined。 

-----

## Never
never类型表示的是那些永不存在的值的类型。 例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是never类型，当它们被永不为真的类型保护所约束时。

never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使any也不可以赋值给never。

下面是一些返回never类型的函数：
```typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```
-----
## object

`object` 表示非原始类型，也就是除 `number`，`string`，`boolean`，`symbol`，`null`或`undefined` 之外的类型。

使用 `object` 类型，就可以更好的表示像 `Object.create` 这样的 `API`。例如：

```typescript
declare function create(o: object | null): void

create({ prop: 0 }) // OK
create(null) // OK

create(42) // Error
create('string') // Error
create(false) // Error
create(undefined) // Error
```

-----

## 类型断言
通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。  
它没有运行时的影响，只是在编译阶段起作用。

类型断言有两种形式。  
1. 尖括号语法
```typescript
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

2. as语法
```typescript
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```