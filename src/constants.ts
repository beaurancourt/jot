import { CounterpartyBetProps } from "./components/CounterpartyBet";

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

type Leaderboard = { name: string; streak: number; points: number };

export const LEADERBOARD: Leaderboard[] = [
  { name: "abc", streak: 8, points: 10_000 },
];
