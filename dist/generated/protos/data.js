"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.4
//   protoc               v5.27.1
// source: protos/data.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomValidation = exports.HashValidation = exports.WrappedValidation = exports.BankInfo = exports.Document = exports.Name = exports.WrappedData = exports.ValidationStatus = exports.DocumentType = exports.protobufPackage = void 0;
exports.documentTypeFromJSON = documentTypeFromJSON;
exports.documentTypeToJSON = documentTypeToJSON;
exports.validationStatusFromJSON = validationStatusFromJSON;
exports.validationStatusToJSON = validationStatusToJSON;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const timestamp_1 = require("../google/protobuf/timestamp");
exports.protobufPackage = "espressocash.data.v1";
var DocumentType;
(function (DocumentType) {
    DocumentType[DocumentType["DOCUMENT_TYPE_UNSPECIFIED"] = 0] = "DOCUMENT_TYPE_UNSPECIFIED";
    DocumentType[DocumentType["DOCUMENT_TYPE_VOTER_ID"] = 1] = "DOCUMENT_TYPE_VOTER_ID";
    DocumentType[DocumentType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DocumentType || (exports.DocumentType = DocumentType = {}));
function documentTypeFromJSON(object) {
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
function documentTypeToJSON(object) {
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
var ValidationStatus;
(function (ValidationStatus) {
    ValidationStatus[ValidationStatus["VALIDATION_STATUS_UNSPECIFIED"] = 0] = "VALIDATION_STATUS_UNSPECIFIED";
    ValidationStatus[ValidationStatus["VALIDATION_STATUS_PENDING"] = 1] = "VALIDATION_STATUS_PENDING";
    ValidationStatus[ValidationStatus["VALIDATION_STATUS_APPROVED"] = 2] = "VALIDATION_STATUS_APPROVED";
    ValidationStatus[ValidationStatus["VALIDATION_STATUS_REJECTED"] = 3] = "VALIDATION_STATUS_REJECTED";
    ValidationStatus[ValidationStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ValidationStatus || (exports.ValidationStatus = ValidationStatus = {}));
function validationStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "VALIDATION_STATUS_UNSPECIFIED":
            return ValidationStatus.VALIDATION_STATUS_UNSPECIFIED;
        case 1:
        case "VALIDATION_STATUS_PENDING":
            return ValidationStatus.VALIDATION_STATUS_PENDING;
        case 2:
        case "VALIDATION_STATUS_APPROVED":
            return ValidationStatus.VALIDATION_STATUS_APPROVED;
        case 3:
        case "VALIDATION_STATUS_REJECTED":
            return ValidationStatus.VALIDATION_STATUS_REJECTED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ValidationStatus.UNRECOGNIZED;
    }
}
function validationStatusToJSON(object) {
    switch (object) {
        case ValidationStatus.VALIDATION_STATUS_UNSPECIFIED:
            return "VALIDATION_STATUS_UNSPECIFIED";
        case ValidationStatus.VALIDATION_STATUS_PENDING:
            return "VALIDATION_STATUS_PENDING";
        case ValidationStatus.VALIDATION_STATUS_APPROVED:
            return "VALIDATION_STATUS_APPROVED";
        case ValidationStatus.VALIDATION_STATUS_REJECTED:
            return "VALIDATION_STATUS_REJECTED";
        case ValidationStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseWrappedData() {
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
exports.WrappedData = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.email !== undefined) {
            writer.uint32(10).string(message.email);
        }
        if (message.name !== undefined) {
            exports.Name.encode(message.name, writer.uint32(18).fork()).join();
        }
        if (message.birthDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.birthDate), writer.uint32(26).fork()).join();
        }
        if (message.phone !== undefined) {
            writer.uint32(34).string(message.phone);
        }
        if (message.document !== undefined) {
            exports.Document.encode(message.document, writer.uint32(42).fork()).join();
        }
        if (message.bankInfo !== undefined) {
            exports.BankInfo.encode(message.bankInfo, writer.uint32(50).fork()).join();
        }
        if (message.selfieImage !== undefined) {
            writer.uint32(58).bytes(message.selfieImage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
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
                    message.name = exports.Name.decode(reader, reader.uint32());
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.birthDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
                    message.document = exports.Document.decode(reader, reader.uint32());
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.bankInfo = exports.BankInfo.decode(reader, reader.uint32());
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
    fromJSON(object) {
        return {
            email: isSet(object.email) ? globalThis.String(object.email) : undefined,
            name: isSet(object.name) ? exports.Name.fromJSON(object.name) : undefined,
            birthDate: isSet(object.birthDate) ? fromJsonTimestamp(object.birthDate) : undefined,
            phone: isSet(object.phone) ? globalThis.String(object.phone) : undefined,
            document: isSet(object.document) ? exports.Document.fromJSON(object.document) : undefined,
            bankInfo: isSet(object.bankInfo) ? exports.BankInfo.fromJSON(object.bankInfo) : undefined,
            selfieImage: isSet(object.selfieImage) ? bytesFromBase64(object.selfieImage) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.email !== undefined) {
            obj.email = message.email;
        }
        if (message.name !== undefined) {
            obj.name = exports.Name.toJSON(message.name);
        }
        if (message.birthDate !== undefined) {
            obj.birthDate = message.birthDate.toISOString();
        }
        if (message.phone !== undefined) {
            obj.phone = message.phone;
        }
        if (message.document !== undefined) {
            obj.document = exports.Document.toJSON(message.document);
        }
        if (message.bankInfo !== undefined) {
            obj.bankInfo = exports.BankInfo.toJSON(message.bankInfo);
        }
        if (message.selfieImage !== undefined) {
            obj.selfieImage = base64FromBytes(message.selfieImage);
        }
        return obj;
    },
    create(base) {
        return exports.WrappedData.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseWrappedData();
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : undefined;
        message.name = (object.name !== undefined && object.name !== null) ? exports.Name.fromPartial(object.name) : undefined;
        message.birthDate = (_b = object.birthDate) !== null && _b !== void 0 ? _b : undefined;
        message.phone = (_c = object.phone) !== null && _c !== void 0 ? _c : undefined;
        message.document = (object.document !== undefined && object.document !== null)
            ? exports.Document.fromPartial(object.document)
            : undefined;
        message.bankInfo = (object.bankInfo !== undefined && object.bankInfo !== null)
            ? exports.BankInfo.fromPartial(object.bankInfo)
            : undefined;
        message.selfieImage = (_d = object.selfieImage) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseName() {
    return { firstName: "", lastName: "" };
}
exports.Name = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.firstName !== "") {
            writer.uint32(10).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(18).string(message.lastName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
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
    fromJSON(object) {
        return {
            firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
            lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.firstName !== "") {
            obj.firstName = message.firstName;
        }
        if (message.lastName !== "") {
            obj.lastName = message.lastName;
        }
        return obj;
    },
    create(base) {
        return exports.Name.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseName();
        message.firstName = (_a = object.firstName) !== null && _a !== void 0 ? _a : "";
        message.lastName = (_b = object.lastName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDocument() {
    return { type: 0, number: "", countryCode: "" };
}
exports.Document = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.number !== "") {
            writer.uint32(18).string(message.number);
        }
        if (message.countryCode !== "") {
            writer.uint32(26).string(message.countryCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDocument();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.number = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.countryCode = reader.string();
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
    fromJSON(object) {
        return {
            type: isSet(object.type) ? documentTypeFromJSON(object.type) : 0,
            number: isSet(object.number) ? globalThis.String(object.number) : "",
            countryCode: isSet(object.countryCode) ? globalThis.String(object.countryCode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== 0) {
            obj.type = documentTypeToJSON(message.type);
        }
        if (message.number !== "") {
            obj.number = message.number;
        }
        if (message.countryCode !== "") {
            obj.countryCode = message.countryCode;
        }
        return obj;
    },
    create(base) {
        return exports.Document.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDocument();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : "";
        message.countryCode = (_c = object.countryCode) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseBankInfo() {
    return { accountNumber: "", bankCode: "", bankName: "" };
}
exports.BankInfo = {
    encode(message, writer = new wire_1.BinaryWriter()) {
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
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
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
    fromJSON(object) {
        return {
            accountNumber: isSet(object.accountNumber) ? globalThis.String(object.accountNumber) : "",
            bankCode: isSet(object.bankCode) ? globalThis.String(object.bankCode) : "",
            bankName: isSet(object.bankName) ? globalThis.String(object.bankName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return exports.BankInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseBankInfo();
        message.accountNumber = (_a = object.accountNumber) !== null && _a !== void 0 ? _a : "";
        message.bankCode = (_b = object.bankCode) !== null && _b !== void 0 ? _b : "";
        message.bankName = (_c = object.bankName) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseWrappedValidation() {
    return { hash: undefined, custom: undefined };
}
exports.WrappedValidation = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.hash !== undefined) {
            exports.HashValidation.encode(message.hash, writer.uint32(10).fork()).join();
        }
        if (message.custom !== undefined) {
            exports.CustomValidation.encode(message.custom, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWrappedValidation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.hash = exports.HashValidation.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.custom = exports.CustomValidation.decode(reader, reader.uint32());
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
    fromJSON(object) {
        return {
            hash: isSet(object.hash) ? exports.HashValidation.fromJSON(object.hash) : undefined,
            custom: isSet(object.custom) ? exports.CustomValidation.fromJSON(object.custom) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.hash !== undefined) {
            obj.hash = exports.HashValidation.toJSON(message.hash);
        }
        if (message.custom !== undefined) {
            obj.custom = exports.CustomValidation.toJSON(message.custom);
        }
        return obj;
    },
    create(base) {
        return exports.WrappedValidation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseWrappedValidation();
        message.hash = (object.hash !== undefined && object.hash !== null)
            ? exports.HashValidation.fromPartial(object.hash)
            : undefined;
        message.custom = (object.custom !== undefined && object.custom !== null)
            ? exports.CustomValidation.fromPartial(object.custom)
            : undefined;
        return message;
    },
};
function createBaseHashValidation() {
    return { hash: "", status: 0 };
}
exports.HashValidation = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHashValidation();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.status = reader.int32();
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
    fromJSON(object) {
        return {
            hash: isSet(object.hash) ? globalThis.String(object.hash) : "",
            status: isSet(object.status) ? validationStatusFromJSON(object.status) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.hash !== "") {
            obj.hash = message.hash;
        }
        if (message.status !== 0) {
            obj.status = validationStatusToJSON(message.status);
        }
        return obj;
    },
    create(base) {
        return exports.HashValidation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseHashValidation();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : "";
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseCustomValidation() {
    return { type: "", data: new Uint8Array(0) };
}
exports.CustomValidation = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
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
    fromJSON(object) {
        return {
            type: isSet(object.type) ? globalThis.String(object.type) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.data.length !== 0) {
            obj.data = base64FromBytes(message.data);
        }
        return obj;
    },
    create(base) {
        return exports.CustomValidation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCustomValidation();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        return message;
    },
};
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof globalThis.Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new globalThis.Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=data.js.map