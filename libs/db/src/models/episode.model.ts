import { Prop, modelOptions } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";


@modelOptions({
  schemaOptions:{
    timestamps:true
  }
})
export class Episode {
  @ApiProperty({description:'章节名称'})
  @Prop()
  name: string

  @ApiProperty({description: '文件名'})
  @Prop()
  file: string
}