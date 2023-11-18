interface AuthError {
    message: string;
}

class AuthResponse{
    private success: boolean;
    private error?: AuthError;

    constructor(success: boolean, error?: AuthError){
        this.success = success;
        this.error = error;
    }
    getSuccess(): boolean{
        return this.success;
    }
    getError(): AuthError | undefined{
        return this.error;
    }
}

export { type AuthError,  AuthResponse };