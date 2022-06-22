import "./style.css";

const fp1 = () => new Promise((resolve) => setTimeout(() => resolve(42), 2500));
const fp2 = () => new Promise((resolve) => setTimeout(() => resolve(12), 2000));

async function concurrent() {
  try {
    const p1 = fp1();
    const p2 = fp2();
    const val1 = await p1;
    afficherLeResultat("p1", val1, true);
    const val2 = await p2;
    afficherLeResultat("p2", val2, true);
    toggleLoader();
    clearTimer();
  } catch (err) {}
}
concurrent();
