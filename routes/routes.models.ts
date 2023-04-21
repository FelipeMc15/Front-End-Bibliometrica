export interface Routes  {
    Login : string,
    Register: string,
    Forget_Password: string
}
export const publicRoutes: Routes = {
    Login: "/login",
    Register: "/register",
    Forget_Password: "forget-password"
}

export const privateRoutes = {
    Home: "/home",
    Services :"/services",
    Documents : "/documents",
    DataBase : "/data-base"
}