# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## Unreleased

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

## v8.0.5 - 2019-02-16

### Changed

- 会員プログラムの注文返品時に会員プログラム更新タスクを中止するように変更

## v8.0.4 - 2019-02-15

### Fixed

- 会員プログラムの返品処理が動作しないバグを解消

## v8.0.3 - 2019-02-14

### Changed

- 所有権インターフェースをCinerinoに統一
- 映画作品インポートジョブのスケジュール変更

## v8.0.2 - 2019-02-07

### Changed

- 上映イベントに、スクリーン座席数を最大収容人数としてセット

## v8.0.1 - 2019-02-06

### Changed

- update sskts-domain

## v8.0.0 - 2019-02-05

### Changed

- 組織のxmlEndPointをadditionalPropertyから読み出すように変更
- install @motionpicture/sskts-domain@28.0.0
- タスク名をCinerinoに統一
- クレジットカード決済インターフェースをCinerinoに統一
- クレジットカード返金インターフェースをCinerinoに統一
- 注文タスクインターフェースをCinerinoに統一
- 注文配送タスクインターフェースをCinerinoに統一
- 返品タスクインターフェースをCinerinoに統一
- イベントインターフェースをCinerinoに統一
- 予約インターフェースをCinerinoに統一
- 注文インターフェースをCinerinoに統一

## v7.0.0 - 2019-01-28

### Changed

- 人物インターフェースを拡張
- 注文の決済方法にムビチケを追加するように変更
- 上映イベントタイプを上映イベントシリーズタイプに変更
- install @motionpicture/sskts-domain@27.0.0
- 決済方法承認アクションインターフェースを強化
- Pecorinoを利用した口座とのやりとりを実行するタスク名を再命名
- ムビチケを決済方法として解釈し、注文における顧客の発生金額が0となるように変更

### Fixed

- 日をまたぐイベントの終了日時インポート処理を修正

## v6.1.3 - 2018-12-10

### Changed

- COAからのデータインポートを劇場ごとに直列実行するように変更

## v6.1.2 - 2018-12-10

### Changed

- イベントのID属性を文字列型に変更
- 上映イベントインポートタスクを継続的ジョブへ変更

### Fixed

- イベントインポート処理のエラーハンドリング調整のために、複数劇場のインポート処理を直列実行に変更
- スケジュールXMLのschedule属性が未定義の場合にスケジュールの読み込みをスルーするように対応

## v6.1.1 - 2018-11-16

### Changed

- 劇場マスタ情報を組織へも反映するように変更。

## v6.1.0 - 2018-11-05

### Changed

- XML情報をMongoDBから読み込むように変更。

## v6.0.3 - 2018-10-11

### Changed

- 先行XML参照処理を追加

## v6.0.2 - 2018-10-08

### Changed

- update domain.
- Pecorino環境変数を調整。

## v6.0.1 - 2018-10-06

### Added

- ウェブフックトリガージョブを追加。

### Changed

- 複数のRedisCache接続環境変数を統合。
- 口座タイプを追加して、Pecorinoに指定するように変更。

## v6.0.0 - 2018-08-23

### Fixed

- スケジュールXML同期
- 退会処理
- 1ポイント追加

## v5.1.1 - 2018-06-09

### Fixed

- sskts-domain内でのエラーハンドラーを読み込むパスの間違いを修正。

### Added

- Pecorinoインセンティブ付与ジョブを追加。
- 中止取引に対する監視ジョブを追加。
- Pecorino返金ジョブを追加。
- Pecorino取引中止タスクを追加。
- Pecorinoインセンティブ返却ジョブを追加。
- 会員プログラム登録ジョブを追加。
- Pecorinoインセンティブ承認取消ジョブを追加。
- 会員プログラム登録解除ジョブを追加。

### Changed

- update packages.

## v5.0.2 - 2018-02-28
### Changed
- install sskts-domain@24.0.0.

## v5.0.1 - 2018-02-26
### Added
- Pecorino支払実行ジョブを追加。

## v5.0.0 - 2018-02-21
### Added
- 注文返品取引監視ジョブを追加。
- クレジットカード売上取消ジョブを追加。
- 注文返品処理ジョブを追加。
- 注文配送タスク監視ジョブを追加。
- Eメール送信アクションをパラメーターに持つ、新しいEメール送信タスク監視ジョブを追加。

### Changed
- 注文に対するタスク実行時にアクションを保管するように変更。
- アクションと取引に対して潜在アクション属性を定義。
- 注文取引確定後のアクションフローが、潜在アクションの指定通りに実行されるように変更。
- 承認アクションのobjectに型を定義し、purposeを取引型に変更。
- 注文の配送前後のステータス遷移を管理するように変更。

### Fixed
- COAからの上映イベント同期時に、COAにないイベントをキャンセルステータスへ変更する処理を追加。

## v4.0.5 - 2017-12-13
### Changed
- 確定取引に対する継続ジョブのインターバルを短縮。
- クレジットカードオーソリ取消ジョブがマルチインスタンスで動作しないように設定。

## v4.0.4 - 2017-12-06
### Fixed
- COA本予約時の予約金額パラメーターに注文の割引金額が含まれているバグを修正。

## v4.0.3 - 2017-11-21
### Changed
- 上映イベントの空席状況と、上映イベント自体のインポート期間を合わせるように調整。
- MovieTheaterインポート時にidentifierフィールドがセットされるように修正。

### Fixed
- COAの認証エラーが頻出するバグ対応として[sskts-domain](https://www.npmjs.com/package/@motionpicture/sskts-domain)をアップデート。

## v4.0.2 - 2017-11-01
### Changed
- COA本予約時に渡す電話番号から数字以外の文字列を除去。

## v4.0.1 - 2017-10-31
### Changed
- MongoDBのコレクションのいくつかのインデックスを追加。

## v4.0.0 - 2017-10-31
### Changed
- schema.orgを取り入れた新しいDBインターフェースでジョブを再構築。
- 上映イベントのインポート期間を先3カ月分に延長。

## v3.3.0 - 2017-07-10
### Added
- キュー仕様→タスク仕様の変更において整合性を保つためのジョブを一時的に追加

### Changed
- update package [@motionpicture/sskts-domain@22.0.0](https://www.npmjs.com/package/@motionpicture/sskts-domain)
- jobsからcmdファイルを削除し、全て直接jsファイルを実行するように変更。

### Removed
- キュー仕様前提の不要なジョブを削除。

### Security
- update package [tslint-microsoft-contrib@5.0.1](https://github.com/Microsoft/tslint-microsoft-contrib)
- update package [snyk@1.36.2](https://www.npmjs.com/package/snyk)
- update package [tslint@5.5.0](https://www.npmjs.com/package/tslint)
- update package [typescript@2.4.1](https://www.npmjs.com/package/typescript)

## v3.2.0 - 2017-07-04
### Added
- 各タスクの状態監視ジョブを新規作成。
- タスクの中止あるいはリトライジョブを新規作成。

### Changed
- 取引からタスクをエクスポートするように変更。具体的には、bin/watchClosedTransactionとbin/watchExpiredTransactionの調整。
- MongoDBのslow queriesレポートに対応してindexを追加。
- タスクや取引を監視させるインターバル時間(秒)を調整。1インスタンスあたりの頻度をやや下げる対応。

### Fixed
- タスク実行時のソート条件が間違っていたので修正。

## v3.1.0 - 2017-06-28
### Changed
- パフォーマンス在庫状況表現を空席率(%)に変更。
- package-lock.jsonを追加。

## v3.0.0 - 2017-06-19
### Removed
- 取引在庫準備ジョブが不要になったので削除。
- 取引クリーンジョブが不要になったので削除。

## v2.0.20 - 2017-04-20
### Added
- ファーストリリース
