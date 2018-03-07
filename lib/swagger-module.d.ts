import { INestApplication } from '@nestjs/common';
import { SwaggerBaseConfig, SwaggerDocument } from './interfaces';
import { SwaggerCustomOptions } from './interfaces/swagger-custom-options.interface';
export declare class SwaggerModule {
    private static readonly swaggerScanner;
    static createDocument(app: INestApplication, config: SwaggerBaseConfig): SwaggerDocument;
    static setup(path: string, app: INestApplication, document: SwaggerDocument, options?: SwaggerCustomOptions): void;
}
