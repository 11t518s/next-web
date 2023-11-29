import { delay } from "~/utils/delay";

export default async function Page2() {
  await delay(3000);
  // const transition = () => {};

  return (
    <main style={{ width: "100px", height: "100px", backgroundColor: "red" }}>
      start next 14
      <a href="/page1">go page1</a>
    </main>
  );
}
