import MainLayout from "./layout/mainLayout";

import BrandLogo from "./components/brandLogo";
import Pharagraph from "./components/pharagraph";
import CountDown from "./components/countDown";

function App() {
  return (
    <MainLayout>
      <BrandLogo />
      <Pharagraph />
      <CountDown targetDate="2025-08-01T00:00:00" />
    </MainLayout>
  )
}

export default App;