import { createAction, props } from '@ngrx/store';


export const LOAD_AUTH = createAction(
    '[Login Page] SIGN IN',
    props<{ email: string, password : string }>()   //  Comenzamos con la Carga del Loggin
)

export const AUTH_FAIL = createAction(
    '[Login Page] SIGN IN FAIL',
    props<{ payload : any }>()  //  Recibe un payload ( propiedad desconocida ) que recibe informacion del Error
)
export const AUTH_SUCCESS = createAction(
    '[Login Page] SIGN IN SUCCESS',
    props<{ userresponse : any }>()  //  Recibe un payload ( propiedad desconocida ) que recibe informacion exitosa
)

//  Aqui van todas las acciones disponibles para La Autenticacion guardadas en el Store
