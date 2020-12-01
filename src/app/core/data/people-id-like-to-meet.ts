export const PEOPLE_LIKE_TO_MEET: PeopleLikeToMeet[] = [
  { haveMet: false, name: 'Sandeep Maheshwari', url: 'https://twitter.com/SandeepSeminars', background: 'life-coach' },
  { haveMet: false, name: 'Tony Robbins', url: 'https://twitter.com/TonyRobbins', background: 'life-coach' },
  { haveMet: false, name: 'John Papa', url: 'https://twitter.com/John_Papa', background: 'influencer' },
  { haveMet: false, name: 'Tahzeeb Hafi', url: 'https://twitter.com/hafi_tahzeeb', background: 'poet' },
  { haveMet: false, name: 'Gary Vaynerchuk', url: 'https://twitter.com/garyvee', background: 'entrepreure' },
  { haveMet: false, name: 'Simon Sinek', url: 'https://twitter.com/simonsinek', background: 'influencer' },
  { haveMet: true, name: 'Nirav Hiingu', url: 'https://twitter.com/hingunirav', background: 'influencer' },
  { haveMet: true, name: 'Kunal Shah', url: 'https://twitter.com/kunalb11', background: 'entrepreure' },
  { haveMet: true, name: 'Kunal soni', url: 'https://twitter.com/Kunalbsoni', background: 'influencer' },
];

export class PeopleLikeToMeet {
  haveMet: boolean;
  name: string;
  url: string;
  background: backgrounds;
}

export type backgrounds = 'poet' | 'life-coach' | 'entrepreure' | 'influencer';
