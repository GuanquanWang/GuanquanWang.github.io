import Image from "next/image";

const ExternalArrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <div className="site-shell">
      <input
        className="language-checkbox"
        id="language-toggle"
        type="checkbox"
        aria-label="日本語と英語を切り替える / Switch between Japanese and English"
      />

      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Guanquan Wang — top">
          <span className="wordmark-mark">GW</span>
          <span className="wordmark-copy">ROBOT LEARNING</span>
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#research">
            <span className="nav-jp">研究</span>
            <span className="nav-en">Research</span>
          </a>
          <a href="#experiments">
            <span className="nav-jp">実験</span>
            <span className="nav-en">Experiments</span>
          </a>
          <a href="#publications">
            <span className="nav-jp">論文</span>
            <span className="nav-en">Publications</span>
          </a>
          <a href="#profile">
            <span className="nav-jp">経歴</span>
            <span className="nav-en">Profile</span>
          </a>
        </nav>

        <label className="language-switch" htmlFor="language-toggle">
          <span className="switch-jp">JP</span>
          <span className="switch-en">EN</span>
        </label>
      </header>

      <main className="page" id="top">
        <section className="hero section-frame" aria-labelledby="hero-title-jp">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              <span className="lang jp">2026年秋より、日本での研究開発職を希望</span>
              <span className="lang en">OPEN TO R&amp;D ROLES IN JAPAN · AUTUMN 2026</span>
            </div>

            <div className="hero-kicker">GUANQUAN WANG / 王 冠全</div>

            <h1 id="hero-title-jp" className="hero-title">
              <span className="lang jp">
                生成モデルで、
                <br />
                ロボットの
                <br />
                <em>「次の一手」</em>を速くする。
              </span>
              <span className="lang en">
                Making a robot’s
                <br />
                <em>next move</em>
                <br />
                faster.
              </span>
            </h1>

            <div className="hero-summary">
              <p className="lang jp">
                東京大学 博士後期課程。強化学習・生成モデル・モデルベース制御を統合し、
                長期的な行動計画をより高速で安定にするアルゴリズムを研究しています。
              </p>
              <p className="lang en">
                Ph.D. candidate at the University of Tokyo researching fast,
                reliable long-horizon planning at the intersection of reinforcement
                learning, generative models, and model-based control.
              </p>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                <span className="nav-jp">研究を見る</span>
                <span className="nav-en">Explore research</span>
                <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-ghost" href="mailto:james23sh@gmail.com">
                <span className="nav-jp">メールを送る</span>
                <span className="nav-en">Email me</span>
                <ExternalArrow />
              </a>
            </div>

            <ul className="hero-tags" aria-label="Research areas">
              <li>ROBOT LEARNING</li>
              <li>OFFLINE RL</li>
              <li>EMBODIED AI</li>
              <li>VLA</li>
            </ul>
          </div>

          <aside className="portrait-panel" aria-label="Researcher portrait and profile">
            <div className="portrait-index">RESEARCHER / 01</div>
            <div className="portrait-frame">
              <Image
                src="/wang-guanquan.jpg"
                alt="Guanquan Wang"
                width="1120"
                height="1500"
                priority
                unoptimized
              />
            </div>
            <div className="portrait-meta">
              <div>
                <span>BASED IN</span>
                <strong>TOKYO, JAPAN</strong>
              </div>
              <div>
                <span>LANGUAGES</span>
                <strong>ZH · EN · JP (N2)</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="signal-strip" aria-label="Research highlights">
          <div className="signal-item">
            <strong>12×</strong>
            <span className="lang jp">拡散プランニング比の推論高速化</span>
            <span className="lang en">faster inference than diffusion planning</span>
          </div>
          <div className="signal-item">
            <strong>2</strong>
            <span className="lang jp">TMLR 採択論文</span>
            <span className="lang en">papers accepted by TMLR</span>
          </div>
          <div className="signal-item">
            <strong>3</strong>
            <span className="lang jp">生成式プランナー CP · CTP · STP</span>
            <span className="lang en">generative planners: CP · CTP · STP</span>
          </div>
        </section>

        <section className="research-section section-frame" id="research">
          <header className="section-heading">
            <span className="section-number">01</span>
            <div>
              <p className="section-eyebrow">RESEARCH / 研究</p>
              <h2>
                <span className="lang jp">高速な生成式軌道計画</span>
                <span className="lang en">Fast generative trajectory planning</span>
              </h2>
            </div>
          </header>

          <div className="research-intro">
            <p className="lang jp">
              拡散モデルは多様で高品質な軌道を生成できますが、反復的なノイズ除去に時間がかかります。
              私の研究は、長期計画の表現力を保ちながら、推論速度・計画品質・学習の簡潔さを段階的に改善します。
            </p>
            <p className="lang en">
              Diffusion models generate diverse, high-quality trajectories, but iterative
              denoising is expensive. My work preserves their long-horizon expressivity
              while progressively improving inference speed, plan quality, and training simplicity.
            </p>
          </div>

          <div className="method-sequence">
            <article className="method-card method-cp">
              <div className="method-topline">
                <span>01</span>
                <span>TMLR 2024</span>
              </div>
              <h3>Consistency<br />Planning</h3>
              <p className="method-code">CP / FAST DISTILLATION</p>
              <div className="lang jp method-description">
                反復的な拡散サンプリングを、少数ステップの整合性モデルへ蒸留。
                性能を保ちながら推論を最大12倍高速化しました。
              </div>
              <div className="lang en method-description">
                Distills iterative diffusion sampling into a few consistency-model steps,
                delivering up to 12× faster inference without sacrificing performance.
              </div>
              <a href="https://openreview.net/forum?id=TuACCzfty3" target="_blank" rel="noreferrer">
                PAPER <ExternalArrow />
              </a>
            </article>

            <div className="method-arrow" aria-hidden="true">→</div>

            <article className="method-card method-ctp">
              <div className="method-topline">
                <span>02</span>
                <span>TMLR 2026</span>
              </div>
              <h3>Consistency<br />Trajectory Planning</h3>
              <p className="method-code">CTP / FLEXIBLE SAMPLING</p>
              <div className="lang jp method-description">
                任意のノイズレベル間を直接移動する軌道モデルと critic による候補選択で、
                長期・ゴール条件付きタスクの計画品質を向上させました。
              </div>
              <div className="lang en method-description">
                Adds anytime-to-anytime trajectory transitions and critic-based candidate
                selection to improve long-horizon, goal-conditioned planning.
              </div>
              <a href="https://openreview.net/forum?id=RVGkT9ISVf" target="_blank" rel="noreferrer">
                PAPER <ExternalArrow />
              </a>
            </article>

            <div className="method-arrow" aria-hidden="true">→</div>

            <article className="method-card method-stp">
              <div className="method-topline">
                <span>03</span>
                <span>UNDER REVIEW</span>
              </div>
              <h3>Shortcut<br />Trajectory Planning</h3>
              <p className="method-code">STP / PRACTICAL PLANNING</p>
              <div className="lang jp method-description">
                単一段階の学習、warm-start、実行可能性を考慮した候補選択を統合。
                高速性と現実的な軌道の両立を目指す最新手法です。
              </div>
              <div className="lang en method-description">
                Unifies single-stage training, warm starts, and feasibility-aware
                selection for fast planning with more realistic trajectories.
              </div>
              <span className="paper-status">
                <span className="nav-jp">TMLR 査読中</span>
                <span className="nav-en">TMLR submission</span>
              </span>
            </article>
          </div>

          <div className="results-panel">
            <div className="results-copy">
              <p className="section-eyebrow">SELECTED D4RL RESULTS</p>
              <h3>
                <span className="lang jp">長期計画ほど、強みが見える。</span>
                <span className="lang en">The advantage grows with the horizon.</span>
              </h3>
              <p className="lang jp">
                STP は特に、将来の軌道構造が重要な疎報酬・ゴール条件付きタスクで高い性能を示しました。
              </p>
              <p className="lang en">
                STP is strongest when future trajectory structure matters: sparse-reward,
                goal-conditioned, and multi-stage tasks.
              </p>
            </div>
            <div className="result-grid">
              <div className="result-cell">
                <span>MAZE</span>
                <strong>183.8</strong>
                <small>AVERAGE SCORE</small>
              </div>
              <div className="result-cell">
                <span>KITCHEN</span>
                <strong>83.6</strong>
                <small>MULTI-STAGE</small>
              </div>
              <div className="result-cell">
                <span>ANTMAZE</span>
                <strong>85.3</strong>
                <small>QUADRUPED</small>
              </div>
              <div className="result-cell">
                <span>ADROIT</span>
                <strong>114.3</strong>
                <small>DEXTEROUS HAND</small>
              </div>
            </div>
          </div>
        </section>

        <section className="experiments-section" id="experiments">
          <div className="experiments-inner">
            <header className="experiments-heading">
              <div>
                <p className="section-eyebrow">02 / EXPERIMENTS</p>
                <h2>
                  <span className="lang jp">動きで見る、研究成果。</span>
                  <span className="lang en">Research, seen in motion.</span>
                </h2>
              </div>
              <p className="lang jp">
                同じ初期条件で、提案手法と拡散ベースラインの挙動を比較できます。
              </p>
              <p className="lang en">
                Compare the proposed planner and a diffusion baseline from matched starting conditions.
              </p>
            </header>

            <article className="video-study">
              <div className="video-study-title">
                <span className="study-index">A</span>
                <div>
                  <h3>KITCHEN / MULTI-STAGE MANIPULATION</h3>
                  <p className="lang jp">複数の物体操作を連続して完了する長期タスク</p>
                  <p className="lang en">A long-horizon sequence of object-manipulation subtasks</p>
                </div>
              </div>
              <div className="video-comparison">
                <figure>
                  <figcaption><span className="ours-dot" /> STP · OURS</figcaption>
                  <video controls muted loop playsInline preload="metadata">
                    <source src="/media/kitchen-stp.mp4" type="video/mp4" />
                  </video>
                </figure>
                <figure>
                  <figcaption>DECISION DIFFUSER · BASELINE</figcaption>
                  <video controls muted loop playsInline preload="metadata">
                    <source src="/media/kitchen-decision-diffuser.mp4" type="video/mp4" />
                  </video>
                </figure>
              </div>
            </article>

            <article className="video-study">
              <div className="video-study-title">
                <span className="study-index">B</span>
                <div>
                  <h3>ANTMAZE / LONG-HORIZON NAVIGATION</h3>
                  <p className="lang jp">高次元な四足歩行ロボットによる迷路探索</p>
                  <p className="lang en">Maze navigation with a high-dimensional quadruped robot</p>
                </div>
              </div>
              <div className="video-comparison">
                <figure>
                  <figcaption><span className="ours-dot" /> STP · OURS</figcaption>
                  <video controls muted loop playsInline preload="metadata">
                    <source src="/media/antmaze-stp.mp4" type="video/mp4" />
                  </video>
                </figure>
                <figure>
                  <figcaption>DECISION DIFFUSER · BASELINE</figcaption>
                  <video controls muted loop playsInline preload="metadata">
                    <source src="/media/antmaze-decision-diffuser.mp4" type="video/mp4" />
                  </video>
                </figure>
              </div>
            </article>
          </div>
        </section>

        <section className="publications-section section-frame" id="publications">
          <header className="section-heading compact-heading">
            <span className="section-number">03</span>
            <div>
              <p className="section-eyebrow">PUBLICATIONS / 論文</p>
              <h2>
                <span className="lang jp">主な研究成果</span>
                <span className="lang en">Selected publications</span>
              </h2>
            </div>
          </header>

          <div className="publication-list">
            <a className="publication-row" href="https://openreview.net/forum?id=RVGkT9ISVf" target="_blank" rel="noreferrer">
              <span className="publication-year">2026</span>
              <span className="publication-main">
                <strong>Consistency Trajectory Planning</strong>
                <span>High-Quality and Efficient Trajectory Optimization for Offline Model-Based Reinforcement Learning</span>
              </span>
              <span className="publication-venue">TMLR</span>
              <ExternalArrow />
            </a>
            <a className="publication-row" href="https://openreview.net/forum?id=pUvF97zAu9" target="_blank" rel="noreferrer">
              <span className="publication-year">2025</span>
              <span className="publication-main">
                <strong>Which Experiences Are Influential for RL Agents?</strong>
                <span>Efficiently Estimating the Influence of Experiences</span>
              </span>
              <span className="publication-venue">RLJ / RLC</span>
              <ExternalArrow />
            </a>
            <a className="publication-row" href="https://openreview.net/forum?id=TuACCzfty3" target="_blank" rel="noreferrer">
              <span className="publication-year">2024</span>
              <span className="publication-main">
                <strong>Planning with Consistency Models</strong>
                <span>for Model-Based Offline Reinforcement Learning</span>
              </span>
              <span className="publication-venue">TMLR</span>
              <ExternalArrow />
            </a>
            <div className="publication-row publication-static">
              <span className="publication-year">2023</span>
              <span className="publication-main">
                <strong>A Reward Function Design for CSTR Simulation Environments</strong>
                <span>Stable reinforcement learning for chemical process control</span>
              </span>
              <span className="publication-venue">SICE</span>
              <span aria-hidden="true">—</span>
            </div>
          </div>

          <div className="publication-actions">
            <a className="text-link" href="https://openreview.net/profile?id=~Guanquan_Wang1" target="_blank" rel="noreferrer">
              OpenReview <ExternalArrow />
            </a>
            <a className="text-link" href="https://github.com/GuanquanWang/consistency_planning" target="_blank" rel="noreferrer">
              Consistency Planning code <ExternalArrow />
            </a>
          </div>
        </section>

        <section className="profile-section section-frame" id="profile">
          <header className="section-heading compact-heading">
            <span className="section-number">04</span>
            <div>
              <p className="section-eyebrow">PROFILE / 経歴</p>
              <h2>
                <span className="lang jp">制御工学から Embodied AI へ</span>
                <span className="lang en">From control engineering to embodied AI</span>
              </h2>
            </div>
          </header>

          <div className="profile-grid">
            <div className="timeline">
              <article className="timeline-item active">
                <time>2022.04 — 2026.09</time>
                <h3>
                  <span className="lang jp">東京大学 博士後期課程</span>
                  <span className="lang en">The University of Tokyo · Ph.D.</span>
                </h3>
                <p className="lang jp">電子情報学専攻 · 鶴岡研究室</p>
                <p className="lang en">Information and Communication Engineering · Tsuruoka Laboratory</p>
              </article>
              <article className="timeline-item">
                <time>2022.12 — 2025.03</time>
                <h3>
                  <span className="lang jp">NEC-AIST 人工知能連携研究室</span>
                  <span className="lang en">NEC-AIST AI Cooperative Research Laboratory</span>
                </h3>
                <p className="lang jp">リサーチアシスタント</p>
                <p className="lang en">Research Assistant</p>
              </article>
              <article className="timeline-item">
                <time>2015.09 — 2018.03</time>
                <h3>
                  <span className="lang jp">上海交通大学 修士</span>
                  <span className="lang en">Shanghai Jiao Tong University · M.Eng.</span>
                </h3>
                <p className="lang jp">制御科学・工程学</p>
                <p className="lang en">Control Science and Engineering</p>
              </article>
              <article className="timeline-item">
                <time>2014.09 — 2016.09</time>
                <h3>
                  <span className="lang jp">早稲田大学大学院 修士</span>
                  <span className="lang en">Waseda University · M.Eng.</span>
                </h3>
                <p className="lang jp">情報生産システム工学 · ダブルディグリー</p>
                <p className="lang en">Information, Production and Systems · Double degree</p>
              </article>
              <article className="timeline-item">
                <time>2011.09 — 2015.06</time>
                <h3>
                  <span className="lang jp">上海交通大学 学士</span>
                  <span className="lang en">Shanghai Jiao Tong University · B.Eng.</span>
                </h3>
                <p className="lang jp">自動制御工学</p>
                <p className="lang en">Automation</p>
              </article>
            </div>

            <aside className="capabilities">
              <div className="capability-block">
                <span className="capability-label">RESEARCH</span>
                <p>Robot Learning · Embodied AI · Offline RL · Model-Based RL · VLA · Foundation Models</p>
              </div>
              <div className="capability-block">
                <span className="capability-label">MODELS</span>
                <p>PyTorch · Transformers · Diffusion · Consistency Models · Shortcut Models · World Models</p>
              </div>
              <div className="capability-block">
                <span className="capability-label">ROBOTICS</span>
                <p>Trajectory Optimization · MPC · Imitation Learning · Sim-to-Real · State Estimation</p>
              </div>
              <div className="capability-block">
                <span className="capability-label">TOOLS</span>
                <p>Python · C++ · MuJoCo · D4RL · LIBERO · Isaac Gym · Docker · GPU / HPC</p>
              </div>
              <div className="fellowship-note">
                <span>2022 — 2025</span>
                <strong>
                  <span className="lang jp">知能社会国際卓越大学院フェローシップ</span>
                  <span className="lang en">Intelligent World Fellowship</span>
                </strong>
              </div>
            </aside>
          </div>
        </section>

        <section className="contact-section section-frame" id="contact">
          <div className="contact-copy">
            <p className="section-eyebrow">LET’S BUILD INTELLIGENT SYSTEMS.</p>
            <h2>
              <span className="lang jp">研究を、実世界で動く技術へ。</span>
              <span className="lang en">From research to systems that move.</span>
            </h2>
            <p className="lang jp">
              日本国内のロボティクス AI、自律システム、Embodied AI の研究開発職を検討しています。
            </p>
            <p className="lang en">
              I am exploring R&amp;D opportunities in robotics AI, autonomous systems,
              and embodied intelligence in Japan.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:james23sh@gmail.com">EMAIL <ExternalArrow /></a>
            <a href="https://github.com/GuanquanWang" target="_blank" rel="noreferrer">GITHUB <ExternalArrow /></a>
            <a href="https://www.linkedin.com/in/guanquan-wang-5398253b8" target="_blank" rel="noreferrer">LINKEDIN <ExternalArrow /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 GUANQUAN WANG</span>
        <span>TOKYO · JAPAN</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}
