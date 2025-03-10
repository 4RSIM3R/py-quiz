export type AuthData = {
    role?: string,
    user: any;
};

export type AuthenticatedUserData = {
    id: number;
    email: string;
    name: string;
    gravatar: string;
    email_verified_at: string | null;
};

export type FlashMessageData = {
    type: string;
    message: string;
};

export type PagePropsData = {
    auth: AuthData;
    flashMessage: FlashMessageData;
};
