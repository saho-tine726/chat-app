# chat-app

## 概要
チャンネルを選んでメッセージを投稿できるチャットアプリです。

## デモサイト
https://chat-app-iota-liart.vercel.app/

## 使用言語・ライブラリ・フレームワーク・ツール
<p>
<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
<img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white">
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white">
</p>
<table>
  <tr>
    <td>React</td>
    <td>^18.3.1</td>
  </tr>
  <tr>
    <td>Redux</td>
    <td>^9.1.2</td>
  </tr>
  <tr>
    <td>TypeScript</td>
    <td>^4.9.5</td>
  </tr>
  <tr>
    <td>Sass</td>
    <td>^1.77.2</td>
  </tr>
</table>


## データベース

<p>
<img src="https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34">
</p>
<table>
  <tr>
    <td>Firebase</td>
    <td>^10.12.0</td>
  </tr>
</table>

## 仕様
- Googleアカウントのログイン機能を搭載
- Googleアカウントで登録している名前・アイコンを利用
- チャンネルリスト横の「＋」を押すと、新しいチャンネルを作成
- Firebaseにデータを格納
- Firebase FirestoreのonSnapshotを使い、データの追加をリアルタイムで反映

## 工夫点など
- デザインも自作
- React hooks（カスタムフック）使用
- CSSはSCSS、一部Marerial Ulで記述