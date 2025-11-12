//Just a place holder for the real formular in phase 2, I get this from chatGPT to generate the formular for me because ican't find one @@
//todo: Still need to working on validation of data for input.
export function placeholderRoiCalc({
  acreage,
  soil,
  depthM,
  costPerAcre,
  waterPriceK,
  years,
}) {
  const infil = soil === "sandy" ? 1.0 : soil === "loam" ? 0.7 : 0.4;
  const annualVolumeM3 = acreage * 4046.86 * depthM * infil;
  const setupCost = acreage * costPerAcre;
  const revenue = (annualVolumeM3 / 1000) * waterPriceK * years;
  const roiPct = setupCost > 0 ? ((revenue - setupCost) / setupCost) * 100 : 0;
  return { annualVolumeM3, setupCost, revenue, roiPct };
}

export const fmtUSD = (n) =>
  n.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

//This line to format the result after calculation and display with styles.
export const fmtINT = (n) =>
  n.toLocaleString(undefined, { maximumFractionDigits: 0 });
