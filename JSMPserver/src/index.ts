export default function greetWorld(str = 'Hello, world!'): string {
  const greeting: string = str;
  console.log(greeting);
  return greeting;
}

import { ChallengeService } from "./challenge-service";
export { ChallengeService };