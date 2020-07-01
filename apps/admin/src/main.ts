import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('nestjs')
    .setDescription('后台管理系统api')
    .setVersion('1.0')
    .build();


  const document = SwaggerModule.createDocument(app,options)  
  SwaggerModule.setup('api-docs',app,document)

  await app.listen(3001);
  console.log(`http://localhost:3001/api-docs`)
}
bootstrap();
