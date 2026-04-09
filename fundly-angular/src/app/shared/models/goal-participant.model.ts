import { GoalRole } from "@shared/enums/goal.enums";

export interface GoalParticipant{
    userId: string;
    role: GoalRole;
}