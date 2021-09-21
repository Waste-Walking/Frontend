import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
    {
        event {
            list {
                id
                title
                content
                location
                lat
                lon
                date
            }
        }
    }
`;
