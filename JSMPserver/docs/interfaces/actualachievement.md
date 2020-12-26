**[jsmp2020q4_be](../README.md)**

> [Globals](../globals.md) / ActualAchievement

# Interface: ActualAchievement

ActualAchievement extends Achievement
and provides information about an achievement
and its current status in scope of the challenge

## Hierarchy

* [Achievement](achievement.md)

  ↳ **ActualAchievement**

## Index

### Properties

* [description](actualachievement.md#description)
* [id](actualachievement.md#id)
* [image](actualachievement.md#image)
* [status](actualachievement.md#status)

### Methods

* [checkComplete](actualachievement.md#checkcomplete)

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

*Inherited from [Achievement](achievement.md).[image](achievement.md#image)*

*Defined in [interfaces.ts:23](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/interfaces.ts#L23)*

___

### status

•  **status**: [AchievementStatus](achievementstatus.md)

*Defined in [interfaces.ts:72](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/interfaces.ts#L72)*

## Methods

### checkComplete

▸ **checkComplete**(`tasks`: [TaskStatus](taskstatus.md)[]): [AchievementStatus](achievementstatus.md)

*Inherited from [Achievement](achievement.md).[checkComplete](achievement.md#checkcomplete)*

*Defined in [interfaces.ts:24](https://github.com/melenadesign/jsmp_q42020/blob/7c047bb/JSMPserver/src/interfaces.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`tasks` | [TaskStatus](taskstatus.md)[] |

**Returns:** [AchievementStatus](achievementstatus.md)
