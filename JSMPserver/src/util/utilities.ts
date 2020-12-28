import {Challenge, Task} from "../interfaces/interfaces";

// export async function getAllItems<T>(
//     request: RequestInfo
// ): Promise<T> {
//     const response = await fetch(request);
//     const body = await response.json();
//     return body;
// }

export function getChallenge(id: number, itemsArray: Challenge[]): Challenge {
    try {
        return <Challenge>itemsArray.find((item) => item.id === id);
    } catch (e) {
        throw new Error("No challenge found by this id");
    }
};

export function getChallengeDay(challengeId: number, itemsArray: Challenge[]): number {
    try {
        const currentDate = new Date().getDate();
        const challengeStartDate = getChallenge(challengeId, itemsArray).startDate.getDate();
        const challengeDay = currentDate  - challengeStartDate;
        return challengeDay;
    } catch (e) {
        throw new Error("No challenge found by this id");
    }
};
