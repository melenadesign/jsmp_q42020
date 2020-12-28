import {actualAchievementsList, ChallengeService, challengesList, tasksOrder, tasksStatus, achievementsStatus} from "./challenge-service";
import {Challenge, Task} from "./interfaces/interfaces";
import {StateChallenge} from "./interfaces/statuses";

const challengesListTest = {...challengesList};
challengesListTest[0].startDate = new Date();
let challengesListTestNew = {...challengesListTest};
let getCurrentTask = new ChallengeService().getCurrentTask;
// getCurrentTask = jest.fn();
let getAchievements = new ChallengeService().getAchievements;
// getAchievements = jest.fn();
let getTaskArchive = new ChallengeService().getTaskArchive;
// getTaskArchive = jest.fn();
let startNewChallenge = new ChallengeService().startNewChallenge;
startNewChallenge = jest.fn();
let calculateAchievementsStatus = new ChallengeService().calculateAchievementsStatus;
calculateAchievementsStatus = jest.fn();

describe("ChallengeService.getCurrentTask", () => {
    beforeEach(() => {

    });
    it("ChallengeService should have getCurrentTask",() => {
        expect(typeof getCurrentTask).toBe("function");
    });
    it("should call getCurrentTask",() => {
        expect(getCurrentTask).toHaveBeenCalled();
    });
    it("should return currentTask",() => {
        let actualTask = getCurrentTask(1, challengesListTest);
        let expectedTask = tasksOrder[0];
        expect(actualTask).toEqual(expectedTask);
    });
});

describe("ChallengeService.getAchievements", () => {
    beforeEach(() => {

    });
    it("ChallengeService should have getAchievements",() => {
        expect(typeof getAchievements).toBe("function");
    });
    it("should call getAchievements",() => {
        expect(getAchievements).toHaveBeenCalled();
    });
    it("should return current achievements",() => {
        let actualAchievement = getAchievements(1, challengesListTest);
        let expectedAchievement = actualAchievementsList[0];
        expect(actualAchievement).toEqual(expectedAchievement);
    });
});

describe("ChallengeService.getTaskArchive", () => {
    beforeEach(() => {

    });
    it("ChallengeService should have getTaskArchive",() => {
        expect(typeof getTaskArchive).toBe("function");
    });
    it("should call getTaskArchive",() => {
        expect(getTaskArchive).toHaveBeenCalled();
    });
    it("should return current Archive Task",() => {
        let actualTask = getTaskArchive(1, challengesListTest);
        let expectedTask = tasksOrder[0];
        expect(actualTask).toEqual(expectedTask);
    });
});

describe("ChallengeService.startNewChallenge", () => {
    beforeEach(() => {
    });
    it("ChallengeService should have startNewChallenge",() => {
        expect(typeof startNewChallenge).toBe("function");
    });
    it("should call startNewChallenge",() => {
        expect(startNewChallenge).toHaveBeenCalled();
    });
    it("should return new Challenge",() => {

        let actualChallenge = startNewChallenge(tasksOrder.slice(3), challengesListTestNew, 3, 2);
        let expectedChallenge = {
            ...challengesListTestNew[1]
        };
        expect(actualChallenge).toEqual(expectedChallenge);
    });
});


describe("ChallengeService.calculateAchievementsStatus", () => {
    beforeEach(() => {
    });
    it("ChallengeService should have calculateAchievementsStatus",() => {
        expect(typeof calculateAchievementsStatus).toBe("function");
    });
    it("should call calculateAchievementsStatus",() => {
        expect(calculateAchievementsStatus).toHaveBeenCalled();
    });
    it("should return calculate Achievements Status",() => {
        let actualAchievementsStatus = calculateAchievementsStatus(1, actualAchievementsList, tasksStatus);
        let expectedAchievementsStatus = {
            ...challengesListTestNew[1]
        };
        expect(actualAchievementsStatus).toEqual(expectedAchievementsStatus);
    })
});