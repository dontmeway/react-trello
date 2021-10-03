export interface IDropdownState {
    first: boolean,
    second: boolean,
    third: boolean,
    fourth: boolean,
}

export enum DropdownActionTypes {
    FIRST = "FIRST",
    SECOND = "SECOND",
    THIRD = "THIRD",
    FOURTH = "FOURTH",
    CLOSE = "CLOSE"
}
interface IFirst {
    type: DropdownActionTypes.FIRST,
    payload: boolean
}
interface ISecond {
    type: DropdownActionTypes.SECOND,
    payload: boolean
}
interface IThird {
    type: DropdownActionTypes.THIRD,
    payload: boolean
}
interface IFourth {
    type: DropdownActionTypes.FOURTH,
    payload: boolean
}
interface IClose {
    type: DropdownActionTypes.CLOSE
}

export type DropdownActions = IFirst | ISecond | IThird | IFourth | IClose