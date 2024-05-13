import NumberTicker from "@/components/ui/magicui/number-ticker";

const rathYatraDate = "7.7.2024";

const daysLeft = () => {
  const today = new Date();
  const rathYatra = new Date(rathYatraDate);
  const diff = rathYatra.getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

const RathYatraPage = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold">
          Days until Rath Yatra
        </h1>
        <NumberTicker
          value={daysLeft()}
          className="text-4xl lg:text-8xl font-bold"
        />
      </div>
    </main>
  );
};

export default RathYatraPage;
