import GameResultsStatus from "../components/pages/gameresults/GameResultsStatus";
import { TabsItems, TabItem } from "../components/tabs";
const GameResults = () => {
  const events = [{}];
  return (
    <TabsItems className="flex-grow overflow-auto scrollbar">
      <TabItem defaultTab tab="today">
        {[...Array(20)].map((ar, i) => (
          <GameResultsStatus key={i} />
        ))}
        <GameResultsStatus />
      </TabItem>
      <TabItem tab="yesterday">Yesterday</TabItem>
      <TabItem tab="daybefore">Day Before</TabItem>
    </TabsItems>
  );
};

export default GameResults;
