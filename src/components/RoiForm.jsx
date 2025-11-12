import { useState } from "react";

export default function RoiForm({ onCalculate, onReset }) {
  const [form, setForm] = useState({
    acreage: "",
    soil: "",
    depthM: "",
    costPerAcre: "",
    waterPriceK: "",
    years: "10",
  });
  const [error, setError] = useState("");

  function update(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function submit(e) {
    e.preventDefault();
    const { acreage, soil, depthM, costPerAcre, waterPriceK, years } = form;
    const nums = [acreage, depthM, costPerAcre, waterPriceK, years].map(
      parseFloat
    );
    if (nums.some((v) => Number.isNaN(v)) || !soil) {
      setError("Please complete all fields.");
      return;
    }
    setError("");
    onCalculate({
      acreage: parseFloat(acreage),
      soil,
      depthM: parseFloat(depthM),
      costPerAcre: parseFloat(costPerAcre),
      waterPriceK: parseFloat(waterPriceK),
      years: parseInt(years, 10),
    });
  }

  function reset() {
    setForm({
      acreage: "",
      soil: "",
      depthM: "",
      costPerAcre: "",
      waterPriceK: "",
      years: "10",
    });
    setError("");
    onReset?.();
  }

  return (
    <form className="form" onSubmit={submit} onReset={reset} noValidate>
      <div className="form__row">
        <label htmlFor="acreage">Acreage (acres)</label>
        <input
          id="acreage"
          name="acreage"
          type="number"
          step="0.01"
          min="0"
          value={form.acreage}
          onChange={update}
          required
        />
      </div>

      <div className="form__row">
        <label htmlFor="soil">Soil type</label>
        <select
          id="soil"
          name="soil"
          value={form.soil}
          onChange={update}
          required
        >
          <option value="">Select…</option>
          <option value="sandy">Sandy (higher infiltration)</option>
          <option value="loam">Loam (medium infiltration)</option>
          <option value="clay">Clay (lower infiltration)</option>
        </select>
      </div>

      <div className="form__row">
        <label htmlFor="depthM">Planned basin depth (meters)</label>
        <input
          id="depthM"
          name="depthM"
          type="number"
          step="0.1"
          min="0"
          value={form.depthM}
          onChange={update}
          required
        />
      </div>

      <div className="form__row">
        <label htmlFor="costPerAcre">Setup cost per acre ($/acre)</label>
        <input
          id="costPerAcre"
          name="costPerAcre"
          type="number"
          step="1"
          min="0"
          value={form.costPerAcre}
          onChange={update}
          required
        />
      </div>

      <div className="form__row">
        <label htmlFor="waterPriceK">
          Water value (placeholder, $/1000 m³)
        </label>
        <input
          id="waterPriceK"
          name="waterPriceK"
          type="number"
          step="1"
          min="0"
          value={form.waterPriceK}
          onChange={update}
          required
        />
      </div>

      <div className="form__row">
        <label htmlFor="years">Time horizon (years)</label>
        <input
          id="years"
          name="years"
          type="number"
          min="1"
          step="1"
          value={form.years}
          onChange={update}
          required
        />
      </div>

      <div className="form__actions">
        <button className="btn btn--primary" type="submit">
          Calculate
        </button>
        <button className="btn btn--ghost" type="reset">
          Reset
        </button>
      </div>

      <p className="form__hint">
        Placeholder math for lab use. Real formulas will be added in Phase 2
        from CWI’s spreadsheet.
      </p>
      {error && (
        <p className="note" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
