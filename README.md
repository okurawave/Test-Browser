# Test-Browser

シンプルWebブラウザ開発プロジェクト

## 概要
- Electron + Node.js によるクロスプラットフォームデスクトップアプリ
- 要件定義は `about.md` を参照

## ディレクトリ構成（初期）

```
Test-Browser/
├─ src/           # Electronメインプロセス
│  └─ main.js
├─ public/        # レンダラープロセス（UI）
│  └─ index.html
├─ assets/        # 画像・アイコン等
├─ tasks/         # タスク分解・進捗管理
├─ about.md       # 要件定義書
├─ README.md      # プロジェクト説明
├─ .gitignore     # Git管理除外
├─ package.json   # npm管理
```

## セットアップ
1. Node.js, npm, Git, VS Code をインストール
2. `npm install` で依存関係を導入
3. `npm start` でアプリ起動（後続タスクでスクリプト追加）
