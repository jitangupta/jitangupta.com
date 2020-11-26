export const PeopleLikeToMeetList: PeopleLikeToMeet[] = [
  { haveMet: false, name: 'Sandeep Maheshwari', url: 'https://twitter.com/SandeepSeminars', background: 'life-coach' },
  { haveMet: false, name: 'Tony Robbins', url: 'https://twitter.com/TonyRobbins', background: 'life-coach' },
  { haveMet: false, name: 'John Papa', url: 'https://twitter.com/John_Papa', background: 'influencer' },
  { haveMet: false, name: 'Tahzeeb Hafi', url: 'https://twitter.com/hafi_tahzeeb', background: 'poet' },
  { haveMet: false, name: 'Gary Vaynerchuk', url: 'https://twitter.com/garyvee', background: 'entrepreure' },
  { haveMet: true, name: 'Nirav Hiignu', url: 'https://twitter.com/hingunirav', background: 'influencer' },
  { haveMet: true, name: 'Kunal Shah', url: 'https://twitter.com/kunalb11', background: 'entrepreure' },
  { haveMet: true, name: 'Kunal soni', url: 'https://twitter.com/John_Papa', background: 'influencer' },
];

export class PeopleLikeToMeet {
  haveMet: boolean;
  name: string;
  url: string;
  background: backgrounds;
}

export type backgrounds = 'poet' | 'life-coach' | 'entrepreure' | 'influencer';
