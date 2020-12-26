**[jsmp2020q4_be](../README.md)**

> [Globals](../globals.md) / Status

# Interface: Status

Status describes a state of some item
(a task or an achievement) and a timestamp, when this state was updated
available states are: Pending, Success, Failure)

## Hierarchy

* **Status**

  ↳ [TaskStatus](taskstatus.md)

  ↳ [ArchivedItemStatus](archiveditemstatus.md)

  ↳ [AchievementStatus](achievementstatus.md)

## Index

### Properties

* [state](status.md#state)
* [updated](status.md#updated)

## Properties

### state

•  **state**: [ItemState](../enums/itemstate.md) \| [ArchivedItemState](../globals.md#archiveditemstate)

*Defined in [statuses.ts:21](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/statuses.ts#L21)*

___

### updated

•  **updated**: Date

*Defined in [statuses.ts:22](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/statuses.ts#L22)*
