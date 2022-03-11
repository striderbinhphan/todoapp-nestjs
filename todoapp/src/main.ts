import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AllExceptionsFilter } from './filters/all-exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Todo app api')
    .setDescription('The Todo API description')
    .setVersion('1.0')
    .addBearerAuth({
      "in": "header",
      "name": "Authorization",
      "type": "apiKey"
    })
    // .addTag('empty')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000,()=>{
    console.log("Todo API has been listening as http://localhost:3000")
  });
}
bootstrap();
