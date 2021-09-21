import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ICreateEvent {
    title: string
    content: string
    location: string
    lon: string
    lat: string
    date: string
    email: string
}

const initialState: ICreateEvent = {
    title: "",
    content: "",
    location: "",
    lon: "",
    lat: "",
    date: "",
    email: "",
}

const createEventSlice = createSlice({
    name: "createEvent",
    initialState,
    reducers: {
        updateTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
        updateContent: (state, action: PayloadAction<string>) => {
            state.content = action.payload
        },
        updateLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload
        },
        updateLon: (state, action: PayloadAction<string>) => {
            state.lon = action.payload
        },
        updateLat: (state, action: PayloadAction<string>) => {
            state.lat = action.payload
        },
        updateDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload
        },
        updateEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
    },
})

export const {
    updateTitle,
    updateContent,
    updateLocation,
    updateLon,
    updateLat,
    updateDate,
    updateEmail,
} = createEventSlice.actions

export default createEventSlice.reducer
