import { gql } from "apollo-angular";
import { USER_FRAGMENT } from "../../fragments/user.fragment";


export const LOGIN_QUERY = gql`
query SignIn($email: String!, $password: String!, $include: Boolean!) {
  SignIn(email: $email, password: $password) {
    status
    message
    token
    user {
      ...UserObject
    }
  }
}
${USER_FRAGMENT}
`