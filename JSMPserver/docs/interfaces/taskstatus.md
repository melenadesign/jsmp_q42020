**[jsmp2020q4_be](../README.md)**

> [Globals](../globals.md) / TaskStatus

# Interface: TaskStatus

TaskStatus describes a state of a task and a timestamp, when this state was updated
available states are: Pending, Success, Failure)

## Hierarchy

* [Status](status.md)

  ↳ **TaskStatus**

## Index

### Properties

* [state](taskstatus.md#state)
* [updated](taskstatus.md#updated)

## Properties

### state

•  **state**: [ItemState](../enums/itemstate.md)

*Overrides [Status](status.md).[state](status.md#state)*

*Defined in [statuses.ts:30](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/statuses.ts#L30)*

___

### updated

•  **updated**: Date

*Inherited from [Status](status.md).[updated](status.md#updated)*

*Defined in [statuses.ts:22](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/statuses.ts#L22)*
