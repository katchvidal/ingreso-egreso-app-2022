import { createReducer, on } from "@ngrx/store";
import * as AuthActions from '../../actions'

export interface AuthState {
    user: any ;
    loading: boolean;
    error: any;
    token: string;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
    token: ''
}

export const authReducer = createReducer(
    initialState,
    on(AuthActions.LOAD_AUTH , state => ({ ...state, loading: true, error: null })),
    on(AuthActions.AUTH_SUCCESS, (state, { userresponse }) => ({ ...state, loading: false, loaded: true, userresponse: { userresponse: userresponse.user}, token: userresponse.token , error: null})),
    on(AuthActions.AUTH_FAIL, (state, { payload }) => ({ ...state, loading: false, loaded: false, error : { status: payload.networkError.status, url: payload.networkError.url, error: payload.error }}))
);