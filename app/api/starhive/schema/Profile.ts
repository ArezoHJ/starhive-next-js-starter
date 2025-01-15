import {AttributeVisitor} from '../client/AttributeVisitor'
import {StarhiveObject} from '../client/StarhiveObject'
import {StreamData} from '../client/StreamData'
export class Profile implements StarhiveObject {
    static readonly TYPE_ID: string = '2b6cdcd6-3984-47a4-b148-1ff0caf3e93b'
    static readonly ATTRIBUTES_CREATED: string = '969e8d35-3abe-465d-9f19-157084c2757d'
    static readonly ATTRIBUTES_UPDATED: string = '5e3d4610-4946-410a-9e6d-89bc3edc0dbf'
    static readonly ATTRIBUTES_AVATAR: string = '1eae6b7f-dd0f-406b-9b18-e09ce83088c3'
    static readonly ATTRIBUTES_NAME: string = 'd365d34f-ad1e-4362-8bff-f310a35eb595'
    private readonly _id?: string
    getId(): string | undefined {
        return this._id
    }
    private readonly _created?: Date
    getCreated(): Date | undefined {
        return this._created
    }
    private readonly _updated?: Date
    getUpdated(): Date | undefined {
        return this._updated
    }
    private readonly _avatar?: string
    getAvatar(): string | undefined {
        return this._avatar
    }
    private readonly _avatarContentKey?: string | null
    private readonly _name?: string
    getName(): string | undefined {
        return this._name
    }
    accept(visitor: AttributeVisitor) {
        if (this._avatarContentKey !== undefined && this._avatarContentKey !== null) {
          visitor.visitTextAttribute(Profile.ATTRIBUTES_AVATAR, [this._avatarContentKey]);
        } else if (this._avatarContentKey === null) {
          visitor.visitTextAttribute(Profile.ATTRIBUTES_AVATAR, []);
        }
        if (this._name !== undefined) {
          visitor.visitTextAttribute(Profile.ATTRIBUTES_NAME, [this._name]);
        } else {
          visitor.visitTextAttribute(Profile.ATTRIBUTES_NAME, []);
        }
    }
    getTypeId(): string {
        return Profile.TYPE_ID
    }
    static builder(): ProfileBuilder {
        return new ProfileBuilder()
    }
    constructor(builder: ProfileBuilder) {
        this._id = builder.getId()
        this._created = builder.getCreated()
        this._updated = builder.getUpdated()
        this._avatar = builder.getAvatar()
        this._avatarContentKey = builder.getAvatarContentKey()
        this._name = builder.getName()
    }
    toBuilder(): ProfileBuilder {
        const builder = Profile.builder()
        if (this._id) {
          builder.id(this._id)
        }
        if (this._created) {
          builder.created(this._created)
        }
        if (this._updated) {
          builder.updated(this._updated)
        }
        if (this._avatar) {
          builder.avatar(this._avatar)
        }
        if (this._name) {
          builder.name(this._name)
        }
        return builder
    }
}
export class ProfileBuilder {
    private _id?: string
    private _created?: Date
    getCreated(): Date | undefined {
        return this._created
    }
    created(value: Date): ProfileBuilder {
        this._created = value
        return this
    }
    private _updated?: Date
    getUpdated(): Date | undefined {
        return this._updated
    }
    updated(value: Date): ProfileBuilder {
        this._updated = value
        return this
    }
    private _avatar?: string
    getAvatar(): string | undefined {
        return this._avatar
    }
    avatar(value: string): ProfileBuilder {
        this._avatar = value
        return this
    }
    private _avatarContentKey?: string | null
    getAvatarContentKey(): string | null | undefined {
        return this._avatarContentKey
    }
    avatarData(value: StreamData): ProfileBuilder {
        this._avatarContentKey = value.contentKey
        return this
    }
    removeAvatarData(): ProfileBuilder {
        this._avatarContentKey = null
        return this
    }
    private _name?: string
    getName(): string | undefined {
        return this._name
    }
    name(value: string): ProfileBuilder {
        this._name = value
        return this
    }
    getId(): string | undefined {
        return this._id
    }
    id(value: string): ProfileBuilder {
        this._id = value
        return this
    }
    build(): Profile {
        return new Profile(this);
    }
}
