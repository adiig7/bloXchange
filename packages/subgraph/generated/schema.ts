// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Item extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Item entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Item must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Item", id.toString(), this);
    }
  }

  static load(id: string): Item | null {
    return changetype<Item | null>(store.get("Item", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get quantity(): BigInt {
    let value = this.get("quantity");
    return value!.toBigInt();
  }

  set quantity(value: BigInt) {
    this.set("quantity", Value.fromBigInt(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value!.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    return value!.toBytes();
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }

  get title(): string {
    let value = this.get("title");
    return value!.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get images(): Array<string> {
    let value = this.get("images");
    return value!.toStringArray();
  }

  set images(value: Array<string>) {
    this.set("images", Value.fromStringArray(value));
  }

  get orders(): Array<string> {
    let value = this.get("orders");
    return value!.toStringArray();
  }

  set orders(value: Array<string>) {
    this.set("orders", Value.fromStringArray(value));
  }
}

export class Order extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Order entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Order must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Order", id.toString(), this);
    }
  }

  static load(id: string): Order | null {
    return changetype<Order | null>(store.get("Order", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get item(): string {
    let value = this.get("item");
    return value!.toString();
  }

  set item(value: string) {
    this.set("item", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get quantity(): BigInt {
    let value = this.get("quantity");
    return value!.toBigInt();
  }

  set quantity(value: BigInt) {
    this.set("quantity", Value.fromBigInt(value));
  }

  get orderedAt(): BigInt {
    let value = this.get("orderedAt");
    return value!.toBigInt();
  }

  set orderedAt(value: BigInt) {
    this.set("orderedAt", Value.fromBigInt(value));
  }

  get disputeId(): BigInt {
    let value = this.get("disputeId");
    return value!.toBigInt();
  }

  set disputeId(value: BigInt) {
    this.set("disputeId", Value.fromBigInt(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value!.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get status(): i32 {
    let value = this.get("status");
    return value!.toI32();
  }

  set status(value: i32) {
    this.set("status", Value.fromI32(value));
  }

  get disputes(): Array<string> {
    let value = this.get("disputes");
    return value!.toStringArray();
  }

  set disputes(value: Array<string>) {
    this.set("disputes", Value.fromStringArray(value));
  }
}

export class Dispute extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Dispute entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Dispute must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Dispute", id.toString(), this);
    }
  }

  static load(id: string): Dispute | null {
    return changetype<Dispute | null>(store.get("Dispute", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get order(): string {
    let value = this.get("order");
    return value!.toString();
  }

  set order(value: string) {
    this.set("order", Value.fromString(value));
  }

  get disputedBy(): Bytes {
    let value = this.get("disputedBy");
    return value!.toBytes();
  }

  set disputedBy(value: Bytes) {
    this.set("disputedBy", Value.fromBytes(value));
  }

  get resolvedBy(): Bytes {
    let value = this.get("resolvedBy");
    return value!.toBytes();
  }

  set resolvedBy(value: Bytes) {
    this.set("resolvedBy", Value.fromBytes(value));
  }
}
