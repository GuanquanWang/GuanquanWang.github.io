import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("exports Guanquan Wang's bilingual research portfolio", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Guanquan Wang/);
  assert.match(html, /Shortcut Trajectory Planning/);
  assert.match(html, /生成モデル/);
  assert.match(html, /kitchen-stp\.mp4/);
  assert.match(html, /antmaze-stp\.mp4/);
  assert.doesNotMatch(html, /Decision Diffuser|decision-diffuser\.mp4/);
  assert.match(html, /Takuya Hiraoka, <b>Guanquan Wang<\/b>, Takashi Onishi, Yoshimasa Tsuruoka/);
  assert.doesNotMatch(html, /Guanquan Wang et al\. · RLJ \/ RLC/);
  assert.match(html, /guanquanwang\.github\.io\/og-simple\.png/);
  assert.doesNotMatch(html, /STP の主な評価結果|Selected STP evaluation results/);
  assert.doesNotMatch(html, /WANG_GUANQUAN|final_defense|codex-preview/);
});
