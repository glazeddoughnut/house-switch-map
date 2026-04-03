import { breakers } from "./data/breakers.js";
import {
  getAllCircuits,
  getUnmappedCircuits,
  getTogglesForCircuit,
  getTogglesForBreaker,
} from "./data/dataUtils.js";

const breakerSearchInput = document.getElementById("breakerSearchInput");
const unmappedCount = document.getElementById("unmappedCount");
const unmappedContent = document.getElementById("unmappedContent");
const breakerCount = document.getElementById("breakerCount");
const breakersContent = document.getElementById("breakersContent");

let searchTerm = "";

function normalize(value) {
  return String(value || "").toLowerCase().trim();
}

function formatSlots(slots = []) {
  if (!slots.length) return "Unknown";
  return slots.join("-");
}

function formatPosition(position) {
  if (!position || position === "full") return "";
  return ` (${position})`;
}

function getBreakerDisplayName(breaker) {
  return `Breaker ${formatSlots(breaker.slots)}${formatPosition(breaker.position)}`;
}

function breakerMatchesSearch(breaker, term) {
  if (!term) return true;

  const breakerText = [
    breaker.label,
    breaker.notes,
    breaker.verified ? "verified" : "unverified",
    ...(breaker.circuits || []),
    ...(breaker.slots || []).map(String),
    breaker.position,
    breaker.amps == null ? "" : String(breaker.amps),
  ].join(" ");

  if (normalize(breakerText).includes(term)) return true;

  const toggles = getTogglesForBreakerObject(breaker);
  return toggles.some((toggle) =>
    normalize(
      [
        toggle.room,
        toggle.panelLabel,
        toggle.label,
        toggle.controls,
        toggle.details,
        toggle.circuit,
      ].join(" ")
    ).includes(term)
  );
}

function getTogglesForBreakerObject(breaker) {
  const circuits = breaker.circuits || [];
  return circuits.flatMap((circuit) => getTogglesForCircuit(circuit));
}

function renderUnmappedCircuits() {
  const allUnmapped = getUnmappedCircuits();
  const filtered = allUnmapped.filter((circuit) => {
    if (!searchTerm) return true;

    const toggles = getTogglesForCircuit(circuit);
    const searchable = [
      circuit,
      ...toggles.flatMap((toggle) => [
        toggle.room,
        toggle.panelLabel,
        toggle.label,
        toggle.controls,
        toggle.details,
      ]),
    ].join(" ");

    return normalize(searchable).includes(searchTerm);
  });

  unmappedCount.textContent = `${filtered.length}`;

  if (!filtered.length) {
    unmappedContent.innerHTML = `
      <div class="empty-state">
        ${searchTerm ? "No unmapped circuits matched your search." : "No unmapped circuits. Nice work."}
      </div>
    `;
    return;
  }

  unmappedContent.innerHTML = `
    <div class="breaker-list">
      ${filtered
        .map((circuit) => {
          const toggles = getTogglesForCircuit(circuit);

          return `
            <article class="breaker-card unmapped-breaker-card">
              <div class="breaker-card-header">
                <div>
                  <h3 class="breaker-title">${circuit}</h3>
                  <div class="breaker-meta">Not mapped to a breaker yet</div>
                </div>
              </div>

              <div class="breaker-section">
                <div class="breaker-section-title">Used by</div>
                <div class="breaker-affects-list">
                  ${toggles
                    .map(
                      (toggle) => `
                        <div class="breaker-affect-item">
                          <strong>${toggle.room}</strong> · ${toggle.panelLabel} · ${toggle.label}: ${toggle.controls}
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderBreakers() {
  const filteredBreakers = breakers.filter((breaker) =>
    breakerMatchesSearch(breaker, searchTerm)
  );

  breakerCount.textContent = `${filteredBreakers.length} shown`;

  if (!filteredBreakers.length) {
    breakersContent.innerHTML = `
      <div class="empty-state">No breakers matched your search.</div>
    `;
    return;
  }

  breakersContent.innerHTML = `
    <div class="breaker-list">
      ${filteredBreakers
        .map((breaker) => {
          const toggles = getTogglesForBreakerObject(breaker);
          const hasCircuits = (breaker.circuits || []).length > 0;
          const ampsText = breaker.amps == null ? "?" : breaker.amps;
          const verifiedText = breaker.verified ? "Verified" : "Unverified";

          return `
            <article class="breaker-card">
              <div class="breaker-card-header">
                <div>
                  <div class="breaker-kicker">${getBreakerDisplayName(breaker)}</div>
                  <h3 class="breaker-title">${breaker.label || "Unlabeled"}</h3>
                  <div class="breaker-meta">
                    ${ampsText}A · ${verifiedText}
                  </div>
                </div>
                <span class="breaker-status ${breaker.verified ? "verified" : "unverified"}">
                  ${verifiedText}
                </span>
              </div>

              ${
                breaker.notes
                  ? `
                  <div class="breaker-notes">${breaker.notes}</div>
                `
                  : ""
              }

              <div class="breaker-section">
                <div class="breaker-section-title">Circuits</div>
                ${
                  hasCircuits
                    ? `
                    <div class="breaker-chip-row">
                      ${breaker.circuits
                        .map((circuit) => `<span class="breaker-chip">${circuit}</span>`)
                        .join("")}
                    </div>
                  `
                    : `
                    <div class="breaker-empty">No mapped circuits yet.</div>
                  `
                }
              </div>

              <div class="breaker-section">
                <div class="breaker-section-title">Affects</div>
                ${
                  toggles.length
                    ? `
                    <div class="breaker-affects-list">
                      ${toggles
                        .map(
                          (toggle) => `
                            <div class="breaker-affect-item">
                              <strong>${toggle.room}</strong> · ${toggle.panelLabel} · ${toggle.label}: ${toggle.controls}
                            </div>
                          `
                        )
                        .join("")}
                    </div>
                  `
                    : `
                    <div class="breaker-empty">Nothing linked yet.</div>
                  `
                }
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function render() {
  renderUnmappedCircuits();
  renderBreakers();
}

breakerSearchInput.addEventListener("input", (event) => {
  searchTerm = normalize(event.target.value);
  render();
});

render();