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

      <header className="site-header">
        <div className="header-inner">
          <a className="site-name" href="#top">
            Guanquan Wang
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#research">
              <span className="nav-jp">研究</span>
              <span className="nav-en">Research</span>
            </a>
            <a href="#videos">
              <span className="nav-jp">動画</span>
              <span className="nav-en">Videos</span>
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
            <span className="switch-jp">日本語</span>
            <span aria-hidden="true">/</span>
            <span className="switch-en">EN</span>
          </label>
        </div>
      </header>

      <main className="page" id="top">
        <section className="intro" aria-labelledby="name-heading">
          <figure className="portrait">
            <Image
              src="/wang-guanquan.jpg"
              alt="Guanquan Wang"
              width={1120}
              height={1500}
              priority
              unoptimized
            />
          </figure>

          <div className="intro-copy">
            <h1 id="name-heading">Guanquan Wang <span>王 冠権</span></h1>
            <p className="role">
              <span className="lang jp">東京大学 博士後期課程 · ロボット学習</span>
              <span className="lang en">Ph.D. candidate · Robot Learning · The University of Tokyo</span>
            </p>
            <p className="bio lang jp">
              強化学習、生成モデル、モデルベース制御を用いた軌道計画を研究しています。
              特に、長期的な行動計画を少ない推論ステップで生成する方法に取り組んでいます。
            </p>
            <p className="bio lang en">
              I study trajectory planning with reinforcement learning, generative models,
              and model-based control, with a focus on generating long-horizon plans in fewer inference steps.
            </p>
            <p className="availability lang jp">2026年秋以降、日本国内の研究開発職を希望しています。</p>
            <p className="availability lang en">Seeking research and development roles in Japan from autumn 2026.</p>
            <div className="profile-links" aria-label="Profile links">
              <a href="mailto:gqwang2016@gmail.com">Email</a>
              <a href="https://github.com/GuanquanWang" target="_blank" rel="noreferrer">GitHub <ExternalArrow /></a>
              <a href="https://openreview.net/profile?id=~Guanquan_Wang1" target="_blank" rel="noreferrer">OpenReview <ExternalArrow /></a>
              <a href="https://www.linkedin.com/in/guanquan-wang-5398253b8" target="_blank" rel="noreferrer">LinkedIn <ExternalArrow /></a>
            </div>
          </div>
        </section>

        <section className="section" id="research">
          <header className="section-header">
            <p className="section-label">Research</p>
            <h2>
              <span className="lang jp">生成式軌道計画の研究</span>
              <span className="lang en">Generative trajectory planning</span>
            </h2>
          </header>

          <div className="section-intro">
            <p className="lang jp">
              拡散モデルによる軌道生成は表現力が高い一方、反復的なノイズ除去を必要とします。
              以下の研究では、速度、計画品質、学習方法を順に検討してきました。
            </p>
            <p className="lang en">
              Diffusion-based trajectory models are expressive but require iterative denoising.
              This line of work studies inference speed, planning quality, and training design in sequence.
            </p>
          </div>

          <ol className="research-path" aria-label="Research progression from CP to CTP to STP">
            <li className="path-item">
              <div className="path-rail">
                <span className="path-dot" />
                <time>2024</time>
              </div>
              <article className="path-content">
                <header>
                  <div>
                    <span className="method-abbr">CP</span>
                    <h3>Consistency Planning</h3>
                  </div>
                  <span className="venue">TMLR 2024</span>
                </header>
                <p className="lang jp">
                  拡散プランナーを consistency model に蒸留し、少数ステップで軌道を生成します。
                  評価環境では、性能を保ちながら推論を最大12倍高速化しました。
                </p>
                <p className="lang en">
                  Distills a diffusion planner into a consistency model for few-step trajectory generation,
                  with up to 12× faster inference in the evaluated environments.
                </p>
                <p className="evolution-note">
                  <span className="lang jp"><strong>着目点：</strong>反復サンプリング → 少数ステップ推論</span>
                  <span className="lang en"><strong>Focus:</strong> iterative sampling → few-step inference</span>
                </p>
                <a className="paper-link" href="https://openreview.net/forum?id=TuACCzfty3" target="_blank" rel="noreferrer">
                  Paper <ExternalArrow />
                </a>
              </article>
            </li>

            <li className="path-item">
              <div className="path-rail">
                <span className="path-dot" />
                <time>2026</time>
              </div>
              <article className="path-content">
                <header>
                  <div>
                    <span className="method-abbr">CTP</span>
                    <h3>Consistency Trajectory Planning</h3>
                  </div>
                  <span className="venue">TMLR 2026</span>
                </header>
                <p className="lang jp">
                  任意のノイズレベル間を移動できる軌道モデルと critic による候補選択を導入し、
                  長期・ゴール条件付きタスクでの計画品質を改善します。
                </p>
                <p className="lang en">
                  Introduces flexible transitions between noise levels and critic-based candidate selection
                  to improve long-horizon, goal-conditioned planning.
                </p>
                <p className="evolution-note">
                  <span className="lang jp"><strong>着目点：</strong>推論速度 → 柔軟なサンプリングと計画品質</span>
                  <span className="lang en"><strong>Focus:</strong> inference speed → flexible sampling and plan quality</span>
                </p>
                <a className="paper-link" href="https://openreview.net/forum?id=RVGkT9ISVf" target="_blank" rel="noreferrer">
                  Paper <ExternalArrow />
                </a>
              </article>
            </li>

            <li className="path-item">
              <div className="path-rail">
                <span className="path-dot" />
                <time>Current</time>
              </div>
              <article className="path-content">
                <header>
                  <div>
                    <span className="method-abbr">STP</span>
                    <h3>Shortcut Trajectory Planning</h3>
                  </div>
                  <span className="venue">Under review</span>
                </header>
                <p className="lang jp">
                  単一段階の学習、warm-start、実行可能性を考慮した候補選択を組み合わせ、
                  より簡潔で実用的な高速軌道計画を検討しています。
                </p>
                <p className="lang en">
                  Combines single-stage training, warm starts, and feasibility-aware selection
                  toward a simpler and more practical fast trajectory planner.
                </p>
                <p className="evolution-note">
                  <span className="lang jp"><strong>着目点：</strong>計画品質 → 学習の簡潔さと実行可能性</span>
                  <span className="lang en"><strong>Focus:</strong> plan quality → simpler training and feasibility</span>
                </p>
                <span className="paper-status">
                  <span className="lang jp">TMLR 査読中</span>
                  <span className="lang en">TMLR submission</span>
                </span>
              </article>
            </li>
          </ol>
        </section>

        <section className="section video-section" id="videos">
          <header className="section-header">
            <p className="section-label">Videos</p>
            <h2>
              <span className="lang jp">実験動画</span>
              <span className="lang en">Experiment videos</span>
            </h2>
          </header>
          <div className="section-intro">
            <p className="lang jp">STP による軌道計画の実行例です。</p>
            <p className="lang en">Example rollouts generated by STP.</p>
          </div>

          <article className="video-study">
            <header>
              <h3>Kitchen</h3>
              <p className="lang jp">複数の物体操作を順番に完了する長期タスク。</p>
              <p className="lang en">A long-horizon sequence of object-manipulation subtasks.</p>
            </header>
            <div className="video-grid">
              <figure>
                <video controls muted loop playsInline preload="metadata">
                  <source src="/media/kitchen-stp.mp4" type="video/mp4" />
                </video>
                <figcaption><strong>STP</strong><span>Proposed method</span></figcaption>
              </figure>
            </div>
          </article>

          <article className="video-study">
            <header>
              <h3>AntMaze</h3>
              <p className="lang jp">AntMaze Medium と Large における、高次元な四足歩行ロボットの長期迷路探索。</p>
              <p className="lang en">Long-horizon quadruped navigation on AntMaze Medium and Large.</p>
            </header>
            <div className="video-grid">
              <figure>
                <video controls muted loop playsInline preload="metadata">
                  <source src="/media/antmaze-stp.mp4" type="video/mp4" />
                </video>
                <figcaption><strong>STP</strong><span>Medium → Large</span></figcaption>
              </figure>
            </div>
          </article>

          <article className="video-study">
            <header>
              <h3>Adroit</h3>
              <p className="lang jp">高自由度ロボットハンドによる Door、Hammer、Pen の精密な物体操作。</p>
              <p className="lang en">Dexterous manipulation of Door, Hammer, and Pen with a high-DoF robotic hand.</p>
            </header>
            <div className="video-grid">
              <figure>
                <video controls muted loop playsInline preload="metadata">
                  <source src="/media/adroit-stp.mp4" type="video/mp4" />
                </video>
                <figcaption><strong>STP</strong><span>Door → Hammer → Pen</span></figcaption>
              </figure>
            </div>
          </article>
        </section>

        <section className="section" id="publications">
          <header className="section-header">
            <p className="section-label">Publications</p>
            <h2>
              <span className="lang jp">主な論文</span>
              <span className="lang en">Selected publications</span>
            </h2>
          </header>
          <ol className="publication-list">
            <li>
              <span className="publication-year">2026</span>
              <p>
                <strong>Consistency Trajectory Planning: High-Quality and Efficient Trajectory Optimization for Offline Model-Based Reinforcement Learning.</strong>
                <span className="publication-authors"><b>Guanquan Wang</b>, Takuya Hiraoka, Yoshimasa Tsuruoka · TMLR.</span>
                <a href="https://openreview.net/forum?id=RVGkT9ISVf" target="_blank" rel="noreferrer">Paper <ExternalArrow /></a>
              </p>
            </li>
            <li>
              <span className="publication-year">2025</span>
              <p>
                <strong>Which Experiences Are Influential for RL Agents? Efficiently Estimating the Influence of Experiences.</strong>
                <span className="publication-authors">Takuya Hiraoka, <b>Guanquan Wang</b>, Takashi Onishi, Yoshimasa Tsuruoka · RLJ / RLC.</span>
                <a href="https://openreview.net/forum?id=pUvF97zAu9" target="_blank" rel="noreferrer">Paper <ExternalArrow /></a>
              </p>
            </li>
            <li>
              <span className="publication-year">2024</span>
              <p>
                <strong>Planning with Consistency Models for Model-Based Offline Reinforcement Learning.</strong>
                <span className="publication-authors"><b>Guanquan Wang</b>, Takuya Hiraoka, Yoshimasa Tsuruoka · TMLR.</span>
                <a href="https://openreview.net/forum?id=TuACCzfty3" target="_blank" rel="noreferrer">Paper <ExternalArrow /></a>
              </p>
            </li>
            <li>
              <span className="publication-year">2024</span>
              <p>
                <strong>Planning with Consistency Models for Model-Based Offline Reinforcement Learning.</strong>
                <span className="publication-authors"><b>Guanquan Wang</b>, Takuya Hiraoka, Yoshimasa Tsuruoka · Deployable RL: From Research to Practice @ RLC 2024.</span>
                <a href="https://openreview.net/forum?id=vxnMxWJRSM" target="_blank" rel="noreferrer">Paper <ExternalArrow /></a>
              </p>
            </li>
            <li>
              <span className="publication-year">2023</span>
              <p>
                <strong>A Reward Function Design for CSTR Simulation Environments.</strong>
                <span className="publication-authors"><b>Guanquan Wang</b>, Takuya Hiraoka, Yoshimasa Tsuruoka · SICE.</span>
              </p>
            </li>
            <li>
              <span className="publication-year">2017</span>
              <p>
                <strong>A Detail-Preserved and Luminance-Consistent Multi-Exposure Image Fusion Algorithm.</strong>
                <span className="publication-authors"><b>Guanquan Wang</b>, Yue Zhou · ICMV.</span>
              </p>
            </li>
            <li>
              <span className="publication-year">2016</span>
              <p>
                <strong>Optimizing Vehicle Localization based on Particle Filter and Kalman Filter.</strong>
                <span className="publication-authors"><b>Guanquan Wang</b>, Hee-hyol Lee · ICT-ROBOT.</span>
              </p>
            </li>
          </ol>
        </section>

        <section className="section" id="profile">
          <header className="section-header">
            <p className="section-label">Profile</p>
            <h2>
              <span className="lang jp">経歴とスキル</span>
              <span className="lang en">Experience and skills</span>
            </h2>
          </header>

          <div className="profile-grid">
            <div>
              <h3>
                <span className="lang jp">経歴</span>
                <span className="lang en">Experience</span>
              </h3>
              <dl className="cv-list">
                <div>
                  <dt>2022.04–2026.09</dt>
                  <dd>
                    <strong className="lang jp">東京大学 博士後期課程</strong>
                    <strong className="lang en">The University of Tokyo · Ph.D.</strong>
                    <span className="lang jp">電子情報学専攻 · 鶴岡研究室</span>
                    <span className="lang en">Information and Communication Engineering · Tsuruoka Laboratory</span>
                  </dd>
                </div>
                <div>
                  <dt>2022.12–2025.03</dt>
                  <dd>
                    <strong className="lang jp">NEC-AIST 人工知能連携研究室</strong>
                    <strong className="lang en">NEC-AIST AI Cooperative Research Laboratory</strong>
                    <span className="lang jp">リサーチアシスタント</span>
                    <span className="lang en">Research Assistant</span>
                  </dd>
                </div>
                <div>
                  <dt>2015.09–2018.03</dt>
                  <dd>
                    <strong className="lang jp">上海交通大学 修士</strong>
                    <strong className="lang en">Shanghai Jiao Tong University · M.Eng.</strong>
                    <span className="lang jp">制御科学・工程学</span>
                    <span className="lang en">Control Science and Engineering</span>
                  </dd>
                </div>
                <div>
                  <dt>2014.09–2016.09</dt>
                  <dd>
                    <strong className="lang jp">早稲田大学大学院 修士</strong>
                    <strong className="lang en">Waseda University · M.Eng.</strong>
                    <span className="lang jp">情報生産システム工学 · ダブルディグリー</span>
                    <span className="lang en">Information, Production and Systems · Double degree</span>
                  </dd>
                </div>
                <div>
                  <dt>2011.09–2015.06</dt>
                  <dd>
                    <strong className="lang jp">上海交通大学 学士</strong>
                    <strong className="lang en">Shanghai Jiao Tong University · B.Eng.</strong>
                    <span className="lang jp">自動制御工学</span>
                    <span className="lang en">Automation</span>
                  </dd>
                </div>
              </dl>
            </div>

            <aside className="skills">
              <h3>
                <span className="lang jp">研究・技術</span>
                <span className="lang en">Research and technical skills</span>
              </h3>
              <dl>
                <div>
                  <dt>Research</dt>
                  <dd>Robot Learning, Embodied AI, Offline RL, Model-Based RL, VLA</dd>
                </div>
                <div>
                  <dt>Methods</dt>
                  <dd>Transformers, Diffusion Models, Consistency Models, World Models, MPC</dd>
                </div>
                <div>
                  <dt>Tools</dt>
                  <dd>Python, C++, PyTorch, MuJoCo, D4RL, Docker</dd>
                </div>
                <div>
                  <dt>Languages</dt>
                  <dd>Chinese (native), English (professional), Japanese (JLPT N2)</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <span>© 2026 Guanquan Wang</span>
          <a href="mailto:gqwang2016@gmail.com">gqwang2016@gmail.com</a>
          <a href="#top">
            <span className="nav-jp">ページ上部へ</span>
            <span className="nav-en">Back to top</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
