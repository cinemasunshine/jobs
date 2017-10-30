<img src="https://motionpicture.jp/images/common/logo_01.svg" alt="motionpicture" title="motionpicture" align="right" height="56" width="98"/>

# SSKTS jobs application

## Getting Started

### インフラ
基本的にnode.jsのウェブアプリケーション。
AzureのWebAppsでWebJobsを動作させる想定。

### 言語
実態としては、linuxあるいはwindows上でのnode.js。プログラミング言語としては、TypeScript。

* [TypeScript](https://www.typescriptlang.org/)

### 開発方法
npmでパッケージをインストール。

```shell
npm install
```
* [npm](https://www.npmjs.com/)


typescriptをjavascriptにコンパイル。

```shell
npm run build
```


### Environment variables

| Name                                      | Required              | Purpose                        | Value        |
|-------------------------------------------|-----------------------|--------------------------------|--------------|
| `DEBUG`                                   | false                 | Debug                          | sskts-jobs:* |
| `NPM_TOKEN`                               | true                  | NPM auth token                 ||
| `NODE_ENV`                                | true                  | environment name               ||
| `MONGOLAB_URI`                            | true                  | MongoDB connection URI         ||
| `SENDGRID_API_KEY`                        | true                  | SendGrid API Key               ||
| `GMO_ENDPOINT`                            | true                  | GMO API endpoint               ||
| `GMO_SITE_ID`                             | true                  | GMO SiteID                     ||
| `GMO_SITE_PASS`                           | true                  | GMO SitePass                   ||
| `COA_ENDPOINT`                            | true                  | COA API endpoint               ||
| `COA_REFRESH_TOKEN`                       | true                  | COA API refresh token          ||
| `SSKTS_DEVELOPER_EMAIL`                   | true                  | 開発者通知用メールアドレス        ||
| `ITEM_AVAILABILITY_REDIS_HOST`            | true                  | 在庫状況保管用Redis Cache host       ||
| `ITEM_AVAILABILITY_REDIS_PORT`            | true                  | 在庫状況保管用Redis Cache port       ||
| `ITEM_AVAILABILITY_REDIS_KEY`             | true                  | 在庫状況保管用Redis Cache key        ||
| `LENGTH_IMPORT_SCREENING_EVENTS_IN_WEEKS` | true                  | 上映イベントを何週間後までインポートするか ||
| `WEBSITE_NODE_DEFAULT_VERSION`            | only on Azure WebApps | Node.js version                    ||
| `WEBSITE_TIME_ZONE`                       | only on Azure WebApps |                                    | Tokyo Standard Time |
| `WEBJOBS_ROOT_PATH`                       | only on Azure WebApps |                                    | dst/jobs||


## tslint

コード品質チェックをtslintで行う。
* [tslint](https://github.com/palantir/tslint)
* [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib)

`npm run check`でチェック実行。


## パッケージ脆弱性のチェック

* [nsp](https://www.npmjs.com/package/nsp)


## clean
`npm run clean`で不要なソース削除。


## テスト
`npm test`でテスト実行。


## ドキュメント
`npm run doc`でjsdocが作成されます。
