# untitled1

A new Flutter project.

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)

For help getting started with Flutter, view our
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.


# 開発方法

wsl単体でflutter開発は結構ハードルが高そうなので、windows上のファイルを更新し、PowerShellでflutterをビルドする
flutter-sdkを利用
1. wslで開発 mnt/c/...で、windows上のフォルダにシンボリックリンクを張る
1. PowerShellを開いて対象開発フォルダまで移動
1. PowerShellでflutter run
1. wsl上で更新したら、PowerShellで`r`でhot reload
