# Guanquan Wang — research portfolio

A Japanese-first, bilingual research portfolio for robot learning and embodied AI roles in Japan.

## 在本地预览网页（macOS）

### 首次使用

本项目要求 Node.js 版本不低于 `22.13.0`。如果电脑尚未安装 Node.js，请从
[Node.js 官网](https://nodejs.org/)下载并安装 **LTS** 版本。安装完成后，重新打开终端并检查：

```bash
node -v
npm -v
```

进入项目目录，并通过 Node.js 自带的 Corepack 安装项目指定版本的 pnpm 和依赖：

```bash
cd /path/to/personal_web
corepack pnpm install
```

本项目已经在 `package.json` 中固定使用 `pnpm 11.9.0`。不需要执行
`npm install -g pnpm`；在 macOS 上，该命令可能因无权写入 `/usr/local/lib/node_modules`
而出现 `EACCES: permission denied`。

### 日常启动网页

打开终端，运行：

```bash
cd /path/to/personal_web
corepack pnpm run dev --hostname 127.0.0.1
```

看到 `Ready` 后，在浏览器访问：

<http://127.0.0.1:3000/>

预览期间需要保持终端窗口运行。停止本地网页服务器时，在该终端中按
`Control + C`。

如果修改了依赖或首次在另一台电脑运行，请重新执行：

```bash
corepack pnpm install
```

如果终端提示 `node: command not found`，请先安装 Node.js LTS 并重新打开终端。
如果安装器已经完成安装但仍找不到 Node.js，可以临时运行：

```bash
export PATH="/usr/local/bin:$PATH"
```

## GitHub Pages

1. Create a repository named `GuanquanWang.github.io` under the `GuanquanWang` account.
2. Push this project to the repository's `main` branch.
3. In **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
4. The included workflow builds the static site and publishes it automatically.

The source CV PDFs and final-defense PowerPoint are intentionally not published because they contain private contact information and large internal source assets. The public page contains only selected, recruiter-facing information and research videos.
