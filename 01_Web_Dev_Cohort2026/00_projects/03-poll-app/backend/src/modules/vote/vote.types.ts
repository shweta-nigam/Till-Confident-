
export interface CreateVoteInput {
  optionId: string;
  userId: string;

}

export interface VoteResponse {
  id: string;
  optionId: string;
  createdAt: Date;
}