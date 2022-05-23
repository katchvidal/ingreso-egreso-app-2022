import Swal from "sweetalert2"
import { TYPE_ALERT } from "./config.sweetalert"

export const BasicSweetAlert = (icon = TYPE_ALERT.SUCCESS, title  : string , text: string ) => {
    Swal.fire({   
        title,
        text,
        icon,
        position: "top-start",
        confirmButtonText : 'Cool',
        toast : true,
        timerProgressBar : true,
        timer : 2500
    })
}