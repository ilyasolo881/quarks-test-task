export interface optionsListTypes {
  id: string;
  question: string;
  options: string[];
  emojis: string[];
}

export const optionsList: optionsListTypes[] = [
  {
    id: "1",
    question: "Which skill do you prefer?",
    options: [
      "Skill1_goal1",
      "Skill1_goal2",
      "Skill1_goal3",
      "Skill1_goal4",
      "Skill1_goal5",
    ],
    emojis: ["⚡", "🙌🏻", "🥹", "😌", "👍🏻"],
  },
  {
    id: "2",
    question: "Which goal do you want to achieve?",
    options: [
      "Skill2_goal1",
      "Skill2_goal2",
      "Skill2_goal3",
      "Skill2_goal4",
      "Skill2_goal5",
    ],
    emojis: ["⚡", "🙌🏻", "🥹", "😌", "👍🏻"],
  },
  {
    id: "3",
    question: "What's your favorite programming language?",
    options: [
      "Skill3_goal1",
      "Skill3_goal2",
      "Skill3_goal3",
      "Skill3_goal4",
      "Skill3_goal5",
    ],
    emojis: ["⚡", "🙌🏻", "🥹", "😌", "👍🏻"],
  },
];
