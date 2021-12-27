declare namespace API {
    interface IUser {
        fetchUserInfo: any
        currentUser?: string | undefined
        settings: {},
    }
    interface LoginUser {
        username?: string,
        password?: string,
    }
}