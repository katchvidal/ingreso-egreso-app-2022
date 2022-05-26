import { gql } from "apollo-angular";

export const USER_FRAGMENT = gql`
    fragment UserObject on User {
        _id
        name
        lastname
        email
        password@include(if: $include)
        birthDay@include(if: $include)
        createAT@include(if: $include)
        role
        active@include(if: $include)
    }
`;