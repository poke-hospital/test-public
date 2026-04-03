function greet(name: string): string {
  return `Hello, ${name}!`;
}

function add(a: number, b: number): number {
  return a + b;
}

const message = greet("World");
console.log(message);
console.log(`2 + 3 = ${add(2, 3)}`);
