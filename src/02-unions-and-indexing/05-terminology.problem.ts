/**
 * It's important to understand the terminology around unions:
 *
*
* Which is which?
*/

//* One of the type declarations below is a union.
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };
    
//* One of the type declarations below is a discriminated union.
type B = "a" | "b" | "c";

//* One of the type declarations below is an enum.
enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
