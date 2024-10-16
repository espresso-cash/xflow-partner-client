// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.3
//   protoc               v5.27.1
// source: protos/data.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "espressocash.data.v1";

export enum DocumentType {
  DOCUMENT_TYPE_UNSPECIFIED = 0,
  DOCUMENT_TYPE_VOTER_ID = 1,
  UNRECOGNIZED = -1,
}

export function documentTypeFromJSON(object: any): DocumentType {
  switch (object) {
    case 0:
    case "DOCUMENT_TYPE_UNSPECIFIED":
      return DocumentType.DOCUMENT_TYPE_UNSPECIFIED;
    case 1:
    case "DOCUMENT_TYPE_VOTER_ID":
      return DocumentType.DOCUMENT_TYPE_VOTER_ID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DocumentType.UNRECOGNIZED;
  }
}

export function documentTypeToJSON(object: DocumentType): string {
  switch (object) {
    case DocumentType.DOCUMENT_TYPE_UNSPECIFIED:
      return "DOCUMENT_TYPE_UNSPECIFIED";
    case DocumentType.DOCUMENT_TYPE_VOTER_ID:
      return "DOCUMENT_TYPE_VOTER_ID";
    case DocumentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface WrappedData {
  email?: string | undefined;
  name?: Name | undefined;
  birthDate?: Date | undefined;
  phone?: string | undefined;
  document?: Document | undefined;
  bankInfo?: BankInfo | undefined;
  selfieImage?: Uint8Array | undefined;
}

export interface Name {
  firstName: string;
  lastName: string;
}

export interface Document {
  type: DocumentType;
  number: string;
}

export interface BankInfo {
  accountNumber: string;
  bankCode: string;
  bankName: string;
}

export interface WrappedValidation {
  hash?: string | undefined;
  custom?: CustomValidation | undefined;
}

export interface CustomValidation {
  type: string;
  data: Uint8Array;
}

function createBaseWrappedData(): WrappedData {
  return {
    email: undefined,
    name: undefined,
    birthDate: undefined,
    phone: undefined,
    document: undefined,
    bankInfo: undefined,
    selfieImage: undefined,
  };
}

export const WrappedData: MessageFns<WrappedData> = {
  encode(message: WrappedData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.email !== undefined) {
      writer.uint32(10).string(message.email);
    }
    if (message.name !== undefined) {
      Name.encode(message.name, writer.uint32(18).fork()).join();
    }
    if (message.birthDate !== undefined) {
      Timestamp.encode(toTimestamp(message.birthDate), writer.uint32(26).fork()).join();
    }
    if (message.phone !== undefined) {
      writer.uint32(34).string(message.phone);
    }
    if (message.document !== undefined) {
      Document.encode(message.document, writer.uint32(42).fork()).join();
    }
    if (message.bankInfo !== undefined) {
      BankInfo.encode(message.bankInfo, writer.uint32(50).fork()).join();
    }
    if (message.selfieImage !== undefined) {
      writer.uint32(58).bytes(message.selfieImage);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WrappedData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrappedData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.email = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.name = Name.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.birthDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.phone = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.document = Document.decode(reader, reader.uint32());
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.bankInfo = BankInfo.decode(reader, reader.uint32());
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.selfieImage = reader.bytes();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WrappedData {
    return {
      email: isSet(object.email) ? globalThis.String(object.email) : undefined,
      name: isSet(object.name) ? Name.fromJSON(object.name) : undefined,
      birthDate: isSet(object.birthDate) ? fromJsonTimestamp(object.birthDate) : undefined,
      phone: isSet(object.phone) ? globalThis.String(object.phone) : undefined,
      document: isSet(object.document) ? Document.fromJSON(object.document) : undefined,
      bankInfo: isSet(object.bankInfo) ? BankInfo.fromJSON(object.bankInfo) : undefined,
      selfieImage: isSet(object.selfieImage) ? bytesFromBase64(object.selfieImage) : undefined,
    };
  },

  toJSON(message: WrappedData): unknown {
    const obj: any = {};
    if (message.email !== undefined) {
      obj.email = message.email;
    }
    if (message.name !== undefined) {
      obj.name = Name.toJSON(message.name);
    }
    if (message.birthDate !== undefined) {
      obj.birthDate = message.birthDate.toISOString();
    }
    if (message.phone !== undefined) {
      obj.phone = message.phone;
    }
    if (message.document !== undefined) {
      obj.document = Document.toJSON(message.document);
    }
    if (message.bankInfo !== undefined) {
      obj.bankInfo = BankInfo.toJSON(message.bankInfo);
    }
    if (message.selfieImage !== undefined) {
      obj.selfieImage = base64FromBytes(message.selfieImage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WrappedData>, I>>(base?: I): WrappedData {
    return WrappedData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WrappedData>, I>>(object: I): WrappedData {
    const message = createBaseWrappedData();
    message.email = object.email ?? undefined;
    message.name = (object.name !== undefined && object.name !== null) ? Name.fromPartial(object.name) : undefined;
    message.birthDate = object.birthDate ?? undefined;
    message.phone = object.phone ?? undefined;
    message.document = (object.document !== undefined && object.document !== null)
      ? Document.fromPartial(object.document)
      : undefined;
    message.bankInfo = (object.bankInfo !== undefined && object.bankInfo !== null)
      ? BankInfo.fromPartial(object.bankInfo)
      : undefined;
    message.selfieImage = object.selfieImage ?? undefined;
    return message;
  },
};

function createBaseName(): Name {
  return { firstName: "", lastName: "" };
}

export const Name: MessageFns<Name> = {
  encode(message: Name, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.firstName !== "") {
      writer.uint32(10).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(18).string(message.lastName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Name {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.firstName = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.lastName = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Name {
    return {
      firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
      lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
    };
  },

  toJSON(message: Name): unknown {
    const obj: any = {};
    if (message.firstName !== "") {
      obj.firstName = message.firstName;
    }
    if (message.lastName !== "") {
      obj.lastName = message.lastName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Name>, I>>(base?: I): Name {
    return Name.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Name>, I>>(object: I): Name {
    const message = createBaseName();
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    return message;
  },
};

function createBaseDocument(): Document {
  return { type: 0, number: "" };
}

export const Document: MessageFns<Document> = {
  encode(message: Document, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.number !== "") {
      writer.uint32(18).string(message.number);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Document {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.number = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Document {
    return {
      type: isSet(object.type) ? documentTypeFromJSON(object.type) : 0,
      number: isSet(object.number) ? globalThis.String(object.number) : "",
    };
  },

  toJSON(message: Document): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = documentTypeToJSON(message.type);
    }
    if (message.number !== "") {
      obj.number = message.number;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Document>, I>>(base?: I): Document {
    return Document.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Document>, I>>(object: I): Document {
    const message = createBaseDocument();
    message.type = object.type ?? 0;
    message.number = object.number ?? "";
    return message;
  },
};

function createBaseBankInfo(): BankInfo {
  return { accountNumber: "", bankCode: "", bankName: "" };
}

export const BankInfo: MessageFns<BankInfo> = {
  encode(message: BankInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.accountNumber !== "") {
      writer.uint32(10).string(message.accountNumber);
    }
    if (message.bankCode !== "") {
      writer.uint32(18).string(message.bankCode);
    }
    if (message.bankName !== "") {
      writer.uint32(26).string(message.bankName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BankInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBankInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.accountNumber = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.bankCode = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.bankName = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BankInfo {
    return {
      accountNumber: isSet(object.accountNumber) ? globalThis.String(object.accountNumber) : "",
      bankCode: isSet(object.bankCode) ? globalThis.String(object.bankCode) : "",
      bankName: isSet(object.bankName) ? globalThis.String(object.bankName) : "",
    };
  },

  toJSON(message: BankInfo): unknown {
    const obj: any = {};
    if (message.accountNumber !== "") {
      obj.accountNumber = message.accountNumber;
    }
    if (message.bankCode !== "") {
      obj.bankCode = message.bankCode;
    }
    if (message.bankName !== "") {
      obj.bankName = message.bankName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BankInfo>, I>>(base?: I): BankInfo {
    return BankInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BankInfo>, I>>(object: I): BankInfo {
    const message = createBaseBankInfo();
    message.accountNumber = object.accountNumber ?? "";
    message.bankCode = object.bankCode ?? "";
    message.bankName = object.bankName ?? "";
    return message;
  },
};

function createBaseWrappedValidation(): WrappedValidation {
  return { hash: undefined, custom: undefined };
}

export const WrappedValidation: MessageFns<WrappedValidation> = {
  encode(message: WrappedValidation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.hash !== undefined) {
      writer.uint32(10).string(message.hash);
    }
    if (message.custom !== undefined) {
      CustomValidation.encode(message.custom, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WrappedValidation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrappedValidation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.hash = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.custom = CustomValidation.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WrappedValidation {
    return {
      hash: isSet(object.hash) ? globalThis.String(object.hash) : undefined,
      custom: isSet(object.custom) ? CustomValidation.fromJSON(object.custom) : undefined,
    };
  },

  toJSON(message: WrappedValidation): unknown {
    const obj: any = {};
    if (message.hash !== undefined) {
      obj.hash = message.hash;
    }
    if (message.custom !== undefined) {
      obj.custom = CustomValidation.toJSON(message.custom);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WrappedValidation>, I>>(base?: I): WrappedValidation {
    return WrappedValidation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WrappedValidation>, I>>(object: I): WrappedValidation {
    const message = createBaseWrappedValidation();
    message.hash = object.hash ?? undefined;
    message.custom = (object.custom !== undefined && object.custom !== null)
      ? CustomValidation.fromPartial(object.custom)
      : undefined;
    return message;
  },
};

function createBaseCustomValidation(): CustomValidation {
  return { type: "", data: new Uint8Array(0) };
}

export const CustomValidation: MessageFns<CustomValidation> = {
  encode(message: CustomValidation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomValidation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomValidation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.data = reader.bytes();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomValidation {
    return {
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
    };
  },

  toJSON(message: CustomValidation): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomValidation>, I>>(base?: I): CustomValidation {
    return CustomValidation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CustomValidation>, I>>(object: I): CustomValidation {
    const message = createBaseCustomValidation();
    message.type = object.type ?? "";
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
