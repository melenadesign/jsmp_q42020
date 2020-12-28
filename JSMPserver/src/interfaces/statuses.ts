export enum ItemState {
  Pending = 'Pending',
  Success = 'Success',
  Failure = 'Failure'
}

export type ArchivedItemState = ItemState.Success | ItemState.Failure;

export enum StateChallenge {
  InProgress = 'In Progress',
  Success = 'Success',
  Failure = 'Failure'
}

/**
 * Status describes a state of some item
 * (a task or an achievement) and a timestamp, when this state was updated
 * available states are: Pending, Success, Failure)
 */
export interface Status {
  state: ItemState | ArchivedItemState;
  updated: Date;
}

/**
 * TaskStatus describes a state of a task and a timestamp, when this state was updated
 * available states are: Pending, Success, Failure)
 */
export interface TaskStatus extends Status {
  state: ItemState;
}

/**
 * ArchivedItemStatus describes a state of an archived item task and a timestamp, when this state was updated
 * available states are: Success, Failure)
 */
export interface ArchivedItemStatus extends Status {
  state: ArchivedItemState;
}

/**
 * AchievementStatus describes a state of an achievement and a timestamp, when this state was updated
 * available states are: Pending, Success, Failure)
 */
export interface AchievementStatus extends Status {
  state: ItemState;
}
