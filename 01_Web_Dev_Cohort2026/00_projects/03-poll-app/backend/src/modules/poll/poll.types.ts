export interface CreatePollInput {
  question: string;
}

export interface PollOption {
  id: string;
  text: string;
  pollId: string;
}

export interface PollResponse {
  id: string;
  question: string;
  createdAt: Date;
}

export interface PollWithOptionsResponse extends PollResponse {
  options: PollOption[];
}