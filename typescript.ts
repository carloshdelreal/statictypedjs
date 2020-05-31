const sum = (a: number, b: number) => {
  return a + b;
}

console.log(sum(1,5))


// boolean
let isCool: boolean = true

// number 
let age: number = 33

// string
let eyeColor: string = 'brown'
let favouriteQuote: string = `I'm not old, I'm only ${2}`

// Array
let pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['lion', 'dragon', 'lizard']

// object
let wizzard: object = {
  a: 'John'
}

// null and undefined

let meh: undefined = undefined;
let noo: null = null;

// tuple
let basket: [string, number];
basket = ['basketball', 5]

// Enum
enum Size { Small = 1, Medium = 2, Large = 3}
let sizeName: string = Size[2]
let sizeSize: number = Size.Small

// Any type !!!!!!! be careful
let whatever: any = 'buahahahahah'
whatever = 2
whatever = null

// void
let sing = (): void => {
  console.log("la la laaa")
}

// never
let error = (): never => {
  throw Error('oops')
}


// interface
interface RobotArmy {
  count: number,
  type: string,
  magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("Fight")
}

let fightRobotArmy2 = ( robots: { count: number, type: string, magic: string}) => {
  console.log('Fight')
}