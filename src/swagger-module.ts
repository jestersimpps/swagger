import * as swaggerUi from 'swagger-ui-express';
import { INestApplication } from '@nestjs/common';
import { SwaggerBaseConfig, SwaggerDocument } from './interfaces';
import { SwaggerScanner } from './swagger-scanner';
import { SwaggerCustomOptions } from './interfaces/swagger-custom-options.interface';

export class SwaggerModule {
    private static readonly swaggerScanner = new SwaggerScanner();

    public static createDocument(app: INestApplication, config: SwaggerBaseConfig): SwaggerDocument {
        const document = this.swaggerScanner.scanApplication(app);
        return {
            ...config,
            ...document,
            swagger: '2.0',
        };
    }

    public static setup(
        path: string,
        app: INestApplication,
        document: SwaggerDocument,
        ops?: SwaggerCustomOptions,
    ) {
        app.use(path, swaggerUi.serve, swaggerUi.setup(document, ops));
    }
}
