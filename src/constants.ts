import { CounterpartyBetProps } from "./components/CounterpartyBet";
import { LeaderboardItemProps } from "./components/LeaderboardItem";

export const POINTS = 20_127;

export const COUNTERPARTY_BETS: CounterpartyBetProps[] = [
  { name: "abc", commitment: 30_000, bet: 10_000 },
  { name: "def", commitment: 21_500, bet: 6_200 },
  { name: "ghi", commitment: 70_000, bet: 1_900 },
];

export const BETS_AGAINST: Omit<CounterpartyBetProps, "commitment">[] = [
  {
    name: "abc",
    bet: 4_000,
  },
  {
    name: "xyz",
    bet: 11_000,
  },
];

type AvailableBet = CounterpartyBetProps & { streak: (boolean | null)[] };

export const AVAILABLE_BETS: AvailableBet[] = [
  {
    name: "abc",
    commitment: 30_000,
    bet: 10_000,
    streak: [true, true, false, true, true],
  },
  {
    name: "xyz",
    commitment: 21_000,
    bet: 15_000,
    streak: [true, false, false, true, false],
  },
  {
    name: "yolo",
    commitment: 81_000,
    bet: 41_000,
    streak: [true, true, true, true, true],
  },
];

export const LEADERBOARD: LeaderboardItemProps[] = [
  { name: "abc", streak: 8, points: 10_000 },
  { name: "xyz", streak: 4, points: 9_000 },
  { name: "test", streak: 3, points: 8_500 },
  { name: "test2", streak: 11, points: 8_400 },
  { name: "xyzyz", streak: 2, points: 7_100 },
  { name: "uwa", streak: 2, points: 7_000 },
  { name: "yes", streak: 1, points: 7_000 },
  { name: "bet", streak: 4, points: 6_700 },
  { name: "ghi", streak: 5, points: 6_600 },
  { name: "jkl", streak: 5, points: 6_500 },
  { name: "love", streak: 6, points: 5_900 },
  { name: "bar", streak: 2, points: 5_400 },
];
