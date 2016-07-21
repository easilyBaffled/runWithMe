const RECEIVE_CHALLENGE = 'RECEIVE_CHALLENGE';

export function reveiveChallenge(challengeData) {
  return {
    type: RECEIVE_CHALLENGE,
    challengeData
  };
}
