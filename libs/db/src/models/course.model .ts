import { Prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Episode } from './episode.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Course {
  @ApiProperty({ description: '课程名称', example: 'xxxxx' })
  @Prop()
  name: string;

  @ApiProperty({ description: '封面图', example: 'xxx.png' })
  @Prop()
  cover: string;

  @ApiProperty({description: '章节',example:[{name:'第一章',file:'xxx.mp4'}]})
  @arrayProp({ items: Episode })
  episodes: Ref<Episode>[];
}
