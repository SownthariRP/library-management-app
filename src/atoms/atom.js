import { atom } from "recoil";

export const loginUserState = atom(
    {
        key: "loginUserState",
        default: {
            name: "",
            password: "",

        }
    }
)

export const searchResultsState = atom(
    {
        key: "searchResultsState",
        default: []
    }
)
export const bookState = atom(
    {
        key: "bookState",
        default: {
            title: "",
            author: "",
            publisher: "",
            subject: [],
            availability: 0,
            total: 0,
            date_of_publish: "",
            access_number: "",
            language: "",
            description: "",
            image: ""
        }
    }
)
export const conditionState = atom({
    key: "conditionState",
    default: {
        cat1: null,
        cat1_value: null,
        cat2: null,
        cat2_value: null,
        cat3: null,
        cat3_value: null
    }
})
export const searchLengthState = atom(
    {
        key: "searchLengthState",
        default: {
            length: 0
        }
    }
)


