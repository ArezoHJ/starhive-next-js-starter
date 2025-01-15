import {JsonDecoder} from '../client/JsonDecoder'
import {JsonAttributeValue} from '../client/JsonAttributeValue'
import {Profile} from './Profile'
import {ProfileBuilder} from './Profile'
export class ProfileDecoder implements JsonDecoder<Profile> {
    private readonly builder: ProfileBuilder
    setId(id: string) {
        this.builder.id(id)
    }
    visitJsonAttribute(attributeId: string, values: JsonAttributeValue[]) {
        if (values.length == 0) {
          return;
        }
        if (attributeId == Profile.ATTRIBUTES_CREATED) {
          const parsedValues = values.map(v => new Date(v.value))
          this.builder.created(parsedValues[0]);
        }
        if (attributeId == Profile.ATTRIBUTES_UPDATED) {
          const parsedValues = values.map(v => new Date(v.value))
          this.builder.updated(parsedValues[0]);
        }
        if (attributeId == Profile.ATTRIBUTES_AVATAR) {
          const parsedValues = values.map(v => v.value)
          this.builder.avatar(parsedValues[0]);
        }
        if (attributeId == Profile.ATTRIBUTES_NAME) {
          const parsedValues = values.map(v => v.value)
          this.builder.name(parsedValues[0]);
        }
    }
    build(): Profile {
        return this.builder.build()
    }
    constructor() {
        this.builder = Profile.builder()
    }
}
