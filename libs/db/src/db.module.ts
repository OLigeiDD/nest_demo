import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { Course } from './models/course.model ';
import { Episode } from './models/episode.model';

// const models = MongooseModule.forFeature([{name:User.name,schema:UserSchema}])
const models = TypegooseModule.forFeature([User,Course,Episode]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot(
      'mongodb://nestdemo:1122@localhost:27017/nestdemo',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      },
    ),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
