import {ActualTask, ActualAchievement, ArchiveItem, Task, Challenge} from './interfaces';
import { AchievementStatus } from './statuses';

/**
 * IChallengeService describes available methods of Challenge service
 */
export interface IChallengeService {
    /**
     * getCurrentTask returns a current task with its status
     * by the challenge id
     */
    getCurrentTask(challengeId: number, challengesList: Challenge[]): ActualTask;

    /**
     * getAchievements returns a list of actual achievements by the challenge id
     */
    getAchievements(challengeId: number, challengesList: Challenge[]): ActualAchievement[];

    /**
     * getTaskArchive returns all past tasks with their results by the challenge id
     */
    getTaskArchive(challengeId: number, challengesList: Challenge[]): ArchiveItem[];

    /**
     * startNewChallenge returns a new challenge using the following parameters:
     * a list of tasks,
     * a list of challenges,
     * challenge duration that by default should be 30 days,
     * number of achievements – by default, challenge duration / 6
     */
    startNewChallenge(
        tasksList: Task[],
        challengesList: Challenge[],
        challengeDuration?: number,
        achievementsNumber?: number
    ): Challenge;

    /**
     * calculateAchievementsStatus returns achievements status for the challenge
     * by its achievements list and tasks status
     */
    calculateAchievementsStatus(challengeId: number, achievementsList: ActualAchievement[], tasksStatus: ActualTask[]): Map<number, AchievementStatus>[];
}
