// Type-alias-- to define custom types we can outsource the User type for our user-
// type User = {
//   id : string;
//   name : string;
//   avatar : string;
// }

// interface - alternative of Type-alias and only to define object type-
export interface User {
    id : string;
    name : string;
    avatar : string;
}

// So here we can create our type definitions and used user.model.ts because the file content defines data-model.