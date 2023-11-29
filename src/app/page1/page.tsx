import { delay } from "~/utils/delay";
import Transition from "~/app/page1/Transition";

export default async function Page1() {
  await delay(1000);

  return (
    <div>
      <main style={{ width: "100px", height: "100px", backgroundColor: "red" }}>
        page1
        <a href="/page2">go page2</a>
      </main>

      <Transition />
    </div>
  );
}
