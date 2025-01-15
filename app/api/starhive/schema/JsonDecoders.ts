import {JsonDecoder} from '../client/JsonDecoder'
import {Profile} from './Profile'
import {ProfileDecoder} from './ProfileDecoder'
import {Contact} from './Contact'
import {ContactDecoder} from './ContactDecoder'
export const JSON_DECODERS: Map<string, () => JsonDecoder<any>> = new Map<string, () => JsonDecoder<any>>([
  [Profile.TYPE_ID, () => new ProfileDecoder()],
  [Contact.TYPE_ID, () => new ContactDecoder()]
])
