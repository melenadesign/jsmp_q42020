import { AchievementStatus, ArchivedItemStatus, TaskStatus, StateChallenge } from './statuses';

/**
 * Task describes a single action
 * that should be done by the user.
 * For example: “Go for a 10 minutes run” or “Go to bed before 11:00 PM”
 */
export interface Task {
  id: number;
  description: string;
}

/**
 * Achievement describes a set of several tasks accomplished in the specific way.
 * For example:
 * “Complete each task 7 days in a row” or
 * “Complete 5 tasks before 8:00 AM”
 */
/**
 * @param checkComplete  Method can return an achievement status by tasks status.
 */
export interface Achievement extends Task {
  image: string;
  checkComplete(tasks: TaskStatus[]): AchievementStatus;
}

/**
 * Challenge describes a 30-days period,
 * during which randomly chosen 30 tasks and 5 achievements
 * are assigned for the user. Starting from the first day,
 * the user will receive a new task every day,
 * which should be completed before the midnight,
 * otherwise it will be marked as failed.
 * Achievements status is calculated based on tasks completion.
 * After 30 days the challenge could
 * be successful (>= 90% tasks completed)
 * or failed (<90% tasks completed)
 */
export interface Challenge {
  id: number;
  state: StateChallenge;
  startDate: Date;
  tasksOrder: Task[];
  tasksStatus: ActualTask[];
  achievementsStatus: AchievementStatus[];
}

/**
 * ArchiveItem extends Task
 * and describes a task and its status
 * for all past tasks in the challenge
 */
export interface ArchiveItem extends Task {
  status: ArchivedItemStatus;
}

/**
 * ActualTask extends Task
 * and provides information about a task and its current status
 * in scope of the challenge
 */
export interface ActualTask extends Task {
  status: TaskStatus;
}

/**
 * ActualAchievement extends Achievement
 * and provides information about an achievement
 * and its current status in scope of the challenge
 */
export interface ActualAchievement extends Achievement {
  status: AchievementStatus;
}
