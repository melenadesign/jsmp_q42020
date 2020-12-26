**[jsmp2020q4_be](../README.md)**

> [Globals](../globals.md) / Achievement

# Interface: Achievement

**`param`** Method can return an achievement status by tasks status.

## Hierarchy

* [Task](task.md)

  ↳ **Achievement**

  ↳↳ [ActualAchievement](actualachievement.md)

## Index

### Properties

* [description](achievement.md#description)
* [id](achievement.md#id)
* [image](achievement.md#image)

### Methods

* [checkComplete](achievement.md#checkcomplete)

## Properties

### description

•  **description**: string

*Inherited from [Task](task.md).[description](task.md#description)*

*Defined in [interfaces.ts:10](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/interfaces.ts#L10)*

___

### id

•  **id**: number

*Inherited from [Task](task.md).[id](task.md#id)*

*Defined in [interfaces.ts:9](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/interfaces.ts#L9)*

___

### image

•  **image**: string

*Defined in [interfaces.ts:23](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/interfaces.ts#L23)*

## Methods

### checkComplete

▸ **checkComplete**(`tasks`: [TaskStatus](taskstatus.md)[]): [AchievementStatus](achievementstatus.md)

*Defined in [interfaces.ts:24](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/interfaces.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`tasks` | [TaskStatus](taskstatus.md)[] |

**Returns:** [AchievementStatus](achievementstatus.md)
