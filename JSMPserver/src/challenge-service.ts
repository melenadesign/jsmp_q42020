import {IChallengeService} from "./interfaces/challenge-service-interface";
import {ActualAchievement, ActualTask, ArchiveItem, Challenge, Task} from "./interfaces/interfaces";
import {AchievementStatus, ItemState, StateChallenge} from "./interfaces/statuses";
import {getChallenge, getChallengeDay} from "./util/utilities";
import {tasks} from './mockData/tasks.json';
import {achievements} from './mockData/achievements.json';

const actualTasksList: ActualTask[] = tasks.splice(0, 30)
    .map((item) => {
        return ({
            ...item, status: {state: ItemState.Pending, updated: new Date()}
        });
    });
export const actualAchievementsList: ActualAchievement[] = achievements.splice(0, 5)
    .map((item) => {
        return ({...item, status: {state: ItemState.Pending, updated: new Date()}})
    });
export let tasksOrder = [actualTasksList[6], actualTasksList[3], actualTasksList[2], actualTasksList[4], actualTasksList[0]];
export let tasksStatus = [actualTasksList[6].status, actualTasksList[3].status, actualTasksList[2].status, actualTasksList[4].status, actualTasksList[0].status];

export const achievementsStatus: Record<number, AchievementStatus>[] = actualAchievementsList.map((item) => {
        return ({[item.id]: item.status});
    });

export const challengesList: Challenge[] = [
    {id: 1, state: StateChallenge.InProgress, startDate: new Date('2020-12-22T13:35:10.473Z'),
        tasksOrder, tasksStatus, achievementsStatus}
];


export class ChallengeService implements IChallengeService {

    getCurrentTask(challengeId: number, challengesList: Challenge[]): ActualTask {
        try{
            const currentChallenge = getChallenge(challengeId, challengesList);
            const challengeDay = getChallengeDay(challengeId, challengesList);
            const currentActualTaskId = currentChallenge.tasksOrder[challengeDay-1].id;
            return (actualTasksList[currentActualTaskId-1]);
        } catch(e) {
            throw new Error("Task not found");
        }
    }
    getAchievements(challengeId: number, challengesList: Challenge[]): ActualAchievement[] {
        try{
            const currentChallenge = getChallenge(challengeId, challengesList);
            const challengeAchievementsIds = Array.from(currentChallenge.achievementsStatus.keys());
            console.log('challengeAchievementsIds', challengeAchievementsIds);
            let challengeAchievements: ActualAchievement[] = [];

            for(const id of challengeAchievementsIds) {
                let challengeAchievementItem = actualAchievementsList
                    .find((achieve) => (achieve.id === +id));
                // console.log('challengeAchievementItem', challengeAchievementItem);
                if(challengeAchievementItem) {
                    challengeAchievements.push({...challengeAchievementItem, ...currentChallenge.achievementsStatus[+id].status})
                }
            }
            console.log('challengeAchievements', challengeAchievements);
            return challengeAchievements;
        } catch(e) {
            throw new Error("Achievements not found.");
        }
    }
    getTaskArchive(challengeId: number, challengesList: Challenge[]): ArchiveItem[] {
        try{
            const currentChallenge = getChallenge(challengeId, challengesList);
            const challengeDay = getChallengeDay(challengeId, challengesList);
            console.log('challengeDay', challengeDay);
            const pastTasksList: ArchiveItem[] = tasksOrder
                .slice(0, challengeDay)
                .map((item, i) => {
                    let pastTaskStatus: any = {
                        status: { state: currentChallenge.tasksStatus[i].state, updated:currentChallenge.tasksStatus[i].updated} };
                    return ({...item, ...pastTaskStatus})
                });
            return pastTasksList;
        } catch(e) {
            throw new Error("Archive Task item not found.");
        }
    }
    startNewChallenge(tasksList: Task[], challengesList: Challenge[], challengeDuration?: number, achievementsNumber?: number): Challenge {
        try{
            const newChallenge: Challenge = {
                id: Date.now(),
                state: StateChallenge.InProgress,
                startDate: new Date(),
                tasksOrder,
                tasksStatus,
                achievementsStatus
            };
            return newChallenge;
        } catch(e) {
            throw new Error("Challenge was not created.");
        }
    }
    calculateAchievementsStatus(challengeId: number, achievementsList: ActualAchievement[], tasksStatus: ActualTask[]): Map<number, AchievementStatus>[] {
        try{
            const calculatedAchievementsStatus = new Map();
            const currentChallenge = getChallenge(challengeId, challengesList);
            const pastSuccesfulTasks: ArchiveItem[] = tasksOrder
                .map((item, i) => {
                    if(item.status.state === ItemState.Success) {
                    let pastTaskStatus: any = {
                        status: { state: currentChallenge.tasksStatus[i].state, updated:currentChallenge.tasksStatus[i].updated} };
                    return ({...item, ...pastTaskStatus})
                }}
                    );
            return calculatedAchievementsStatus;
        } catch(e) {
            throw new Error("Challenge was not created.");
        }
    };
}


// console.log('currentActualTaskfound', new ChallengeService().getCurrentTask(1, challengesList));
// console.log('getAchievements', new ChallengeService().getAchievements(1, challengesList));
// console.log('getAchievements', new ChallengeService().startNewChallenge(tasks, challengesList, 10, 3));