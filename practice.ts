type Person = {
    [key: number | string]: number | string;
    0: number;
    1: string;
    "age": number;
}

type PP = Person[string];

