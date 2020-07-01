import { Prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
  schemaOptions:{
    timestamps: true
  }
})
export class User {
  @Prop()
  @ApiProperty({description:'用户名',example:'ydd'})
  username: string

  @Prop()
  @ApiProperty({description:'密码',example:'1122'})
  password: string
}