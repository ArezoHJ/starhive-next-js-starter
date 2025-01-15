import {AttributeVisitor} from '../client/AttributeVisitor'
import {StarhiveObject} from '../client/StarhiveObject'
import {StreamData} from '../client/StreamData'
export class Contact implements StarhiveObject {
    static readonly TYPE_ID: string = '2022301f-e056-4aa1-bb0b-ead35b583f86'
    static readonly ATTRIBUTES_MESSAGE: string = '7f4e90cc-8d63-47db-bf48-04fe7d134460'
    static readonly ATTRIBUTES_NOTES: string = '5ecaaecd-cc3c-4a53-aec6-48aab64950bc'
    static readonly ATTRIBUTES_CREATED: string = 'db2335bd-ae0f-456f-ae84-9b55f0f80ad2'
    static readonly ATTRIBUTES_UPDATED: string = '8aac741f-d979-478c-ad20-6987fafbac1a'
    static readonly ATTRIBUTES_AVATAR: string = '2b7e849a-73a4-4e22-9aaa-0e38b8728b1d'
    static readonly ATTRIBUTES_NAME: string = '2c774c55-955e-4f13-a3ab-8ed597b6db1e'
    static readonly ATTRIBUTES_EMAIL: string = 'eb24dc6f-9f48-4073-b0ec-b25dd7802fae'
    static readonly ATTRIBUTES_HAVE_I_RESPONDED: string = 'd5a15240-4436-4d10-afd7-c7b0278c35e9'
    private readonly _id?: string
    getId(): string | undefined {
        return this._id
    }
    private readonly _message?: string
    getMessage(): string | undefined {
        return this._message
    }
    private readonly _notes?: string
    getNotes(): string | undefined {
        return this._notes
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
    private readonly _email?: string
    getEmail(): string | undefined {
        return this._email
    }
    private readonly _haveIResponded?: boolean
    getHaveIResponded(): boolean | undefined {
        return this._haveIResponded
    }
    accept(visitor: AttributeVisitor) {
        if (this._message !== undefined) {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_MESSAGE, [this._message]);
        } else {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_MESSAGE, []);
        }
        if (this._notes !== undefined) {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_NOTES, [this._notes]);
        } else {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_NOTES, []);
        }
        if (this._avatarContentKey !== undefined && this._avatarContentKey !== null) {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_AVATAR, [this._avatarContentKey]);
        } else if (this._avatarContentKey === null) {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_AVATAR, []);
        }
        if (this._name !== undefined) {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_NAME, [this._name]);
        } else {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_NAME, []);
        }
        if (this._email !== undefined) {
          visitor.visitEmailAttribute(Contact.ATTRIBUTES_EMAIL, [this._email]);
        } else {
          visitor.visitEmailAttribute(Contact.ATTRIBUTES_EMAIL, []);
        }
        if (this._haveIResponded !== undefined) {
          visitor.visitBooleanAttribute(Contact.ATTRIBUTES_HAVE_I_RESPONDED, [this._haveIResponded]);
        } else {
          visitor.visitBooleanAttribute(Contact.ATTRIBUTES_HAVE_I_RESPONDED, []);
        }
    }
    getTypeId(): string {
        return Contact.TYPE_ID
    }
    static builder(): ContactBuilder {
        return new ContactBuilder()
    }
    constructor(builder: ContactBuilder) {
        this._id = builder.getId()
        this._message = builder.getMessage()
        this._notes = builder.getNotes()
        this._created = builder.getCreated()
        this._updated = builder.getUpdated()
        this._avatar = builder.getAvatar()
        this._avatarContentKey = builder.getAvatarContentKey()
        this._name = builder.getName()
        this._email = builder.getEmail()
        this._haveIResponded = builder.getHaveIResponded()
    }
    toBuilder(): ContactBuilder {
        const builder = Contact.builder()
        if (this._id) {
          builder.id(this._id)
        }
        if (this._message) {
          builder.message(this._message)
        }
        if (this._notes) {
          builder.notes(this._notes)
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
        if (this._email) {
          builder.email(this._email)
        }
        if (this._haveIResponded) {
          builder.haveIResponded(this._haveIResponded)
        }
        return builder
    }
}
export class ContactBuilder {
    private _id?: string
    private _message?: string
    getMessage(): string | undefined {
        return this._message
    }
    message(value: string): ContactBuilder {
        this._message = value
        return this
    }
    private _notes?: string
    getNotes(): string | undefined {
        return this._notes
    }
    notes(value: string): ContactBuilder {
        this._notes = value
        return this
    }
    private _created?: Date
    getCreated(): Date | undefined {
        return this._created
    }
    created(value: Date): ContactBuilder {
        this._created = value
        return this
    }
    private _updated?: Date
    getUpdated(): Date | undefined {
        return this._updated
    }
    updated(value: Date): ContactBuilder {
        this._updated = value
        return this
    }
    private _avatar?: string
    getAvatar(): string | undefined {
        return this._avatar
    }
    avatar(value: string): ContactBuilder {
        this._avatar = value
        return this
    }
    private _avatarContentKey?: string | null
    getAvatarContentKey(): string | null | undefined {
        return this._avatarContentKey
    }
    avatarData(value: StreamData): ContactBuilder {
        this._avatarContentKey = value.contentKey
        return this
    }
    removeAvatarData(): ContactBuilder {
        this._avatarContentKey = null
        return this
    }
    private _name?: string
    getName(): string | undefined {
        return this._name
    }
    name(value: string): ContactBuilder {
        this._name = value
        return this
    }
    private _email?: string
    getEmail(): string | undefined {
        return this._email
    }
    email(value: string): ContactBuilder {
        this._email = value
        return this
    }
    private _haveIResponded?: boolean
    getHaveIResponded(): boolean | undefined {
        return this._haveIResponded
    }
    haveIResponded(value: boolean): ContactBuilder {
        this._haveIResponded = value
        return this
    }
    getId(): string | undefined {
        return this._id
    }
    id(value: string): ContactBuilder {
        this._id = value
        return this
    }
    build(): Contact {
        return new Contact(this);
    }
}
