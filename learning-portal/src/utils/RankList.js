export default function RankList(result) {
  result?.sort((a, b) => b.totalMark - a.totalMark);

  let rank = 1;
  for (let i = 0; i < result?.length; i++) {
    if (i > 0 && result[i].totalMark !== result[i - 1].totalMark) {
      rank++;
    }
    result[i].rank = rank;
  }
  return result;
}
