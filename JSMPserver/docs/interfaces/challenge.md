**[jsmp2020q4_be](../README.md)**

> [Globals](../globals.md) / Challenge

# Interface: Challenge

Challenge describes a 30-days period,
during which randomly chosen 30 tasks and 5 achievements
are assigned for the user. Starting from the first day,
the user will receive a new task every day,
which should be completed before the midnight,
otherwise it will be marked as failed.
Achievements status is calculated based on tasks completion.
After 30 days the challenge could
be successful (>= 90% tasks completed)
or failed (<90% tasks completed)

## Hierarchy

* **Challenge**

## Index

### Properties

* [achievementsStatus](challenge.md#achievementsstatus)
* [id](challenge.md#id)
* [startDate](challenge.md#startdate)
* [state](challenge.md#state)
* [tasksOrder](challenge.md#tasksorder)
* [tasksStatus](challenge.md#tasksstatus)

## Properties

### achievementsStatus

•  **achievementsStatus**: [AchievementStatus](achievementstatus.md)[]

*Defined in [interfaces.ts:45](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/interfaces.ts#L45)*

___

### id

•  **id**: number

*Defined in [interfaces.ts:40](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/interfaces.ts#L40)*

___

### startDate

•  **startDate**: Date

*Defined in [interfaces.ts:42](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/interfaces.ts#L42)*

___

### state

•  **state**: [StateChallenge](../enums/statechallenge.md)

*Defined in [interfaces.ts:41](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/interfaces.ts#L41)*

___

### tasksOrder

•  **tasksOrder**: [Task](task.md)[]

*Defined in [interfaces.ts:43](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/interfaces.ts#L43)*

___

### tasksStatus

•  **tasksStatus**: [ActualTask](actualtask.md)[]

*Defined in [interfaces.ts:44](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/interfaces.ts#L44)*
