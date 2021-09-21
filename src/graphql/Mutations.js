import { gql } from "@apollo/client"

export const CREATE_EVENT = gql`
    mutation (
        $title: String!
        $content: String!
        $date: Date!
        $location: String!
        $lat: Float!
        $lon: Float!
        $email: String
    ) {
        event {
            create(
                title: $title
                content: $content
                date: $date
                location: $location
                lat: $lat
                lon: $lon
                email: $email
            ) {
                responseResult {
                    succeeded
                    errorCode
                    slug
                    message
                }
            }
        }
    }
`
