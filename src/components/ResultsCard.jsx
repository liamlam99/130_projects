import { fmtUSD, fmtINT } from "../utils/calc";

export default function ResultsCard({ results, note }) {
  const {
    setupCost = 0,
    annualVolumeM3 = 0,
    revenue = 0,
    roiPct = 0,
  } = results || {};
  return (
    <aside id="results" className="card">
      <h4>Results</h4>
      <dl className="results">
        <div>
          <dt>Setup cost</dt>
          <dd id="rSetup">{fmtUSD(setupCost)}</dd>
        </div>
        <div>
          <dt>Estimated recharge volume / year</dt>
          <dd id="rVolume">{fmtINT(annualVolumeM3)} m³</dd>
        </div>
        <div>
          <dt>Estimated revenue over period</dt>
          <dd id="rRevenue">{fmtUSD(revenue)}</dd>
        </div>
        <div>
          <dt>ROI (%)</dt>
          <dd id="rRoi">{roiPct.toFixed(1)}%</dd>
        </div>
      </dl>
      <p id="resultNote" className="note" aria-live="polite">
        {note}
      </p>
    </aside>
  );
}
