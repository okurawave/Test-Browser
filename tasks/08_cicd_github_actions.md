# タスク08: CI/CD（GitHub Actions）構築

## 概要
- mainブランチpush時のCI（npm install, npm test）ワークフロー作成
- Gitタグpush時のCD（Windows/macOSパッケージ作成・リリース）ワークフロー作成

## 詳細手順
1. `.github/workflows`ディレクトリ作成
2. CI用workflowファイル作成
3. CD用workflowファイル作成
4. Electron Forge/Electron Builderのパッケージング設定
5. GitHub Releasesへの成果物アップロード設定

## 完了条件
- CI/CDワークフローが自動実行され、成果物がリリースにアップロードされる
