import { DropdownActions, DropdownActionTypes, IDropdownState } from "./types"

export const initialState: IDropdownState = {
    first: false,
    second: false,
    third: false,
    fourth: false,
}
function handlerState(state: any) {
    return Object.keys(state).reduce((obj: any, el: string) => {
        obj[el] = false
        return obj
    }, {})
}

export function dropdownReducer(state = initialState, action: DropdownActions): IDropdownState {
    switch (action.type) {
        case DropdownActionTypes.FIRST: {
            const newState = handlerState(state)
            return {
                ...newState,
                first: action.payload
            }
        };
        case DropdownActionTypes.SECOND: {
            const newState = handlerState(state)
            return {
                ...newState,
                second: action.payload
            }
        }
        case DropdownActionTypes.THIRD: {
            const newState = handlerState(state)
            return {
                ...newState,
                third: action.payload
            }
        }
        case DropdownActionTypes.FOURTH: {
            const newState = handlerState(state)
            return {
                ...newState,
                fourth: action.payload
            }
        }
        case DropdownActionTypes.CLOSE: {
            const newState = handlerState(state)
            return {
                ...newState
            }
        }
        default: {
            return state
        }
    }

}