export interface SwaggerOptions {
    validatorUrl: string;
    oauth: {
        clientId: string;
        clientSecret: string;
        realm: string;
        appName: string;
        scopeSeparator: string;
        additionalQueryStringParams: any;
    };
}
